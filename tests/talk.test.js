import {
  afterEach, beforeEach, expect, test,
} from '@jest/globals';
import { getPrompt, handleEvents, removePrompt } from '../app/index.js';
import { COMMAND_SYS_TALK } from '../constants/command.js';
import {
  createEvents, TIMEOUT, MOCK_USER_01, MOCK_TEXT_OK,
} from './utils.js';

beforeEach(() => {
  //
});

afterEach(() => {
  removePrompt(MOCK_USER_01);
});

test('COMMAND_SYS_TALK', async () => {
  const events = [
    ...createEvents([`${COMMAND_SYS_TALK.text}人工智慧`]),
  ];
  let results;
  try {
    results = await handleEvents(events);
  } catch (err) {
    console.error(err);
  }
  expect(getPrompt(MOCK_USER_01).sentences.length).toEqual(3);
  const replies = results.map(({ messages }) => messages.map(({ text }) => text));
  expect(replies).toEqual(
    [
      [MOCK_TEXT_OK],
    ],
  );
}, TIMEOUT);
