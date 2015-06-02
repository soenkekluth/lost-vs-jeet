var gulp = require('gulp'),
  postcss = require('gulp-postcss'),
  sass = require('gulp-sass'),
  sourcemaps = require('gulp-sourcemaps'),
  autoprefixer = require('autoprefixer'),
  lost = require('lost');


gulp.task('styles', function() {
  return gulp.src('./main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      includePaths: 'node_modules/jeet/scss/jeet/',
      outputStyle: 'nested'
    }))
    .pipe(postcss([
      lost(),
      autoprefixer()
    ]))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
  gulp.watch('./main.scss', ['styles']);
});

gulp.task('default', ['styles', 'watch']);
