"use strict";

const gulp = require(`gulp`);

const sass = require('gulp-sass');
const htmlMin = require(`gulp-htmlmin`);
const uglyCss = require(`gulp-uglifycss`);

const watcher = gulp.watch(['index.html', 'style.scss'], ['default']);

watcher.on('change', function (event) {
    console.log('File ' + event.path + ' was ' + event.type + ' at ' + new Date() + ' , running tasks...');
});

gulp.task('sass', function () {
    gulp.src('style.scss')
        .pipe(sass())
        .pipe(uglyCss())
        .pipe(gulp.dest('./public'));
});

gulp.task('index', function () {
    gulp.src('index.html')
        .pipe(htmlMin({collapseWhitespace: true}))
        .pipe(gulp.dest('./public'));
});

gulp.task('default', ['sass', 'index'], function (next) {
    next();
});