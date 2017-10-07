var gulp = require('gulp');
var sass = require('gulp-sass');
var wait = require('gulp-wait');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

gulp.task('styles', function () {
  return gulp.src('src/scss/styles.scss')
    .pipe(wait(75))
    .pipe(sass())
    .pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('browserSync', function () {
  browserSync.init({
    server: {
      baseDir: 'src'
    },
    browser: 'Chrome'
  })
})

// Gulp Watch
gulp.task('watch', ['browserSync', 'styles'], function () {
  gulp.watch('src/scss/**/*.scss', ['styles']);
})