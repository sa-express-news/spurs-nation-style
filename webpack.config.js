const path = require('path');

module.exports = {
    entry: './ts/sn-landing-page/index.ts',
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        filename: 'spurs-nation.js',
        path: path.resolve(__dirname, 'dist')
    }
};