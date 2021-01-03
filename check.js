const values = require('./values');


const validateEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

const check = (data, inputSchema) => {
    const errors = {};

    for (elem in inputSchema) {
        const elemErrors = [];
        const value = data[elem];
        const schema = inputSchema[elem];
        if (!schema.options.label) schema.options.label = elem;

        // -----------Is Required Checking-----------
        if (schema.isRequired && !value && value !== 0) {
            elemErrors.push(`${schema.options.label} is required`);
            errors[elem] = elemErrors;
            continue;
        } else if (value === false) continue;
        // -----------END is required checking-----------

        // -----------check values-----------
        if (typeof value !== schema.value)
            elemErrors.push(
                `${schema.options.label} must be a ${schema.value}`
            );
        // -----------END check values-----------

        // -----------Check min & max-----------
        if (schema.value === values.number) {
            if (value < schema.options.min)
                elemErrors.push(
                    `${schema.options.label} must be at least ${schema.options.min}`
                );
            if (value > schema.options.max)
                elemErrors.push(
                    `${schema.options.label} must be less than ${schema.options.max}`
                );
        } else if (schema.value === values.string) {
            if (value.length < schema.options.min)
                elemErrors.push(
                    `${schema.options.label} must be at least ${schema.options.min} characters`
                );
            if (value.length > schema.options.max)
                elemErrors.push(
                    `${schema.options.label} must be less than ${schema.options.max} characters`
                );
        }
        // -----------END Check min & max-----------

        // ----------check emails-----------
        if (schema.options.email && typeof value === values.string) {
            if (!validateEmail(value)) elemErrors.push(`${schema.options.label} must be a valid email address`)
        }
        // ----------END check emails-----------

        // todo check regexp

        // *PUSH ERRORS
        if (elemErrors.length > 0) errors[elem] = elemErrors;
    }
    return errors;
};

module.exports = check;
