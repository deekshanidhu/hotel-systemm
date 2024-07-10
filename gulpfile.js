const gulp = require('gulp');

 // Task to minify images
 gulp.task('minify-img', async () => {
   const imagemin = await import('gulp-imagemin');
   return gulp.src('images/*')
     .pipe(imagemin.default())
     .pipe(gulp.dest('dist/images'));
 });

 // Default task: runs the 'minify-img' task
 gulp.task('default', gulp.series('minify-img'));