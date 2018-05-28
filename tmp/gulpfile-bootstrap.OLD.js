var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

// Compile sass into CSS & auto-inject into browsers
gulp.task('b4-sass', function() {
    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'scss/*.scss'])
        .pipe(sass())
        .pipe(gulp.dest("css"))
        .pipe(browserSync.stream());
});

// Move the javascript files into our /js folder
gulp.task('b4-js', function() {
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/bootstrap/dist/js/bootstrap.js','node_modules/jquery/dist/jquery.min.js', 'node_modules/jquery/dist/jquery.js','node_modules/popper.js/dist/popper.min.js', 'node_modules/popper.js/dist/popper.js'])
        .pipe(gulp.dest("js"))
        .pipe(browserSync.stream());
});

// Static Server + watching scss/html files
gulp.task('display', ['b4-sass'], function() {

    browserSync.init({
        server: "./"  
    });

    gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'scss/*.scss'], ['b4-sass']);
    gulp.watch("*.html").on('change', browserSync.reload);
});

gulp.task('default', ['b4-sass','b4-js']);
gulp.task('serve', ['default','display']);