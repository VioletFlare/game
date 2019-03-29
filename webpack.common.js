const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        main: './src/main.js',
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: './src/template.html'
        }),
        new webpack.DefinePlugin({
            'CANVAS_RENDERER': JSON.stringify(true),
            'WEBGL_RENDERER': JSON.stringify(true)
        })
    ],
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|gif|dbbin)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: "[path][name].[ext]"
                        }
                    }
                ]
            },
            {
                type: 'javascript/auto',
                test: /(_ske\.json|_tex\.json|dragonBones.js|phaser.js)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: "[path][name].[ext]"
                        }
                    }
                ]
            },
        ]
    }
};