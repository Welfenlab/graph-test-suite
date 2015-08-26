var gulp        = require('gulp');
var source      = require('vinyl-source-stream');
var browserify  = require('browserify');
var gutil       = require('gulp-util');
var coffee      = require('gulp-coffee');
var watch       = require('gulp-watch');
var plumber     = require('gulp-plumber');

// browserify bundle for direct browser use.
gulp.task("bundle", function(){
  bundler = browserify('./src/graph_test_suite.coffee',
    {
      transform: ['coffeeify','brfs'],
      standalone: 'testSuite',
      extensions: ['.coffee'],
      debug: false
    });

  return bundler.bundle()
    .pipe(source('graph_test_suite.js'))
    .pipe(gulp.dest('dist'));
});

// simple transpile if you want to bundle it yourself
// using this can reduce the size of your own bundle
gulp.task("transpile_coffee", function(){
  gulp.src('./src/**/*.coffee')
    .pipe(coffee({bare: true}).on('error', gutil.log))
    .pipe(gulp.dest('./lib/'))
});
gulp.task("copy_js", function(){
  gulp.src('./src/**/*.js')
    .pipe(gulp.dest('./lib/'))
})

gulp.task("watch_coffee", function(){
  gulp.src('./src/**/*.coffee')
    .pipe(watch('./src/**/*.coffee'))
    .pipe(plumber())
    .pipe(coffee({bare: true}).on('error', gutil.log))
    .pipe(gulp.dest('./lib/'))
});

gulp.task("watch_js", function(){
  gulp.src('./src/**/*.js')
    .pipe(watch('./src/**/*.js'))
    .pipe(plumber())
    .pipe(gulp.dest('./lib/'))
});

gulp.task("watch", ["watch_coffee", "watch_js"]);

gulp.task("build", ["bundle", "transpile_coffee", "copy_js"]);

gulp.task("default", ["build"]);
