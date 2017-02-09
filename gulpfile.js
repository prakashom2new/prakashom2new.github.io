var gulp = require ("gulp"),
    watch = require ("gulp-watch"),
    cssMinify = require ("gulp-csso"),
    imgMin = require ("gulp-imagemin"),
    fileIncluder = require ("gulp-file-include"),
    rename = require ("gulp-rename"),
    plumber = require ("gulp-plumber"),
    webserver = require('gulp-webserver');;

gulp.task ("fileInclude", function () {
    return gulp.src ("/templates/*.tpl.html")
            .pipe (plumber ())    
            .pipe (fileIncluder ())
            .pipe (rename ({extname: ""}))
            .pipe (rename ({extname: ".html"}))
            .pipe (gulp.dest ("./"));
});
gulp.task ("fileIncludeWorks", function () {
    return gulp.src ("./works_pages/templates/*.tpl.html")
            .pipe (plumber ())    
            .pipe (fileIncluder ())
            .pipe (rename ({extname: ""}))
            .pipe (rename ({extname: ".html"}))
            .pipe (gulp.dest ("./works_pages"));
});

gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: true
    }));

    gulp.watch ("./templates/*.tpl.html", ["fileInclude"]);
    gulp.watch ("./works_pages/templates/*.tpl.html", ["fileIncludeWorks"]);
    
});


/*gulp.task ("css", function () {
    return gulp.src (fldr.src + "/css/*.css")
    .pipe (cssMinify ())
    .pipe (gulp.dest (fldr.build + "/css"));
});

gulp.task ("image", function () {
    return gulp.src (fldr.src + "/img/*")
    .pipe (imgMin ({progressive: true}))
    .pipe (gulp.dest (fldr.build + "/img"));
});

gulp.task('cleanBuild', function () {
  return del([
    fldr.build + "/**"
  ]);
});*/

gulp.task ("default", ["webserver", "fileInclude", "fileIncludeWorks"]);