var gulp  = require('gulp'),
    gutil = require('gulp-util');
    jade  = require('gulp-jade');


gulp.task('default', ['watch']);

gulp.task('build-html', function(done) {
    return gulp.src('views/templates/**/*.jade')
        .pipe(jade())
        .pipe(gulp.dest('views/client'));
});

gulp.task('watch', function() {
    gulp.watch('views/templates/**/*.jade', ['build-html']);
});