
require('dotenv').config();

const debug = require('debug')(process.env.DEBUG || 'cli_example');

module.exports = debug
