let winston = require('winston');
require('winston-daily-rotate-file');

const {combine, timestamp, label, printf} = winston.format

const logFormat = printf(({level, message, timestamp}) => {
    return `${timestamp}__${level}__${message}&&&&`;
});

let transport_all = new winston.transports.DailyRotateFile({
  filename: '%DATE%.log',
  datePattern: 'YYYY-MM-DD-HH',
  zippedArchive: true,
  dirname:"logs",
  maxSize: '20m',
  maxFiles: '14d'
});

let transport_error = new winston.transports.DailyRotateFile({
    filename: 'ERROR_%DATE%.log',
    datePattern: 'YYYY-MM-DD-HH',
    zippedArchive: true,
    dirname:"logs",
    maxSize: '20m',
    maxFiles: '14d',
    level: 'error'
});

let logger = winston.createLogger({
    format:combine(
        timestamp({format:'YYYY-MM-DD HH:mm:ss'}),
        logFormat
    ),
  transports: [
    transport_all,
    transport_error
  ]
});

logger.info('Hello World!');

module.exports = {logger}