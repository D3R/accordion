module.exports = [
    {
        mode: 'production',
        resolve: {
            modules: [
                './node_modules/'
            ]
        },
        entry: "./src/index.js",
        output: {
            filename: 'accordion.js',
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['env', {
                                targets: {
                                    browsers: ["last 3 versions", "safari >= 7", "ie >= 7"]
                                }
                            }]
                        ],
                        // plugins: ["transform-class-properties"]
                    }
                }
            ]
        }
    }
]
