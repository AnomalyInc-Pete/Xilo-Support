const gulp = require('gulp');
const sass = require('gulp-sass');
const del = require('del');
const browserSync = require('browser-sync').create();

gulp.task('styles', () => {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('src/css/'));
});

gulp.task('clean', () => {
    return del([
        'src/css/main.css',
    ]);
});

gulp.task('watch', () => {
    gulp.watch('src/scss/**/*.scss', (done) => {
        gulp.series(['clean', 'styles'])(done);
    });
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

// gulp.task('serve', () => {
//
//     browserSync.init({
//         server: "./"
//     });
//
//     // gulp.watch('./*.html', ['fileinclude']);
//     // gulp.watch("./src/scss/*.scss", ['sass']);
//     // gulp.watch("./*.html").on('change', browserSync.reload);
//     // gulp.watch("./src/js/*.js").on('change', browserSync.reload);
// });

gulp.task('default', gulp.series(['clean', 'styles', 'watch', 'browser-sync']));
