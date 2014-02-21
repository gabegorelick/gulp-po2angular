# [gulp](http://gulpjs.com)-po2angular

> Convert .po files to JSON for use with [angular-gettext](http://angular-gettext.rocketeer.be).

## Install

Install with [npm](https://npmjs.org/package/gulp-po2angular)

```
npm install --save-dev gulp-po2angular
```

## Examples

```
var gulp = require('gulp');
var po2angular = require('gulp-po2angular');

gulp.task('po2json', function () {
    return gulp.src(['po/**/*.po'])
        .pipe(po2angular())
        .pipe(gulp.dest('dist/translations/'));
});
```

## Differences from [grunt-angular-gettext](https://github.com/rubenv/grunt-angular-gettext)
This plugin is similar to [grunt-angular-gettext](https://github.com/rubenv/grunt-angular-gettext)
 except that it outputs JSON instead of
 [JSON wrapped in JavaScript](http://angular-gettext.rocketeer.be/dev-guide/compile/). It's up to you how you load
 the resulting JSON into your app.

## Differences from [gulp-po2json](https://www.npmjs.org/package/gulp-po2json)
[gulp-po2json](https://www.npmjs.org/package/gulp-po2json) generates slightly different JSON than what angular-gettext
 expects. It's pretty easy to convert its output (either raw or [Jed-style](http://slexaxton.github.io/Jed/)) to the
 format that angular-gettext expects, but why bother when this plugin exists?
