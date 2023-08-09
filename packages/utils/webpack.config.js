const resolve = require('path').resolve;

// References:
// https://webpack.js.org/configuration/configuration-types/
// https://webpack.js.org/guides/author-libraries/
function createDevOrProdBuild(_, args) {
    const BUILD_MODE = args.mode;
    const isCorrectBuildMode =
        BUILD_MODE === 'development' || BUILD_MODE === 'production';

    if (isCorrectBuildMode)
        return {
            entry: resolve(__dirname, 'src', 'index.js'),
            output: {
                path: resolve(__dirname, 'dist'),
                filename: 'utils.' + BUILD_MODE + '.js',
                library: {
                    name: 'utils',
                    type: "umd",
                },
                globalObject: 'this'
            },
        };
    else
        throw new Error(
            'Please provide correct build mode, received: ' + BUILD_MODE
        );
}

module.exports = createDevOrProdBuild;