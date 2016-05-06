var gulp  = require('gulp'),
    gutil = require('gulp-util');
    jade  = require('gulp-jade');


gulp.task('default', ['watch']);

gulp.task('build-html', function(done) {
    return gulp.src('public/javascripts/client/templates/**/*.jade')
        .pipe(jade())
        .pipe(gulp.dest('public/javascripts/client'));
});

gulp.task('watch', function() {
    gulp.watch('public/javascripts/client/templates/**/*.jade', ['build-html']);
});