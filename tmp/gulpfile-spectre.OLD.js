var gulp = require('gulp');
var sass = require('gulp-sass');
var cleancss = require('gulp-clean-css');
var csscomb = require('gulp-csscomb');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var cssPrefix = require('gulp-css-prefix');

var paths = {
  source: 'node_modules/spectre.css/src/*.scss',
  doc: 'node_modules/spectre.css/docs/src/*.scss',
  custom: 'scss/*.scss',
};

// Watch relevant folders
gulp.task('watch', function() {
  gulp.watch('scss/*.scss', ['sp-sass']);
  gulp.watch('scss/*.scss', ['sp-docs']);
  gulp.watch('scss/*.scss', ['sp-custom']);
});

// Render main sass only
gulp.task('sp-sass', function() {
  gulp.src(paths.source)
    .pipe(sass({outputStyle: 'compact', precision: 10})
      .on('error', sass.logError)
    )
    .pipe(autoprefixer())
    .pipe(csscomb())
    .pipe(gulp.dest('./css'))
    .pipe(cleancss())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./css'));
});

// Render docs sass only (optionally add main sass)
gulp.task('sp-docs', function() {
  gulp.src(paths.doc)
    .pipe(sass({outputStyle: 'compact', precision: 10})
      .on('error', sass.logError)
    )
    .pipe(autoprefixer())
    .pipe(csscomb())
    .pipe(gulp.dest('./css'))
    .pipe(cleancss())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./css'));
  //
  /*gulp.src(paths.source)
    .pipe(sass({outputStyle: 'compact', precision: 10})
      .on('error', sass.logError)
    )
    .pipe(autoprefixer())
    .pipe(csscomb())
    .pipe(gulp.dest('./css'))
    .pipe(cleancss())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./css'));*/
});

// Render custom sass
gulp.task('sp-custom', function() {
  gulp.src(paths.custom)
    .pipe(sass({outputStyle: 'compact', precision: 10})
      .on('error', sass.logError)
    )
    .pipe(autoprefixer())
    .pipe(csscomb())
    .pipe(gulp.dest('./css'))
    .pipe(cleancss())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./css'));
});

gulp.task('default', ['sp-sass', 'sp-docs', 'sp-custom']);
