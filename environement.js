'use strict';

const dotenv = require('dotenv');
const assert = require('assert');

dotenv.config();

const {APP_PORT, APP_KEY, DATABASE_URL, REDIS_HOST, REDIS_PORT, DATABASE_URL_TEST } = process.env;




module.exports = {
    port: APP_PORT,
    appkey: APP_KEY,
    dburl: DATABASE_URL,
    dburltest: DATABASE_URL_TEST,
    redishost: REDIS_HOST,
    redisport: REDIS_PORT
}