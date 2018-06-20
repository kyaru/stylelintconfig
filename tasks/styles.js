const gulp = require('gulp')
const sass = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps')
const cssnano = require('gulp-cssnano')
const plumber = require('gulp-plumber')
const notify = require('gulp-notify')
const autoprefixer = require('gulp-autoprefixer')
const autoprefixerOptions = {
    browsers: ['last 2 version', 'ie >= 10']
};

const { paths } = require('./config')

/**
 * SCSS -> CSS
 */
function styles() {
    return gulp.src(paths.styles.src)
        .pipe(plumber({
            // エラーをハンドル
            errorHandler: notify.onError({
                title: "scssCompileError: <%= error.message %>",
                message: new Date().toLocaleString(),
                sound: 'Glass'
            })
        }))
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(cssnano())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(notify({
            title: 'Scss Compiled!',
            message: new Date().toLocaleString(),
            sound: 'Glass'
        }))
}

module.exports = styles