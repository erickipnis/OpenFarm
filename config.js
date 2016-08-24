import rc from 'rc';

let mongoURL;

switch (process.env.NODE_ENV) {
  default:
    mongoURL = 'mongodb://localhost:27017/openfarm';
    break;
}

const DEFAULT_CONFIG = {
  logLevel: 'debug',
  mongoURL,
  mongoOptions: { server: { socketOptions: { keepAlive: 1 } } },
  redisURL: 'redis://localhost:6379',
  port: '1337',
};

export default rc('openfarm', DEFAULT_CONFIG);
