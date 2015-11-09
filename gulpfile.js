// gulp started
//  from https://discussions.udacity.com/t/gulp-and-setting-up-a-gulp-workflow-intermediate/24359/3
// continued from google

var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    minifyCSS = require('gulp-minify-css'),
    minifyhtml = require('gulp-minify-html'),
    // htmlreplace = require('gulp-html-replace'), // seems pretty neat, but haven't figured it out fully
    inline = require('gulp-inline-source'),
    rename = require('gulp-rename');

/*
 * main page, project pages
 */

// minifies & concatenates js and outputs it to build/js/app.min.js
gulp.task('scripts', function(){
    gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(rename('app.min.js'))
        .pipe(gulp.dest('./build/js'));
});

// minifies css files and outputs them to build/css/*.css
gulp.task('styles', function(){
    return gulp.src('src/css/*.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest('./build/css'));
});

// minifies HTML files and outputs them to *.html
gulp.task('html', function() {
    return gulp.src('src/*.html')
        .pipe(minifyhtml({
            empty: true,
            quotes: true
        }))
        .pipe(inline())
        .pipe(gulp.dest('./'));
});

/*
 * pizzzzzza
 */

// minifies & concatenates js and outputs it to build/js/app.min.js
gulp.task('pizzascripts', function(){
    gulp.src('src/views/js/*.js')
        .pipe(uglify())
        .pipe(rename('app.min.js'))
        .pipe(gulp.dest('./views/js/'));
});

// minifies css files and outputs them to build/css/*.css
gulp.task('pizzastyles', function(){
    return gulp.src('src/views/css/*.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest('./views/css'));
});

// minifies HTML files and outputs them to *.html
gulp.task('pizzahtml', function() {
    return gulp.src('src/views/*.html')
        .pipe(minifyhtml({
            empty: true,
            quotes: true
        }))
        .pipe(inline())
        .pipe(gulp.dest('./views/'));
});


// do both of those things whenever they change
// gulp.task('watch', function(){
// gulp.watch('js/*.js', ['scripts']);
// gulp.watch('css/**/*.css', ['styles']);
// });

gulp.task('default', ['scripts', 'styles', 'html', 'pizzascripts', 'pizzastyles', 'pizzahtml']);