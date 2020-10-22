const path = require('path')

module.exports = {
    pageExtensions: ['mdx', 'jsx', 'js', 'ts', 'tsx'],
    webpack: (config, options) => {
        config.plugins.push(new options.webpack.IgnorePlugin(/\/__tests__\//))
        config.module.rules.push({
            test: /\.mdx/,
            use: [
              options.defaultLoaders.babel,
              {
                loader: '@mdx-js/loader',
                //options: pluginOptions.options,
              },
            ],
        })
        return config
    },
}