'use strict';

module.exports = () => {
  $.gulp.task('sprite:svg', () => {
    const svgminConfig = { js2svg: { pretty: true } };

    const cheerioConfig = {
      run($) {
        $('[fill]').removeAttr('fill');
        $('[stroke]').removeAttr('stroke');
        $('[style]').removeAttr('style');
      },
      parserOptions: { xmlMode: true }
    };

    const svgSpriteConfig = {
      mode: {
        symbol: {
          dest: '.',
          sprite: 'img/sprites/svg-sprite.svg',
          render: {
            scss: {
              dest: '../src/style/_svg-sprite.scss',
            }
          },
          example: false
        },
        svg: {
          xmlDeclaration: false,
          doctypeDeclaration: false
        }
      }
    };

    return $.gulp.src('./src/sprites/svg/*.svg')
            .pipe($.gp.svgmin(svgminConfig))
            .pipe($.gp.cheerio(cheerioConfig))
            .pipe($.gp.replace('&gt;', '>'))
            .pipe($.gp.svgSprite(svgSpriteConfig))
            .pipe($.gulp.dest($.config.output));
  });
};
