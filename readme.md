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
    username: valit.createSchema(valit.string, valit.isRequired, {
        min: 5,
        max: 25,
        label: 'Username'
    }),
    email: valit.createSchema(valit.string, valit.isRequired, {
        email: true
    }),
    age: valit.createSchema(valit.number, valit.notRequired, {
        min: 10,
        max: 100
    }),
    password1: valit.createSchema(valit.string, valit.isRequired, {
        match: 'password2'
    }),
    password2: valit.createSchema(valit.string, valit.isRequired),
};
```
the first param in valit.createSchema is the data type of that field. __required__
* ```valit.string``` ```valit.number``` ```valit.boolean``` ```valit.object``` ```valit.function```

the second detremines whether the field is required or not, ___default of false___.
* ```valit.isRequired``` ```valit.notRequired```

the third is an optional object of extra options
* ```min``` ```max``` ```label``` ```email``` ```match```

#### 2. Then get the data you want to validate
```js
const data = {
    username: 'hmm',
    email: 'officialvalit@gmail.com',
    age: -17,
    password1: 1234,
    password2: 'myPassword'
};
```
#### 3. Finally get errors
```js
const errors = valit.check(data, schema)
```

```valit.check``` will return an object of all errors found, the key will be the name of the field and the value will be an array of all errors found for that specific field.

So in this example errors will look like this

```js
{
    username: [ 'Username must be at least 5 characters' ],
    age: [ 'age must be at least 10' ],
    password1: [ 'password1 must be a string', 'password1 must match password2' ]
}
```

If you want a single error from each field, instead of an array of errors, just set third param (firstErr) to true, default is false

```js
const errors = valit.check(data, schema, true)
```


# Resources

*   [Github](https://github.com/zeyadShapan/valit)
*   [Valit on npmjs](https://www.npmjs.com/package/valit)

If you have any ideas to improve the app feel free to open an issue on the github page.