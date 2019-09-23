# Dependencies...

* Install this next dependencies into your root project (not into `graphql-flg-suit`):

```
npm i --save type-check
```

# Example

```
const { inputValidate } = require('path-to-index.js');

...

const validateSchema = {
  ...
  email: {
    type: 'Email',
    errorMessage: 'Email is not valid',
    identical: '...other field name...' // used for match passwords
  },
  ...
  password: {
    type: 'String',
    errorMessage: 'Password is not valid',
    identical: 'confirmPassword' // used for matching two fields
  },
  confirmPassword: {
    type: 'String',
    errorMessage: 'Password is not valid',
  },
  ...
};

const validateOptions = {
  customTypes: {
    ...
    Email: {
      typeOf: 'String',
      validate: (x) => x.length > 5
    },
    ...
  }
};

const inputForValidation = {
  ...
  email: 'example@gmail.com',
  ...
};

(async() => {
  try {
    console.log(
      await inputValidate(inputForValidation, validateSchema, validateOptions)
    );
  } catch (err) {
    console.log(err);
  }
})();

```

# Return result

* if validation true:

```
result = {
  validation: true
}
```

* if validation false:

```
result = {
  validation: false,
  message: <errorMessage from "validateSchema">
}
```
