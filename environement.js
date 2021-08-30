'use strict';

const dotenv = require('dotenv');
const assert = require('assert');

dotenv.config();


const {APP_PORT, HOST, HOST_URL} = process.env;

assert(APP_PORT, 'POST is required');
assert(HOST, 'HOST is required');

module.exports = {
    port: APP_PORT,
    host: HOST,
    url: HOST_URL
}