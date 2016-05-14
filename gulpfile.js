var less = require('gulp-less');
var gulp = require('gulp');
 
gulp.task('less', function () {
  return gulp.src('./css/style.less')
    .pipe(less())
    .pipe(gulp.dest('./css'));
});