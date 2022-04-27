const env = process.env;

export const MONGO_DB_URL = env.MONGO_DB_URL
  ? env.MONGO_DB_URL
  : "mongodb://admin:123456@localhost:27017";

export const API_SECRET = env.API_SECRET
  ? env.API_SECRET
  : "YXV0aC1hcGktc2VjcmV0LWRldi0xMjM0NTY=";

export const RABBIT_MQ_URL = env.RABBIT_MQ_URL
  ? env.RABBIT_MQ_URL
  : "amqp://localhost:5672";

export const PRODUCT_API_URL = env.PRODUCT_API_URL
  ? env.PRODUCT_API_URL
  : "http://localhost:8081/api/product";
