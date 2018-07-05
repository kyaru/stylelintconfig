const gulp = require('gulp')
const sourcemaps = require('gulp-sourcemaps')
const plumber = require('gulp-plumber')
const notify = require('gulp-notify')
const postcss = require('gulp-postcss')

const { paths } = require('./config')

/**
 * POSTCSS -> CSS
 */
function styles() {
    return gulp.src(paths.styles.src)
        .pipe(plumber({
            // エラーをハンドル
            errorHandler: notify.onError({
                title: "PostCSSCompileError: <%= error.message %>",
                message: new Date().toLocaleString(),
                sound: 'Glass',
                time: 500
            })
        }))
        .pipe(sourcemaps.init())
        .pipe(postcss())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(notify({
            title: 'PostCSS Compiled!',
            message: new Date().toLocaleString(),
            sound: 'Glass',
            time: 500
        }))
}

module.exports = styles


