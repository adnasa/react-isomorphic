var browserify = require('browserify');
var gulp = require('gulp');
var gulpRename = require('gulp-rename');
var source = require("vinyl-source-stream");
var reactify = require('reactify');

var defaultFile = './src/app/component/search/client_render.js';

gulp.task('browserify', function() {
  var b = browserify();
  b.transform(reactify).add(defaultFile);

  return b.bundle()
    .pipe(source(defaultFile))
    .pipe(gulpRename('main.js'))
    .pipe(gulp.dest('./public/javascripts'));
});

gulp.task('watch', function() {
  var watchJsFiles = ['./src/app/component/**/*.js', './src/app/component/**/*.jsx'];
  gulp.watch(watchJsFiles, ['browserify']);
});
gulp.task('default', ['browserify']);
