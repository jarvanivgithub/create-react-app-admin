const path = require('path');
const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            '@primary-color': '#1DA57A',
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
    webpack: {
        alias: {
            '@': path.join(__dirname, '/src'),
            pages: path.join(__dirname, '/src/pages'),
            router: path.join(__dirname, '/src/router'),
            configs: path.join(__dirname, '/src/configs'),
        },
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'https://gdxdtest.moguyun.com',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '',
                },
            },
        },
    },
};
