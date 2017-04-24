var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var cache = require('gulp-cache');
var del = require('del');
var runSequence = require('run-sequence');



/* Development Tasks */ 

// Start browserSync server
gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: 'angular'
    }
  })
})

gulp.task('convert_sass', function() {
  return gulp.src('angular/assets/scss/project/master.scss') // Gets all files ending with .scss in app/scss and children dirs
    .pipe(sass()) // Passes it through a gulp-sass
    .pipe(gulp.dest('angular/assets')) // Outputs it in the css folder
    .pipe(browserSync.reload({ // Reloading with Browser Sync
      stream: true
    }));
})

// Watchers
gulp.task('watch', function() {
  gulp.watch('angular/assets/scss/**/*.scss', ['convert_sass']);
  gulp.watch('angular/templates/*.html', browserSync.reload);
  gulp.watch('angular/**/*.js', browserSync.reload);
})


/* Optimization Tasks */

// Optimizing CSS and JavaScript 
gulp.task('optimize_scripts', function() {
  return gulp.src('angular/templates/*.html')
    .pipe(useref())
    .pipe(gulpIf('angular/**/*.js', uglify()))
    .pipe(gulpIf('assets/*.css', cssnano()))
    .pipe(gulp.dest('dist'));
});

// Optimizing Images 
gulp.task('optimize_images', function() {
  return gulp.src('assets/images/**/*.+(png|jpg|jpeg|gif|svg)')
    .pipe(gulp.dest('dist/images'))
});

// Copying fonts 
gulp.task('optimize_fonts', function() {
  return gulp.src('assets/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'))
})

// Cleaning 
gulp.task('clean', function() {
  return del.sync('dist').then(function(cb) {
    return cache.clearAll(cb);
  });
})

gulp.task('clean:dist', function() {
  return del.sync(['dist/**/*', '!dist/images', '!dist/images/**/*']);
});


/* Build Sequences*/

/*gulp.task('default', function(callback) {
  runSequence(['convert_sass', 'browserSync', 'watch'],
    callback
  )
})*/

gulp.task('build', function(callback) {
  runSequence(
    'clean:dist',
   // ['convert_sass', 'optimize_scripts', 'optimize_images', 'optimize_fonts'],
    ['convert_sass'],
    callback
  )
})