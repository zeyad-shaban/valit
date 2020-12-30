const createSchema = (
    value,
    isRequired = false,
    options = {
        label: null,
        min: Number.NEGATIVE_INFINITY,
        max: Number.POSITIVE_INFINITY,
    }
) => {
    return {
        value,
        isRequired,
        options: {
            label: options.label.toString(),
            min: options.min,
            max: options.max,
        },
    };
};

module.exports = createSchema;
