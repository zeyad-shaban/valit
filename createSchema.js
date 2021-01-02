const createSchema = (
    value,
    isRequired = false,
    options = {
        label: null,
        min: Number.NEGATIVE_INFINITY,
        max: Number.POSITIVE_INFINITY,
        email: false
    }
) => {
    return {
        value,
        isRequired,
        options: {
            label: options.label && options.label.toString() || null,
            min: options.min,
            max: options.max,
            email: options.email
        },
    };
};

module.exports = createSchema;
