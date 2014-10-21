/**
 * Created by antoine on 10/20/14.
 */

var gulp = require('gulp');
var mainBowerFiles = require('main-bower-files');
var inject = require('gulp-inject');
var angularFilesort = require('gulp-angular-filesort');

var indexPath = gulp.src('./public/index.html');
var jsLibPath = './public/lib/**/*.js';
var jsPath = './public/**/*.js';
var cssPaths = ['./public/lib/**/*.css', './public/**/*.css']


gulp.task('gen-lib-tags', function(){

    var libSources = gulp.src(jsLibPath);

    return indexPath.pipe(
        inject(libSources.pipe(angularFilesort()),
            {
                ignorePath: '/public/',
                addRootSlash: false,
                name: 'lib'
            }))

        .pipe(gulp.dest('./public'));
});

gulp.task('gen-script-tags', function(){

    var jsSources = gulp.src([jsPath, '!'+jsLibPath]);

    return indexPath.pipe(
        inject(jsSources.pipe(angularFilesort()), {ignorePath: '/public/', addRootSlash: false}))
        .pipe(gulp.dest('./public'));
});

gulp.task('gen-css-tags', function(){

    var cssSources = gulp.src(cssPaths);

    return indexPath.pipe(
        inject(cssSources, {ignorePath: '/public/', addRootSlash: false}))
        .pipe(gulp.dest('./public'));
});

gulp.task('bower-files', function(){
    gulp.src(mainBowerFiles())
        .pipe(gulp.dest('./public/lib'));
});

gulp.task('default', ['bower-files', 'gen-script-tags', 'gen-css-tags', 'gen-lib-tags']);