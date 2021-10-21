module.exports = {
    devServer: {
        hot: true,
        port: '80',
        open: true,
        noInfo: false,
        overlay: {
            warnings: true,
            errors: true,
        },
        proxy: {
            '/api': {
                target: 'http://101.35.174.99:3030',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}