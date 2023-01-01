import express from 'express';
import { handleEvents, printHistories } from '../app/index.js';
import config from '../config/index.js';
import { validateLineSignature } from '../middleware/index.js';
import storage from '../storage/index.js';

const app = express();

app.use(express.json({
  verify: (req, res, buf) => {
    req.rawBody = buf.toString();
  },
}));

app.get('/', (req, res) => {
  if (config.APP_URL) {
    res.redirect(config.APP_URL);
    return;
  }
  res.sendStatus(200);
});

app.post(config.APP_WEBHOOK_PATH, validateLineSignature, async (req, res) => {
  try {
    await storage.initialize();
    await handleEvents(req.body.events);
    res.sendStatus(200);
  } catch (err) {
    console.error(err.message);
    if (err.response?.data?.error?.message) console.error(err.response.data.error.message);
    res.sendStatus(500);
  }
  if (config.APP_DEBUG) printHistories();
});

if (config.APP_PORT) {
  app.listen(config.APP_PORT);
}

export default app;
