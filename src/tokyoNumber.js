export const tokyoNumber = {
    data() {
        return {
            title: "Welcome to Tokyo",
            subtitle: "Tokyo is a great city",
            number: 0,
        };
    },
    filters: {
        lowerCase(value) {
            return value.toLowerCase();
        },

    },
    created() {
        console.log('created in Mixins')
    }
};
