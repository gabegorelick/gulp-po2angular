'use strict';

var po2angular = require('../');
var gutil = require('gulp-util');
var expect = require('chai').expect;
var fs = require('fs');
var path = require('path');

var createFile = function (contents) {
  var base = path.normalize(__dirname + '/../fixtures');
  return new gutil.File({
    path: path.join(base, 'es.po'),
    base: base,
    cwd: __dirname,
    contents: contents
  });
}

describe('gulp-po2angular', function () {
  describe('po2angular()', function () {
    it('should match angular-gettext output', function (done) {
      fs.readFile(__dirname + '/fixtures/es.po', function (err, esPo) {
        if (err) {
          done(err);
          return;
        }
        po2angular()
          .on('error', done)
          .on('data', function (file) {
            expect(file.isNull()).to.be.false;
            expect(file.contents.toString()).to.equal(JSON.stringify({
              "Hello world": "¡Hola, mundo",
              "Goodbye": "Adios"
            }));

            done();
          })
          .write(createFile(esPo));
      })
    });
  })
});
