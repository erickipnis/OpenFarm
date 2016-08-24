import express from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';
import cors from 'cors';
import addStatusCodes from 'express-json-status-codes';
import logger from 'morgan';
import log from 'winston';
import config from '../config';
import socketManager from './socketManager';
import database from './helpers/database';

const expressWithStatusCodes = addStatusCodes(express);

const setupApp = () => {
  expressWithStatusCodes()
  .use(logger('dev'))
  .use(compression())
  .use(cors())
  .use(bodyParser.json())
  .disable('x-powered-by')
  .listen(config.port, (error) => {
    if (error) throw error;
    log.info(`Listening on port: ${config.port}`);
  });
};

const app = setupApp();
database();
socketManager(app);

export default { app };
