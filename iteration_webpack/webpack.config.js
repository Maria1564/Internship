const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

const mode = process.env.NODE_ENV === "production" ? "production" : "development"

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: mode === "production" ? '[name].[contenthash].js' :"[name].js" ,
        clean: true,
        assetModuleFilename: mode === "production" ? "assets/[hash][ext]" : "assets/[name][ext]"
    },

    module:{
        rules:[
            {
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                exclude: /\.module\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader" ]
            },
            {
                test: /\.module\.css/,
                use: [MiniCssExtractPlugin.loader, 
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                localIdentName: "[name]__[local]--[hash:base64:5]"
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|jpeg|svg|gif|webp)$/,
                type: 'asset/resource'
            }
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename:  mode === "production" ? '[name].[contenthash].css' :"[name].css"
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ]
    
}