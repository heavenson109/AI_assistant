import config from '../config/index.js';

const zh = {
  __ERROR_MISSING_ENV: (v) => `缺少環境變數：${v}`,
  __ERROR_MAX_GROUPS_REACHED: '群組數量已達上限',
  __ERROR_MAX_USERS_REACHED: '用戶數量已達上限',
  __COMMAND_ACTIVATE_LABEL: '開啟自動回覆',
  __COMMAND_ACTIVATE_TEXT: '開啟自動回覆',
  __COMMAND_ACTIVATE_REPLY: '已開啟自動回覆',
  __COMMAND_ADVISE_LABEL: '建議',
  __COMMAND_ADVISE_TEXT: '建議',
  __COMMAND_ANALYZE_LABEL: '分析',
  __COMMAND_ANALYZE_TEXT: '分析',
  __COMMAND_BLAME_LABEL: '譴責',
  __COMMAND_BLAME_TEXT: '譴責',
  __COMMAND_COMPLAIN_LABEL: '抱怨',
  __COMMAND_COMPLAIN_TEXT: '抱怨',
  __COMMAND_DEACTIVATE_LABEL: '關閉自動回覆',
  __COMMAND_DEACTIVATE_TEXT: '關閉自動回覆',
  __COMMAND_DEACTIVATE_REPLY: '已關閉自動回覆',
  __COMMAND_TALK_LABEL: '請問',
  __COMMAND_TALK_TEXT: '請問',
  __COMMAND_TALK_DEMO_LABEL: '請問',
  __COMMAND_TALK_DEMO_TEXT: '請問你好嗎',
  __COMMAND_COMFORT_LABEL: '安慰',
  __COMMAND_COMFORT_TEXT: '安慰',
  __COMMAND_COMMAND_LABEL: '查看指令',
  __COMMAND_COMMAND_TEXT: '指令',
  __COMMAND_CONTINUE_LABEL: '繼續',
  __COMMAND_CONTINUE_TEXT: '繼續',
  __COMMAND_DOC_LABEL: '查看文件',
  __COMMAND_DOC_TEXT: '文件',
  __COMMAND_DRAW_LABEL: '請畫',
  __COMMAND_DRAW_TEXT: '請畫',
  __COMMAND_DRAW_DEMO_LABEL: '請畫',
  __COMMAND_DRAW_DEMO_TEXT: '請畫貓咪',
  __COMMAND_LAUGH_LABEL: '嘲諷',
  __COMMAND_LAUGH_TEXT: '嘲諷',
  __COMMAND_MISLEAD_LABEL: '誤導',
  __COMMAND_MISLEAD_TEXT: '誤導',
  __COMMAND_RESTART_LABEL: '重新啟動',
  __COMMAND_RESTART_TEXT: '重新啟動',
  __COMMAND_RESTART_REPLY: '正在重新啟動',
  __COMMAND_SUMMARIZE_LABEL: '總結',
  __COMMAND_SUMMARIZE_TEXT: '總結',
  __COMMAND_SUMMON_DEMO_LABEL: '呼叫',
  __COMMAND_SUMMON_DEMO_TEXT: `${config.BOT_NAME} 你好嗎？`,
  __COMMAND_VERSION_LABEL: '查看版本',
  __COMMAND_VERSION_TEXT: '版本',
  __TEMPLATE_TITLE_COMMAND: '指令',
  __COMPLETION_INIT_MESSAGE: '哈囉！',
  __COMPLETION_PROMPT_ADVISE: '請總結以下內容，並給予適當的建議。',
  __COMPLETION_PROMPT_ANALYZE: '請總結以下內容，並給予詳細的分析。',
  __COMPLETION_PROMPT_BLAME: '請總結以下內容，並給予嚴厲的譴責。',
  __COMPLETION_PROMPT_COMFORT: '請總結以下內容，並給予溫暖的安慰。',
  __COMPLETION_PROMPT_COMPLAIN: '請總結以下內容，並給予輕微的抱怨。',
  __COMPLETION_PROMPT_LAUGH: '請總結以下內容，並給予有趣的嘲諷。',
  __COMPLETION_PROMPT_MISLEAD: '請總結以下內容，並給予錯誤的解讀。',
  __COMPLETION_PROMPT_SUMMARIZE: '請總結以下內容，並給予細節。',
  __COMPLETION_QUOTATION_MARK_OPENING: '「',
  __COMPLETION_QUOTATION_MARK_CLOSING: '」',
  __USER_DISPLAY_NAME_SOMEONE: '某人',
};

export default zh;
