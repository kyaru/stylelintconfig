const gulp = require('gulp')
const webpack = require('webpack-stream')

const plumber = require('gulp-plumber')
const notify = require('gulp-notify')
const { paths } = require('./config')

/**
 * JS周りはWebpackに委譲
 */
function scripts() {
    return gulp.src(paths.scripts.src)
        .pipe(plumber({
            // エラーをハンドル
            errorHandler: notify.onError({
                title: "webpackBulidError: <%= error.message %>",
                message: new Date().toLocaleString(),
                sound: 'Glass'
            })
        }))
        .pipe(webpack(
            require('../webpack.config'),
            require('webpack')
        ))
        .pipe(gulp.dest(paths.scripts.dest))
        .pipe(notify({
            title: 'webpack Transpiled!',
            message: new Date().toLocaleString(),
            sound: 'Glass'
        }));
}

module.exports = scripts