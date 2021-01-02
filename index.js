const check = require('./check');
const values = require('./values');
const createSchema = require('./createSchema');

const valit = { check, ...values, createSchema };

module.exports = valit;