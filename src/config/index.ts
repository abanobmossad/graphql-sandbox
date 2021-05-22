import 'dotenv/config';

export default {
  host: process.env.HOST,
  port: parseInt(process.env.PORT, 10),
  logs: {
    level: process.env.LOG_LEVEL,
  },
};
