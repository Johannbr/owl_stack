/* @flow */
const { execFileSync } = require('child_process');
const c = require('./constants.js');

class Command {

    convertRaw() {
        console.log('Converting Raw');
        execFileSync(c.SHELL + '/2.convert_raw.sh');
    }
    register() {
        console.log('Registering converted files');
        execFileSync(c.SHELL + '/3.register.sh');
    }
    stack() {
        console.log('Stacking regstered files');
        execFileSync(c.SHELL + '/4.stack.sh');
    }


}
module.exports = Command;

