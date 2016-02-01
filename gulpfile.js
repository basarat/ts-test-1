var del = require('del');
var gulp = require('gulp');
var ts = require('gulp-typescript');
var changed = require('gulp-changed');
var tslint = require('gulp-tslint');

var BUILD_FOLDER = './build';

gulp.task('default', ['clean', 'typescript'], function() {
});

gulp.task('clean', function() {
  return del(['build/**/*']);
});

gulp.task('typescript', function() {
  var tsResult = gulp.src('src/**/*.ts')
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

gulp.task('tslint', [], function() {
  return gulp.src(['src/**/*.ts'])
         .pipe(tslint())
         .pipe(tslint.report('prose', { emitError: false }));
});
