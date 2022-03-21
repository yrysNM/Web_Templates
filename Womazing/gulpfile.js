let gulp = require("gulp"),
	livereload = require("gulp-livereload"); 
	//sass = require("gulp-sass");

gulp.task("reload-css",  function() {
return gulp.src('./src/scss/build/css/*.css')
	//.pipe(sass().on("error", sass.logError))
	//.pipe(gulp.dest("./src/css/scss/css/"))
	.pipe(livereload());
});

gulp.task("default", function() {
	livereload.listen();
	gulp.watch('./src/scss/build/css/*.css', gulp.parallel("reload-css"));
});