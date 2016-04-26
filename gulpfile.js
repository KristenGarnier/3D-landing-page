var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var sass = require('gulp-sass');
var combineMq = require('gulp-combine-mq');

var cssDependency = [
];
var jsDependency = [
];

gulp.task('js', function () {
  // Single entry point to browserify
  gulp.src('src/js/app.js')
    .pipe(plumber({
      errorHandler: notify.onError("Error: <%= error.message  %>")
    }))
    .pipe(browserify({
      insertGlobals: true,
      debug: !gulp.env.production
    }))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('move', function () {
  gulp.src(cssDependency)
    .pipe(gulp.dest('dist/css'));

  gulp.src(jsDependency)
    .pipe(gulp.dest('dist/js'));

  gulp.src('node_modules/slick-carousel/slick/ajax-loader.gif')
    .pipe(gulp.dest('dist/css'))
});

gulp.task('img', function () {
  return gulp.src('src/img/*')
    .pipe(plumber({
      errorHandler: notify.onError("Error: <%= error.message  %>")
    }))
    .pipe(imagemin({
      progressive: true,
      use: [pngquant()]
    }))
    .pipe(gulp.dest('dist/img'));
});

gulp.task('html', function () {
  gulp.src('./src/*.html')
    .pipe(gulp.dest('./dist'));
});

gulp.task('serve', ['dist'], function () {

  browserSync.init({
    server: {
      baseDir: "./dist"
    }
  });

  gulp.watch("src/css/**/*.scss", ['css']);
  gulp.watch("src/*.html", ['html']).on('change', reload);
  gulp.watch("src/js/**/*.js", ['js']).on('change', reload);
});

gulp.task('css', function () {
  gulp.src('src/css/style.scss')
    .pipe(plumber({
      errorHandler: notify.onError("Error: <%= error.message  %>")
    }))
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(combineMq({
      beautify: false
    }))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream());
});

gulp.task('dist', ['move', 'css', 'js', 'html', 'img']);
