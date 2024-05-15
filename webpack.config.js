const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = {
    resolve: {
        fallback: {
            stream: require.resolve("stream-browserify"),
        },
    },
    plugins: [new NodePolyfillPlugin()],
};
