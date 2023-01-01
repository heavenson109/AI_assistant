import { AxiosError } from 'axios';
import config from '../config/index.js';
import { t } from '../locales/index.js';
import { MESSAGE_TYPE_IMAGE, MESSAGE_TYPE_TEXT } from '../services/line.js';
import storage from '../storage/index.js';
import fetchUser from '../utils/fetch-user.js';
import { MessageAction } from './actions/index.js';
import Event from './event.js';
import { updateHistory } from './history/index.js';
import { ImageMessage, TemplateMessage, TextMessage } from './messages/index.js';

class Context {
  event;

  displayName;

  messages = [];

  /**
   * @param {Event} event
   */
  constructor(event) {
    this.event = event;
  }

  get contextId() {
    if (this.event.isGroup) return this.event.source.groupId;
    return this.event.source.userId;
  }

  /**
   * @returns {string}
   */
  get replyToken() {
    return this.event.replyToken;
  }

  /**
   * @returns {string}
   */
  get userId() {
    return this.event.userId;
  }

  /**
   * @returns {string}
   */
  get trimmedText() {
    if (!this.event.isText) return this.event.message.type;
    return this.event.text.replace(config.BOT_AI_NAME, ' ').replaceAll('　', ' ').trim();
  }

  async initialize() {
    try {
      await storage.initialize();
    } catch (err) {
      this.pushError(err);
    }
    try {
      const user = await fetchUser(this.userId);
      this.displayName = user.displayName;
    } catch {
      this.displayName = t('__COMPLETION_PARTICIPANT_SOMEONE');
    }
    updateHistory(this.contextId, (history) => history.write(this.displayName, this.trimmedText));
    return this;
  }

  /**
   * @param {Object} param
   * @param {string} param.text
   * @param {Array<string>} param.aliases
   * @returns {boolean}
   */
  isCommand({
    text,
    aliases,
  }) {
    if (!this.event.isText) return false;
    const input = this.trimmedText.toLowerCase();
    if (input === text.toLowerCase()) return true;
    if (aliases.some((alias) => input === alias.toLowerCase())) return true;
    return false;
  }

  /**
   * @param {Object} param
   * @param {string} param.text
   * @param {Array<string>} param.aliases
   * @returns {boolean}
   */
  hasCommand({
    text,
    aliases,
  }) {
    if (!this.event.isText) return false;
    const input = this.trimmedText.toLowerCase();
    if (aliases.some((alias) => input.startsWith(alias.toLowerCase()))) return true;
    if (aliases.some((alias) => input.endsWith(alias.toLowerCase()))) return true;
    if (input.startsWith(text.toLowerCase())) return true;
    if (input.endsWith(text.toLowerCase())) return true;
    return false;
  }

  /**
   * @param {string} text
   * @param {Array<MessageAction>} replies
   * @returns {Context}
   */
  pushText(text, replies = []) {
    const message = new TextMessage({
      type: MESSAGE_TYPE_TEXT,
      text,
    });
    message.setQuickReply(replies);
    this.messages.push(message);
    return this;
  }

  /**
   * @param {string} url
   * @param {Array<MessageAction>} replies
   * @returns {Context}
   */
  pushImage(url, replies = []) {
    const message = new ImageMessage({
      type: MESSAGE_TYPE_IMAGE,
      originalContentUrl: url,
      previewImageUrl: url,
    });
    message.setQuickReply(replies);
    this.messages.push(message);
    return this;
  }

  /**
   * @param {string} url
   * @param {Array<MessageAction>} buttons
   * @param {Array<MessageAction>} replies
   * @returns {Context}
   */
  pushTemplate(text, buttons = [], replies = []) {
    const message = new TemplateMessage({
      text,
      actions: buttons,
    });
    message.setQuickReply(replies);
    this.messages.push(message);
    return this;
  }

  /**
   * @param {AxiosError} err
   * @returns {Context}
   */
  pushError(err) {
    this.pushText(`${err.message}`);
    if (err.config?.baseURL) this.pushText(`${err.config.method.toUpperCase()} ${err.config.baseURL}/${err.config.url}`);
    if (err.response?.data?.error?.message) this.pushText(err.response.data.error.message);
    return this;
  }
}

export default Context;
