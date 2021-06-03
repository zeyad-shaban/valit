const validate = require('./validate');
const values = require('./values');
const createField = require('./createField');

const valit = { validate, ...values, createField };

module.exports = valit;