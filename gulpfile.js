var gulp = require ("gulp"),
    watch = require ("gulp-watch"),
    del = require ("del"),
    cssMinify = require ("gulp-csso"),
    imgMin = require ("gulp-imagemin"),
    fldr = { src: "src/", build: "build/" };

gulp.task ("css", function () {
    return gulp.src (fldr.src + "/css/*.css")
    .pipe (cssMinify ())
    .pipe (gulp.dest (fldr.build + "/css"));
});

gulp.task ("image", function () {
    return gulp.src (fldr.src + "/img/*")
    .pipe (imgMin ({progressive: true}))
    .pipe (gulp.dest (fldr.build + "/img"));
});

gulp.task ("watch", function () {
    gulp.watch (fldr.src + "/css/*.css", ["css"]);
    gulp.watch (fldr.src + "/img/*", ["image"]);
});

/*gulp.task('cleanBuild', function () {
  return del([
    fldr.build + "/**"
  ]);
});*/

gulp.task ("default", ["css", "image", "watch"]);