var gulp  = require('gulp'),
    sass  = require('gulp-sass'),
    swig  = require('gulp-swig'),
    serve = require('gulp-webserver'),
    autoprefixer = require('gulp-autoprefixer');

var src = {
  lib: 'lib/**/*.scss',
  docs: 'docs-src/*.html',
  docsCSS: 'docs-src/css/*.scss',
  docsVendor: 'docs-src/vendor/**/*'
};

var dest = {
  lib: 'docs/css',
  docs: 'docs',
  docsCSS: 'docs/css',
  docsVendor: 'docs/vendor'
};

gulp.task('lib', function() {
  gulp.src(src.lib)
      .pipe(sass())
      .pipe(autoprefixer({
        browsers: ['last 2 versions']
      }))
      .pipe(gulp.dest(dest.lib));
});

gulp.task('docs-html', function() {
  gulp.src(src.docs)
      .pipe(swig({
        defaults: {
          cache: false
        }
      }))
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

gulp.task('docs-vendor', function() {
  gulp.src(src.docsVendor)
      .pipe(gulp.dest(dest.docsVendor));
});

gulp.task('docs-fonts', function() {
  gulp.src('docs-src/fonts/*')
      .pipe(gulp.dest('docs/fonts'));
});

gulp.task('docs-build', ['docs-html', 'docs-css', 'docs-vendor', 'docs-fonts']);

gulp.task('serve', function() {
  gulp.src('docs')
      .pipe(serve({
        livereload: true,
        directoryListing: false
      }));
});

gulp.task('watch', function() {
  gulp.watch(src.lib, ['lib', 'docs-css']);
  gulp.watch(src.docs, ['docs-html']);
  gulp.watch(src.docsCSS, ['docs-css']);
});

gulp.task('docs', ['lib', 'docs-build', 'serve', 'watch']);
