var gulp         = require('gulp');
var browserSync  = require('browser-sync');
var autoprefixer = require('gulp-autoprefixer');
var csscomb      = require('gulp-csscomb');
var cssnano      = require('gulp-cssnano');
var notify       = require('gulp-notify');
var plumber      = require('gulp-plumber');
var rename       = require('gulp-rename');
var sass         = require('gulp-sass');
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
var autoprefixerOptions = postCSSOptions.autoprefixer;

/*gulp.task('sass', function() {
  return gulp.src('./node_modules/hamburgers/_sass/screen.scss')
    .pipe(plumber(plumberOptions))
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('css'));
});
*/

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

gulp.task('hb-custom', function() {
  return gulp.src('./scss/*.scss')
    .pipe(sass())
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(gulp.dest('css'))
    .pipe(csscomb('./node_modules/hamburgers/.csscomb.dist.json'))
    .pipe(cssnano())
    .pipe(rename('hamburgers-custom.min.css'))
    .pipe(gulp.dest('css'));
});

gulp.task('watch', function() {
  var browserSyncConfig = require('./node_modules/hamburgers/bs-config.js');

  browserSync.init(browserSyncConfig);

  gulp.watch('./node_modules/hamburgers/_sass/**/*.scss', ['hb-sass']);
});

//gulp.task('build', ['sass']);
//gulp.task('default', ['build', 'watch']);
gulp.task('default', ['hb-sass', 'hb-custom']);
