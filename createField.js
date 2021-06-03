const defaultOptions = {
    required: false,
    label: null,
    min: Number.NEGATIVE_INFINITY,
    max: Number.POSITIVE_INFINITY,
    email: false,
    match: false
};

const createField = (dataType, options = defaultOptions) => {
    return {
        dataType,
        options: {
            ...options,
            label: options.label && options.label.toString() || null,
        },
    };
};

module.exports = createField;
