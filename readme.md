# Valit

an optimized version of Joi, if all what you need is to check data types, min and max length, and a bunch of others then you don't need a 70KB library! Valit will be perfect for you.

# install
```js
npm i valit

import valit from valit
//or
const valit = require('valit')
```

# Usage

#### 1. First create your schema
```js
const schema = {
    username: valit.createField(valit.string, {
        required: true,
        min: 5,
        max: 25,
        label: 'Username'
    }),
    email: valit.createField(valit.string, {
        required: true,
        email: true
    }),
    age: valit.createField(valit.number, {
        min: 10,
        max: 100,
    }),
    password1: valit.createField(valit.string, {
        required: true,
        match: 'password2',
    }),
    password2: valit.createField(valit.string, { required: true }),
};
```
the first parameter in valit.createField is the data type of that field. __required__
* ```valit.string``` ```valit.number``` ```valit.boolean``` ```valit.object``` ```valit.function```

the second detremines whether the field is required or not, ___default of false___.
* ```valit.isRequired``` ```valit.notRequired```

the second parameter is an object of extra options
* ```required``` ```min``` ```max``` ```label``` ```email``` ```match```
<small>*Note: ```required``` and ```email``` default value is false*</small>

#### 2. Get the data you want to validate
```js
const data = {
    email: 'officialvalit@gmail.com',
    age: -17,
    password1: 1234,
    password2: 'myPassword'
};
```
#### 3. Validate and get errors
```js
const errors = valit.validate(data, schema)
```

```valit.validate``` will return an object of all errors found, the key will be the name of the field and the value will be the first error found for that field.

So in this example errors will look like this

```js
{
  username: 'Username is required',
  age: 'Age must be at least 10',
  password1: 'Password1 must be a string'
}
```

There is a third parameter for ```valit.validate```:  ```returnAllErrors``` type: boolean, default: false, if set to true it will return all errors found for that field in an array.

so if we did

```js
const errors = valit.validate(data, schema, true)
```

The errors will look like this:

```js
{
  username: [ 'Username is required' ],
  age: [ 'Age must be at least 10' ],
  password1: [ 'Password1 must be a string', 'Password1 must match password2' ]
}
```


# Resources

*   [Github](https://github.com/zeyad-shaban/valit)
*   [Valit on npmjs](https://www.npmjs.com/package/valit)

If you have any ideas to improve the app or this documentation please open an issue on the github page.