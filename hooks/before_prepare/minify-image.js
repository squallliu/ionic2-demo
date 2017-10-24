#!/usr/bin/env node

function minifyimg() {
  var gulp = require('gulp');
  var imagemin = require('gulp-imagemin');
  var pngquant = require('imagemin-pngquant');

  gulp.task('minifyimg', function() {
    return gulp.src('www/assets/images/**/*').pipe(imagemin({
      progressive: true,
      svgoPlugins: [{
        removeViewBox: false
      }],
      use: [pngquant()]
    })).pipe(gulp.dest('www/assets/images'));
  });

  if (gulp && imagemin && pngquant) {
    gulp.start('minifyimg');
  }
}

// minifyimg();