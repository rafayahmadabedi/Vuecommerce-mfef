module.exports = {
    preset: '@vue/cli-plugin-unit-jest',
    testEnvironment: 'jsdom',
    verbose: true,
    transform: {
        '^.+\\.vue$': '@vue/vue3-jest',
    },
}