   var gulp = require('gulp');
   var concat = require('gulp-concat');
   var uglify = require('gulp-uglify');
   var path = require('path');
   var rename =  require('gulp-rename');
   var plugins = require('gulp-load-plugins')({scope: ['devDependencies']});
   var del = require('del');
   var babel = require('gulp-babel');
   var connect = require('gulp-connect');
   var browserify = require('gulp-browserify');

   gulp.task('default',['js'],function(){
	return	gulp.src('src/index.html').pipe(gulp.dest('dist'));
    });

   
   gulp.task('js', function() {
              return gulp.src('src/*.js')
	      .pipe(babel({
        		    "presets": ['es2015','react']
        	   }))
              .pipe(gulp.dest('dist/js'));
	      /*return gulp.src('build/js/test-controller.js')
	      .pipe(browserify())
	      .pipe(gulp.dest('dist/js'));*/

   });

   gulp.task('clean',function(){
	 	return del(['dist']);
   });

   gulp.task('watch', function() {
    		gulp.watch('src/**/*', ['default']);
   });
