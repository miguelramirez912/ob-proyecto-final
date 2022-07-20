const path = require('path');

// Plugins y minificadores de CSS y SCSS
const HtmlWebpackPlugin = require('html-webpack-plugin');// para el template del HTML que va a usar webpack
const MiniCssExtractPlugin = require('mini-css-extract-plugin');// reducir los css
const {SourceMapDevToolPlugin} = require('webpack');// Conocer el sourceMap de nuestro proyecto
const ESLintPlugin = require('eslint-webpack-plugin');

// Configuracion del puerto
const port = process.env.PORT || 3000;

// Exportar la configuracion de Webpack
module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.[hash].js',
        publicPath: '/'
    },
    context: path.resolve(__dirname),
    devServer: {
        port: port,
        historyApiFallback: true
    },
    devtool: 'eval-source-map', 
    module: {
        rules: [
            // reglas para archivos js y jsx
            {
                enforce: 'pre',
                test: /(\.js|\.jsx)$/,
                exclude: /node_modules/,
                use: [
                    'source-map-loader'
                ]
            },
            // 
            {
                test: /(\.js|\.jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/env',
                            '@babel/react'
                        ]
                    }
                },
            },
            { // Regla para minificar y cargar los archivos de estilos en el bundle
                test: /(\.css|\.scss)$/,
                use: [
                    {loader: MiniCssExtractPlugin.loader},
                    {loader: 'css-loader'},
                    {loader: 'sass-loader'}
                ]
            },
            { // Regla para cargar los archivos de imagenes en el bundle
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        // Template HTML
        new HtmlWebpackPlugin(
            {
                template: './public/index.html'
            }
        ),
        new MiniCssExtractPlugin(
            {
                filename: './css/styles.css'
            }
        ),
        new SourceMapDevToolPlugin(
            {
                filename: '[file].map'
            }
        ),
        new ESLintPlugin(
            {
                extensions: [`js`, `jsx`],
                exclude: [`node_modules`]
            }
        )
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.scss', '.sass'],
        modules: [
            'node_modules'
        ]
    }
}