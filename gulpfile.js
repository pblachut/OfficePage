var less = require('gulp-less');
var gulp = require('gulp');
 
gulp.task('less', function () {
  return gulp.src('./css/style.less')
    .pipe(less())
    .pipe(gulp.dest('./css'));
});

gulp.task('copyStyles', function(){
  return gulp.src('css/style.css')
    .pipe(gulp.dest('www/css'));
});

gulp.task('copyLibs', function(){
  return gulp.src('lib/*')
    .pipe(gulp.dest('www/lib'));
});

var appFiles = [
  'app/*',
  'app/*/*',
  'app/*/*/*'
];

gulp.task('copyJsFiles', function(){
  return gulp.src(appFiles)
    .pipe(gulp.dest('www/app'));
});

gulp.task('copyIndex', function(){
  return gulp.src('index.html')
    .pipe(gulp.dest('www'));
});

gulp.task('dist', ['copyStyles', 'copyLibs', 'copyJsFiles', 'copyIndex'], function(){
  
});