import mongoose from 'mongoose';
import log from 'winston';
import Promise from 'bluebird';
import config from '../../config';

const database = (cb) => {
  if (mongoose.connection.db) {
    if (cb) cb(null, mongoose);
    return mongoose;
  }

  mongoose.Promise = Promise;
  mongoose.connect(config.mongoURL, config.mongoOptions);

  mongoose.connection.on('error', (err) => log.info(err, mongoose));
  mongoose.connection.once('open', () => {
    log.info(`Connected to Mongoose on: ${config.mongoURL}`);
    if (cb) cb(null, mongoose);
  });

  return mongoose;
};

export default database;
