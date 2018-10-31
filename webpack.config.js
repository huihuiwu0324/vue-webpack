const path = require("path");
const htmlpage = require("html-webpack-plugin");
module.exports = {
    entry: path.join(__dirname, "./src/js/main.js"),
    output: {
        path: path.join(__dirname, "./dist"),
        filename: 'main.js'
    },
    plugins: [
        new htmlpage({
            template: path.join(__dirname, './index.html'),
            filename: "index.html"
        })
    ],
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.(jpg|png|gif|jepg)$/, use: "url-loader?limit=31917" }
        ]
    }
}