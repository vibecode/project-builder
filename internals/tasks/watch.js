'use strict';

module.exports = () => {
  $.gulp.task('watch', () => {
    $.gulp.watch('./src/style/**/*.scss', $.gulp.series('sass'));
    $.gulp.watch('./src/template/**/*.pug', $.gulp.series('pug'));
  });
};
