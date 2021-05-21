
// const gulp = require('gulp');
// const sass = require('gulp-sass');
// const browserSync = require('browser-sync').create();
// //compile scss into css
// function style() {
//     return gulp.src('src/scss/**/*.scss')
//     .pipe(sass().on('error',sass.logError))
//     .pipe(gulp.dest('src/css'))
//     .pipe(browserSync.stream());
// }
// function watch() {
//     browserSync.init({
//         server: {
//            // baseDir: "/",
//            index: "/index.html",
//            proxy: "localhost"
//         }
//     });
//     gulp.watch('src/scss/**/*.scss', style)
//     gulp.watch('./*.html').on('change',browserSync.reload);
//     gulp.watch('/src/js/**/*.js').on('change', browserSync.reload);
// }
// exports.style = style;
// exports.watch = watch;
//
// gulp.task('default', gulp.series(['style', 'watch']));

const gulp = require('gulp');
const sass = require('gulp-sass');
const del = require('del');
const browserSync = require('browser-sync').create();

//compile scss into css
gulp.task('sass', () => {
    return gulp.src('src/scss/**/*.scss')
    .pipe(sass().on('error',sass.logError))
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.stream());
});

gulp.task('watch', () => {
    browserSync.init({
        server: {
           // baseDir: "/",
           index: "/index.html",
           proxy: "localhost"
        }
    });
    gulp.watch("src/scss/**/*.scss");
    gulp.watch('./*.html').on('change',browserSync.reload);
    gulp.watch('src/js/**/*.js').on('change', browserSync.reload);
});

gulp.task('clean', () => {
    return del([
        'src/css/styles.css',
    ]);
});

gulp.task('default', gulp.series(['clean', 'sass', 'watch']));
