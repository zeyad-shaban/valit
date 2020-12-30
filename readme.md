<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>VAlit Docs</title>
    </head>
    <body>
        <style>
            body {
                margin: 0px 20px;
                font-size: 18px;
                font-family: Arial, Helvetica, sans-serif;
            }

            h2 {
                text-align: center;
                margin: 50px 0px;
            }

            .code {
                background: #f4f4f4;
                border: 1px solid #ddd;
                border-left: 3px solid #f36d33;
                color: #666;
                page-break-inside: avoid;
                font-family: monospace;
                font-size: 15px;
                line-height: 1.6;
                margin-bottom: 1.6em;
                max-width: 100%;
                overflow: auto;
                padding: 1em 1.5em;
                display: block;
                word-wrap: break-word;
            }
        </style>

        <h1>Valit</h1>
        <p>
            Is an optimized version of Joi, if all what you need is a simple
            validation to check data types, min and max length and bunch of
            others then you don't need a 70KB library! Valit will be perfect for
            you
        </p>
        <h1>Steps</h1>
        <ul style="list-style: none">
            <li><h2>Install</h2></li>
            <div class="code">
                <p>npm i valit</p>
                <p>const valit = require('valit')</p>
                <p>// Or</p>
                <p>import valit from 'valit'</p>
            </div>
            <li><h2>To create a schema</h2></li>
            <div class="code">
                <p>const schema = {</p>
                <p>
                    &ThickSpace;&ThickSpace;&ThickSpace; username:
                    valit.createSchema(valit.string, true, {
                </p>
                <p>
                    &ThickSpace;&ThickSpace;&ThickSpace;&ThickSpace;&ThickSpace;&ThickSpace;&ThickSpace;&ThickSpace;&ThickSpace;
                    label: 'Username',
                </p>
                <p>
                    &ThickSpace;&ThickSpace;&ThickSpace;&ThickSpace;&ThickSpace;&ThickSpace;&ThickSpace;&ThickSpace;&ThickSpace;
                    min: 5,
                </p>
                <p>
                    &ThickSpace;&ThickSpace;&ThickSpace;&ThickSpace;&ThickSpace;&ThickSpace;&ThickSpace;&ThickSpace;&ThickSpace;
                    max: 25,
                </p>
                <p>
                    &ThickSpace;&ThickSpace;&ThickSpace;&ThickSpace;&ThickSpace;&ThickSpace;&ThickSpace;&ThickSpace;}
                </p>
                <p>&ThickSpace;&ThickSpace;&ThickSpace;)}</p>
            </div>
            <h4>valit createSchema</h4>
            <ul>
                <li>
                    <b>First:</b> the type of the input, you can either write
                    'string' directly or use valit.string to be safe,
                </li>
                <li><b>Second:</b> is the field required? true or false,</li>
                <li>
                    <b>Third:</b> an object of extra options where you can
                    specify label, min and max characters
                </li>
            </ul>
            <li><h2>Finally check and get errors</h2></li>
            <div class="code">
                <p>
                    const data = {username: 'Code With Zeyad'} const errors =
                    valit.check(data, schema)
                </p>
            </div>
            <h4>valit check</h4>
            <p>will return an array of all errors found (If any)</p>
        </ul>
    </body>
</html>
