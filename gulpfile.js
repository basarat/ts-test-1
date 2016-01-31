var del = require('del');
var gulp = require('gulp');
var ts = require('gulp-typescript');
var changed = require('gulp-changed');

var BUILD_FOLDER = './build';

gulp.task('default', function() {

gulp.task('clean', function() {
  return del(['build/**/*']);
});

gulp.task('typescript', function() {
  var tsResult = gulp.src([ 'src/**/*.ts', 'typings/**/*.d.ts' ])
      .pipe(changed(BUILD_FOLDER, { extension: 'js' }))
      .pipe(ts({
        noExternalResolve: true,
        module: 'commonjs',
        target: 'ES6',
        sortOutput: true
      })
  );

  return tsResult.js
         .pipe(gulp.dest(BUILD_FOLDER));
});
