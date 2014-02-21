'use strict';

var gutil = require('gulp-util');
var through = require('through2');
var PO = require('pofile');
var path = require('path');

var pluginName = 'gulp-po2angular';

module.exports = function () {
  return through.obj(function (file, enc, cb) {
    if (file.isNull()) {
      this.push(file);
      return cb();
    }

    if (file.isStream()) {
      this.emit('error', new gutil.PluginError(pluginName, 'Streaming not supported'));
      return cb();
    }

    var poFile = PO.parse(file.contents.toString());
    var strings = {};
    poFile.items.forEach(function (item) {
      strings[item.msgid] = item.msgstr.length === 1 ? item.msgstr[0] : item.msgstr;
    });

    file.contents = new Buffer(JSON.stringify(strings));

    var dirname = path.dirname(file.path);
    var basename = path.basename(file.path, '.po');
    file.path = path.join(dirname, basename + '.json');

    this.push(file);
    cb();
  });
};
