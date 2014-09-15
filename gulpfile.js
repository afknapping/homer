var gulp = require('gulp');
var jade = require('gulp-jade');
var gutil = require('gulp-util');
var sass = require('gulp-ruby-sass');

scripts: ['client/js/**/*.coffee', '!client/external/**/*.coffee'],

sources = {
  jade_index: 'index.jade',
  jade_layouts: '_layouts-jade/*.jade',
  jade_includes: '_includes/*.jade',
  // coffee: "coffee/**/*.coffee",
  sass: "sass/**/*.{sass,scss}"
  // overwatch: "./**/*.{js,html,css}"
};

destinations = {
  index: "",
  layouts: "_layouts/",
  includes: "_includes/",
  // js: "output/js/",
  css: "css/",
  sass: "_site/sass/"
};



gulp.task('sass', function () {
    return gulp.src(sources.sass)
        .pipe(sass(
              {
                sourcemap: true,
                sourcemapPath: '/sass',
                lineNumbers: true,
                bundleExec: true
              }
              ))
        .on('error', function (err) { console.log(err.message); })
        .pipe(gulp.dest(destinations.css));
});

gulp.task("jade_index", function(event) {
  return gulp.src(sources.jade_index).pipe(jade({
    // pretty: true
  })).pipe(gulp.dest(destinations.index));
});

gulp.task("jade_layouts", function(event) {
  return gulp.src(sources.jade_layouts).pipe(jade({
    // pretty: true
  })).pipe(gulp.dest(destinations.layouts));
});

gulp.task("jade_includes", function(event) {
  return gulp.src(sources.jade_includes).pipe(jade({
    // pretty: true
  })).pipe(gulp.dest(destinations.includes));
});


gulp.task("watch", function() {
  gulp.watch(sources.jade_index, ["jade_index"]);
  gulp.watch(sources.jade_layouts, ["jade_layouts"]);
  gulp.watch(sources.jade_includes, ["jade_includes "]);
  gulp.watch(sources.sass, ["sass"]);
  // gulp.watch(sources.coffee, ["coffee"]);
  // gulp.watch(sources.overwatch, refresh);
});

gulp.task("default", [
  // "serve",
  "jade_index",
  "jade_layouts",
  "jade_includes",
  // "coffee",
  "sass",
  "watch"
]);