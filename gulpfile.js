var gulp = require('gulp');
var concat = require('gulp-concat');
var plugins = require('gulp-load-plugins')({scope: ['devDependencies']});
var del = require('del');
var babel = require('gulp-babel');
var rename = require('gulp-rename');


gulp.task('default', ['js'], function () {
    gulp.src(['!build/js/cauldron.js','build/js/*.js'])
            .pipe(gulp.dest('lib'));
    return gulp.src('build/js/cauldron.js')
            .pipe(rename('index.js'))
            .pipe(gulp.dest('lib'));
});

gulp.task('js', function () {
    return gulp.src('src/*.js')
            .pipe(babel({
                "presets": ['es2015', 'react']
            }))
            .pipe(gulp.dest('build/js'));
});

gulp.task('clean', function () {
    return del(['build']);
});

gulp.task('watch', function () {
    gulp.watch('src/**/*', ['default']);
});
