const gulp = require('gulp');

const { paths } = require('./tasks/config');
const { reload, serve } = require('./tasks/server');
const clean = require('./tasks/clean');
const scripts = require('./tasks/scripts');
const styles = require('./tasks/styles');
const templates = require('./tasks/templates');
const images = require('./tasks/images');

/**
 * ファイルの変更を監視
 */
function watch() {
    gulp.watch(paths.styles.src, gulp.series(styles, reload));
    gulp.watch(paths.templates.src, gulp.series(templates, reload));
    gulp.watch(paths.scripts.watch, gulp.series(scripts, reload));
    gulp.watch(paths.images.watch, gulp.series(images, reload));
}

/**
 * 開発用ビルド
 */
gulp.task('default', gulp.series(
    clean, gulp.parallel(styles, templates, scripts, images), serve, watch
));

/**
 * 本番用ビルド
 */
gulp.task('build', gulp.series(
    clean, gulp.parallel(styles, templates, scripts, images)
));