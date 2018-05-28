// Vars Spectre
var gulp = require('gulp');
var sass = require('gulp-sass');
var cleancss = require('gulp-clean-css');
var csscomb = require('gulp-csscomb');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var cssPrefix = require('gulp-css-prefix');

// Vars Bootstrap
var browserSync = require('browser-sync').create();

// Vars Hamburgers
var cssnano      = require('gulp-cssnano');
var notify       = require('gulp-notify');
var plumber      = require('gulp-plumber');
var rename       = require('gulp-rename');
var sourcemaps   = require('gulp-sourcemaps');

var onError = function(err) {
  notify.onError({
    title:    "Error",
    message:  "<%= error %>",
  })(err);
  this.emit('end');
};

var plumberOptions = {
  errorHandler: onError,
};

var postCSSOptions = require('./node_modules/hamburgers/config.postcss.json');
// autoprefixerOptions only applicable to Hamburgers!
var autoprefixerOptions = postCSSOptions.autoprefixer;

// Vars PATHs
var paths = {
  spsource: 'node_modules/spectre.css/src/*.scss',
  spdoc: 'node_modules/spectre.css/docs/src/*.scss',
  spcustom: 'scss/spectre-*.scss',
};

// Watch Spectre folders & execute render
/*
gulp.task('watch', function() {
  gulp.watch('scss/*.scss', ['sp-sass']);
  gulp.watch('scss/*.scss', ['sp-docs']);
  gulp.watch('scss/*.scss', ['sp-custom']);
});
*/

// Render Spectre main-sass & minify & stream
gulp.task('sp-sass', function() {
  gulp.src(paths.spsource)
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
    //.pipe(browserSync.stream());
});

// Render Spectre docs-sass & minify & stream (& optionally add main-sass)
gulp.task('sp-docs', function() {
  gulp.src(paths.spdoc)
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
    //.pipe(browserSync.stream());
  //Warning: The following replaces main-sass files
  /*gulp.src(paths.spsource)
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
    .pipe(browserSync.stream());
    */
});

// Render Spectre custom-sass & minify & stream
gulp.task('sp-custom', function() {
  gulp.src(paths.spcustom)
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
    //.pipe(browserSync.stream());
});

// Insert Spectre prefixes into all spectre-sass
gulp.task('sp-prefix', function() {
  gulp.src('./css/spectre*.css')
      .pipe(cssPrefix('spectre-'))
      .pipe(gulp.dest('./css'))
});

// Render Bootstrap sass & minify
gulp.task('b4-sass', function() {
  return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'scss/bootstrap-*.scss'])
      .pipe(sass())
      .pipe(gulp.dest("css"))
      .pipe(cleancss())
      .pipe(rename({
      suffix: '.min'
      }))
      .pipe(gulp.dest('css'));
      //.pipe(browserSync.stream());
});

// Copy Bootstrap javascript
gulp.task('b4-js', function() {
  return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/bootstrap/dist/js/bootstrap.js','node_modules/jquery/dist/jquery.min.js', 'node_modules/jquery/dist/jquery.js','node_modules/popper.js/dist/popper.min.js', 'node_modules/popper.js/dist/popper.js'])
      .pipe(gulp.dest("js"))
      //.pipe(browserSync.stream());
});

// Watch Bootstrap folders & execute render & start server
/*
gulp.task('display', ['b4-sass'], function() {

  browserSync.init({
      server: "./"  
  });

  gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'scss/*.scss'], ['b4-sass']);
  gulp.watch("*.html").on('change', browserSync.reload);
});
*/

// Render Hamburgers main-sass & minify
gulp.task('hb-sass', function() {
  return gulp.src('./node_modules/hamburgers/_sass/hamburgers/hamburgers.scss')
    .pipe(sass())
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(gulp.dest('css'))
    .pipe(csscomb('./node_modules/hamburgers/.csscomb.dist.json'))
    .pipe(cssnano())
    .pipe(rename('hamburgers.min.css'))
    .pipe(gulp.dest('css'));
});

// Render Hamburgers custom-sass & minify
gulp.task('hb-custom', function() {
  return gulp.src('./scss/hamburgers-*.scss')
    .pipe(sass())
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(gulp.dest('css'))
    .pipe(csscomb('./node_modules/hamburgers/.csscomb.dist.json'))
    .pipe(cssnano())
    .pipe(rename('hamburgers-custom.min.css'))
    .pipe(gulp.dest('css'));
});

// Watch Hamburgers folders & execute render
/*gulp.task('watch', function() {
  var browserSyncConfig = require('./node_modules/hamburgers/bs-config.js');

  browserSync.init(browserSyncConfig);
*/
//  gulp.watch('./node_modules/hamburgers/_sass/**/*.scss', ['hb-sass']);
/*
});
*/


// Merge tasks
gulp.task('build-sp', ['sp-sass', 'sp-docs', 'sp-custom']);
gulp.task('build-b4', ['b4-sass', 'b4-js']);
gulp.task('build-hb', ['hb-sass', 'hb-custom']);

gulp.task('default', ['build-sp', 'build-b4', 'build-hb']);