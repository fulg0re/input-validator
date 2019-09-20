const typeCheck = require('type-check').typeCheck;

// const validateSchema = {
//   username: {
//     type: 'String',
//     errorMessage: 'Username is not valid'
//   },
//   email: {
//     type: 'Email',
//     errorMessage: 'Email is not valid'
//   },
//   phone: {
//     type: 'String',
//     errorMessage: 'Phone is not valid'
//   }
// };

// const tchOptions = {
//   customTypes: {
//     Email: {
//       typeOf: 'String',
//       validate: (x) => x.length > 5
//     },
//     String: {
//       typeOf: 'String',
//       validate: (x) => x.length > 5
//     }
//   }
// };

const validateInput = (input, schema) => {
  for (let key in schema) {
    if (schema.hasOwnProperty(key)) {
      if (!typeCheck(schema[key].type, input[key], tchOptions)) {
        return {
          validation: false,
          message: schema[key].errorMessage
        }
      }
    }
  }
  return {
    validation: true
  }
};

// const mustCheckObj = {
//   username: 'flg',
//   email: 'flg@gmail.com',
//   phone: '+380673515035'
// };

// const result = validateInput(
//   mustCheckObj,
//   validateSchema
// );

// console.log(result);

const inputValidate = (input, schema, options) => {
  let result = {
    validation: true
  };
  
  for (let key in schema) {
    if (schema.hasOwnProperty(key)) {
      if (!typeCheck(schema[key].type, input[key], options)) {
        return {
          validation: false,
          message: schema[key].errorMessage
        }
      }
    }
  }
  return result;
};

module.exports = { inputValidate };


















