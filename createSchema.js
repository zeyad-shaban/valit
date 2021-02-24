const createSchema = (
    dataType,
    isRequired = false,
    options = {
        label: null,
        min: Number.NEGATIVE_INFINITY,
        max: Number.POSITIVE_INFINITY,
        email: false,
        match: false
    }
) => {
    return {
        dataType,
        isRequired,
        options: {
            ...options,
            label: options.label && options.label.toString() || null,
        },
    };
};

module.exports = createSchema;
