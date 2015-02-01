/**
 * Created by antoine on 10/20/14.
 */

var gulp = require('gulp');
var mainBowerFiles = require('main-bower-files');
var inject = require('gulp-inject');
var angularFilesort = require('gulp-angular-filesort');

var indexPath = gulp.src('./assets/index.html');
var jsLibPath = './assets/lib/**/*.js';
var jsPath = './assets/**/*.js';
var cssPaths = ['./assets/lib/**/*.css', './assets/**/*.css']

gulp.task('gen-lib-tags', function(){

    var libSources = gulp.src([jsLibPath, '!./assets/lib/**/angular.js']);

    return indexPath.pipe(inject(gulp.src('./assets/lib/**/angular.js'),
        {
            ignorePath: '/assets/',
            addRootSlash: false,
            name: 'angular'
        }))
        .pipe(
        inject(libSources.pipe(angularFilesort()),
            {
                ignorePath: '/assets/',
                addRootSlash: false,
                name: 'lib'
            }))

        .pipe(gulp.dest('./assets'));
});

gulp.task('gen-script-tags', function(){

    var jsSources = gulp.src([jsPath, '!'+jsLibPath]);

    return indexPath.pipe(
        inject(jsSources.pipe(angularFilesort()), {ignorePath: '/assets/', addRootSlash: false}))
        .pipe(gulp.dest('./assets'));
});

gulp.task('gen-css-tags', function(){

    var cssSources = gulp.src(cssPaths);

    return indexPath.pipe(
        inject(cssSources, {ignorePath: '/assets/', addRootSlash: false}))
        .pipe(gulp.dest('./assets'));
});

gulp.task('bower-files', function(){
    gulp.src(mainBowerFiles())
        .pipe(gulp.dest('./assets/lib'));
});

gulp.task('default', ['bower-files', 'gen-script-tags']);