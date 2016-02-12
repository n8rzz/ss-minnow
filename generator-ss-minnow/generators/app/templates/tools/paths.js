var path = require('path');

var ROOT = path.join(__dirname, './');

var destFolder = './web';
var destDir = './web/assets';
var destStylesDir = path.join(destDir, 'styles');
var destScriptsDir = path.join(destDir, 'scripts');
var destMedia = path.join(destDir, 'media');

var testDir = './spec';

var srcFolder = './src';
var srcDir = './src/assets';
var srcScriptsDir = path.join(srcDir, 'scripts');
var srcStylesDir = path.join(srcDir, 'scss');
var srcMedia = path.join(srcDir, 'media');


var options = {};

options.ROOT = ROOT;
options.DIR = {
    SRC_FOLDER: srcFolder,
    SRC: srcDir,
    SRC_STYLES: srcStylesDir,
    SRC_SCRIPTS: srcScriptsDir,
    SRC_MEDIA: srcMedia,

    DEST_FOLDER: destFolder,
    DEST: destDir,
    DEST_STYLES: destStylesDir,
    DEST_SCRIPTS: destScriptsDir,
    DEST_MEDIA: destMedia,

    TEST: testDir
};

options.FILE = {
    JS_SRC_CLIENT: './src/assets/scripts/main.js'
};


options.GLOB = {
    SRC: path.join(options.DIR.SRC_FOLDER, '**/*'),
    DEST: path.join(options.DIR.DEST_FOLDER, '**/*'),
    SASS: path.join(options.DIR.SRC_STYLES, '**/*.scss'),
    JS: path.join(options.DIR.SRC_SCRIPTS, '**/*.js'),
    MARKUP: path.join(options.DIR.SRC, '**/*.html'),
    TEST: path.join(options.DIR.TEST, '**/*.js')
};


module.exports = options;
