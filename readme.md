Valit
=====

Is an optimized version of Joi, if all what you need is a simple
validation to check data types, min and max length and bunch of others
then you don't need a 70KB library! Valit will be perfect for you

Steps
=====

Install
-------

npm i valit

const valit = require('valit')

// Or

import valit from 'valit'

To create a schema
------------------

const schema = {

       username: valit.createSchema(valit.string, true, {

                   label: 'Username',

                   min: 5,

                   max: 25,

                }

      )}

#### valit createSchema

-   **First:** the type of the input, you can either write 'string'
    directly or use valit.string to be safe,
-   **Second:** is the field required? true or false,
-   **Third:** an object of extra options where you can specify label,
    min and max characters

Finally check and get errors
----------------------------

const data = {username: 'Code With Zeyad'} const errors =
valit.check(data, schema)

#### valit check

will return an array of all errors found (If any)
