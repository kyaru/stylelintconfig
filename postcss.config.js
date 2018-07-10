module.exports = (ctx) => ({
    map: ctx.options.map,
    plugins: [
        require('postcss-import')({
            plugins: [
                require('stylelint')
            ]
        }),
        require("postcss-nesting"),
        require('postcss-cssnext')({browsers: ['last 2 version', 'ie >= 10', 'android >= 4.4']}),
        require('cssnano')({ autoprefixer: false })
    ]
});