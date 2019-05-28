const webpack = require("webpack");

module.exports = [
    {
        target: "web",
        entry: {
            Main: `./src/Main.tsx`
        },
        output: {
            path: `${__dirname}/public`,
            filename: "bundle.js"
        },
        mode: "development",
        devtool: "source-map",
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: "ts-loader"
                },
                {
                    test: /\.(otf|eot|svg|ttf|woff|woff2)(\?.+)?$/,
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                name: "fonts/[name].[ext]"
                            }
                        }
                    ]
                },
                {
                    test: /\.(html)(\?.+)?$/,
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                name: "[name].[ext]"
                            }
                        }
                    ]
                },
                {
                    test: /\.(png)(\?.+)?$/,
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                name: "images/[name].[ext]"
                            }
                        }
                    ]
                }
            ]
        },
        // import 文で .ts ファイルを解決するため
        resolve: {
            extensions: [".ts", ".tsx", ".js", ".json", ".css", ".scss"]
        },
        plugins: []
    }
];
