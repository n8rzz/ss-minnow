var path = require('path');

var ROOT = path.join(__dirname, './');

var destDir = './public/assets';
var destStylesDir = path.join(destDir, 'styles');
var destScriptsDir = path.join(destDir, 'scripts');

var testDir = './src/spec';

var srcDir = './src';
var srcScriptsDir = path.join(srcDir, 'scripts');
var srcStylesDir = path.join(srcDir, 'scss');

var options = {};

options.ROOT = ROOT;
options.DIR = {
    SRC: srcDir,
    SRC_STYLES: srcStylesDir,
    SRC_SCRIPTS: srcScriptsDir,

    DEST: destDir,
    DEST_STYLES: destStylesDir,
    DEST_SCRIPTS: destScriptsDir,

    TEST: testDir
};

options.FILE = {
    JS_SRC_CLIENT: path.join(srcScriptsDir, '/main.js')
};

options.GLOB = {
    SASS: path.join(options.DIR.SRC_STYLES, '**/*.scss'),
    JS: path.join(options.DIR.SRC_SCRIPTS, '**/*.js')
};


module.exports = options;
