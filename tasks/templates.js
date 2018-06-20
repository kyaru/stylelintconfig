const gulp = require('gulp')
const { paths } = require('./config')

const plumber = require('gulp-plumber')
const notify = require('gulp-notify')

function templates() {
    return gulp.src(paths.templates.src)
        .pipe(plumber({
            // エラーをハンドル
            errorHandler: notify.onError({
                title: "htmlDestError: <%= error.message %>",
                message: new Date().toLocaleString(),
                sound: 'Glass'
            })
        }))
        .pipe(gulp.dest(paths.templates.dest))
        .pipe(notify({
            title: 'html Dested!',
            message: new Date().toLocaleString(),
            sound: 'Glass'
        }));
}

module.exports = templates