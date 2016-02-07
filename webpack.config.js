module.exports = {
    entry: [
        './test.ts'
    ],
    output: {
        path: './dist',
        filename: 'test.js'
    },
    resolve: {
        modulesDirectories: ['./modules', 'node_modules'],
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    module: {
        loaders: [
            {test: /\.ts$/, loader: 'babel?presets[]=es2015!ts'}
        ]
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './'
    }
};
