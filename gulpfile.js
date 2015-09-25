var gulp = require('gulp'),
    $    = require('gulp-load-plugins')({
      pattern: ['gulp-*', 'del', 'main-bower-files', 'browser-sync']
    });


var ghPages = require('gulp-gh-pages');

gulp.task('deploy', function() {
  return gulp.src('public/**/*')
    .pipe(ghPages());
});


gulp.task('clean', function (cb) {
  $.del('public', cb);
});

gulp.task('bower', function () {
  gulp
    .src($.mainBowerFiles('**/*.js'))
    .pipe($.concat('build.js'))
    .pipe(gulp.dest('public/lib'));
  gulp
    .src($.mainBowerFiles('**/*.scss'))
    .pipe($.concat('build.css'))
    .pipe(gulp.dest('public/lib'));
});

gulp.task('jade:dev', function () {
  gulp
    .src(['src/**/*.jade', '!app/**/_*.jade'])
    .pipe($.jade({
      pretty: true
    }))
    .pipe(gulp.dest('public'));
});

gulp.task('sass:dev', function () {
  gulp
    .src('src/**/main.scss')
    .pipe($.sass()
      .on('error', $.sass.logError))
    .pipe(gulp.dest('public'));
});

gulp.task('js:dev', function () {
  gulp.src('src/**/*.js')
    .pipe($.babel())
    .pipe(gulp.dest('public'));
});

gulp.task('browser-sync', function() {
    $.browserSync.init({
        server: {
            baseDir: "./public"
        }
    });
});

gulp.task('copy', function () {
  gulp.src('src/CNAME')
    .pipe(gulp.dest('public'));
});

gulp.task('audio', function () {
  gulp.src('src/**/*.mp3')
    .pipe(gulp.dest('public'));
});

gulp.task('img', function () {
  gulp.src('src/**/*.jpg')
    .pipe(gulp.dest('public'));
});

gulp.task('img-png', function () {
  gulp.src('src/**/*.png')
    .pipe(gulp.dest('public'));
});

// gulp.task('build:prod', ['jade:prod', 'sass:prod', 'js:prod', 'bower', 'copy']);
gulp.task('build:dev', ['jade:dev', 'sass:dev', 'js:dev', 'bower', 'copy', 'audio', 'img', 'img-png']);

gulp.task('serve', ['build:dev'], function () {
  gulp.start('browser-sync');
  gulp.watch(['src/**/*.jade'], ['jade:dev'],['clean']).on('change', $.browserSync.reload);
  gulp.watch(['src/**/*.scss'], ['sass:dev']).on('change', $.browserSync.reload);
  gulp.watch(['src/**/*.js'], ['js:dev']).on('change', $.browserSync.reload);
 // gulp.watch(['src/**/*', '!src/**/*.jade', '!src/**/*.scss', '!src/**/*.js'], ['build:dev']).on('change', $.browserSync.reload);
});

gulp.task('default', ['clean'], function () {
  gulp.start('serve');
});
