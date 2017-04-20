'use strict';

module.exports = () => {
  $.gulp.task('copy:fonts', () => {
    return $.gulp.src('./src/fonts/**')
            .pipe($.gulp.dest($.config.output + '/assets/fonts'));
  });
};
