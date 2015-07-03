var gulp  = require('gulp'),
    sass  = require('gulp-sass'),
    swig  = require('gulp-swig'),
    serve = require('gulp-webserver'),
    autoprefixer = require('gulp-autoprefixer');

var src = {
  lib: 'lib/**/*.scss',
  docs: 'docs-src/*.html',
  docsCSS: 'docs-src/css/*.scss'
};

var dest = {
  lib: 'docs/css',
  docs: 'docs',
  docsCSS: 'docs/css'
};

gulp.task('lib', function () {
  gulp.src(src.lib)
      .pipe(sass())
      .pipe(autoprefixer({
        browsers: ['last 2 versions']
      }))
      .pipe(gulp.dest(dest.lib));
});

gulp.task('docs-html', function() {
  gulp.src(src.docs)
      .pipe(swig())
      .pipe(gulp.dest(dest.docs));
});

gulp.task('docs-css', function() {
  gulp.src(src.docsCSS)
      .pipe(sass())
      .pipe(autoprefixer({
        browsers: ['last 2 versions']
      }))
      .pipe(gulp.dest(dest.docsCSS));
});

gulp.task('serve', function() {
  gulp.src('docs')
      .pipe(serve({
        livereload: true,
        directoryListing: false
      }));
});

gulp.task('watch', function() {
  gulp.watch(src.lib, ['lib']);
  gulp.watch(src.docs, ['docs-html']);
  gulp.watch(src.docsCSS, ['docs-css']);
});

gulp.task('docs', ['serve', 'watch']);
