'use strict';

var cli = require('yargs')
    .usage('Useahe: gulp <task> [options]')

    // Environment modes
    .option('d', {
        alias: 'dev',
        default: true,
        describe: 'Development mode.'
    })
    .option('s', {
        alias: 'stage',
        default: false,
        describe: 'Staging mode.'
    })
    .option('p', {
        alias: 'prod',
        default: false,
        describe: 'Production mode.'
    })

    // CLI helpers
    .alias('h', 'help')
    .describe('h', 'Display this help message.')
    .describe('tasks', 'List available tasks.');

var argv = cli.argv;

if (argv.help) {
    // Display usage and exit.
    console.log(cli.help());
    process.exit();
}

if (argv.stage || argv.prod || argv.test) {
    // Switch off development flag when in staging or production mode.
    argv.dev = false;
}

if (argv.prod) {
    // Switch off staging flag when in production mode.
    argv.stage = false;
}

argv.env = argv.prod ? 'prod'
    : argv.stage ? 'stage'
    : 'dev';


module.exports = {
    argv: argv
};