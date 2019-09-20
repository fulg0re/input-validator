const typeCheck = require('type-check').typeCheck;

const inputValidate = (input = {}, schema = {}, options = {}) => new Promise((res, rej) => {
  for (let key in schema) {
    if (schema.hasOwnProperty(key)) {
      if (!typeCheck(schema[key].type, input[key], options)) {
        res({ validation: false, message: schema[key].errorMessage });
      }
    }
  }
  res({ validation: true });
});

module.exports = { inputValidate };
