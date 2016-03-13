var clgulp = require('clgulp')
var gulp = clgulp(require('gulp'))
var exec = clgulp.exec
var util = clgulp.util
var mocha = require('gulp-spawn-mocha')

gulp.task('tag', ['test', 'lint'], function (cb) {
  var version = require('./package').version
  var tag = 'v' + version
  util.log('Tagging as: ' + util.colors.cyan(tag))
  exec([
    'git add package.json',
    'git commit -m "Prepare release"',
    'git tag -a ' + tag + ' -m "Version ' + version + '"',
    'git push origin master --tags',
    'npm publish'
  ], cb)
})

gulp.task('test', function () {
  return gulp.src('test/*.js', {
    read: false
  })
    .pipe(mocha())
})
