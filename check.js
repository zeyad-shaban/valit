const values = require('./values');


const validateEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

const check = (data, schema, firstErr = false) => {
    const errors = {};

    for (field in schema) {
        const fieldErrs = [];

        const value = data[field];
        const { dataType, isRequired, options } = schema[field];
        if (!options.label) options.label = field;

        // Check Is Required
        if (isRequired && !value && value !== 0) {
            fieldErrs.push(`${options.label} is required`);
            errors[field] = fieldErrs;
            continue;
        } else if (value === false) continue;

        // Check values
        if (typeof value !== dataType)
            fieldErrs.push(
                `${options.label} must be a ${dataType}`
            );


        // Check min & max
        if (dataType === values.number) {
            if (value < options.min)
                fieldErrs.push(
                    `${options.label} must be at least ${options.min}`
                );
            if (value > options.max)
                fieldErrs.push(
                    `${options.label} must be less than ${options.max}`
                );
        } else if (dataType === values.string) {
            if (value.length < options.min)
                fieldErrs.push(
                    `${options.label} must be at least ${options.min} characters`
                );
            if (value.length > options.max)
                fieldErrs.push(
                    `${options.label} must be less than ${options.max} characters`
                );
        }

        // Check email
        if (options.email && typeof value === values.string && !validateEmail(value))
            fieldErrs.push(`${options.label} must be a valid email address`);

        // Check match
        if (options.match && value !== data[options.match])
            fieldErrs.push(`${options.label} must match ${options.match}`);


        // todo check regexp

        // *PUSH ERRORS
        if (fieldErrs.length > 0) errors[field] = firstErr ? fieldErrs[0] : fieldErrs;
    }
    return errors;
};

module.exports = check;