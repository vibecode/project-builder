'use strict';

module.exports = () => {
  $.gulp.task('img', function () {
    return $.gulp.src('./src/img/**/*.*')
            .pipe($.gp.imagemin({
              progressive: true
            }))
            .pipe($.gulp.dest(`${$.config.output}/assets/img`));
  });
};
