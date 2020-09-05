

const hostname = '127.0.0.1';
const port = 3000;
const Co = require('./command');
const command = new Co();
const execFileSync = require('child_process').execFileSync;
const execSync = require('child_process').execSync;
const helperC = require('./helper.js');
const helper = new helperC();
const c = require('./constants.js');

const http = require('http');
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
    command.convertRaw();

});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
    //    helper.removeProcessedFiles();
    //    execFileSync(c.SHELL + '/0.init.sh');
    // execSync('siril -s ./src/shell/script_test.ssf');
    // execSync('touch /home/johann/Pictures/Astro/test/brrrrrrrrrrrr.txt');
    //    execFileSync(c.SHELL + '/1.wd.sh', [c.WORKINDIRECTORY]);
    // execFileSync(c.SHELL + '/2.convert_raw.sh');
    //    helper.initFileWatcher();
    // execFileSync(c.SHELL + '/3.register.sh');
    // execFileSync(c.SHELL + '/4.stack.sh');


    const fs = require('fs');
    // // Create a stream from some character device.
    const stream = fs.createReadStream('/tmp/siril_command.out');
    // const readable = getReadableStreamSomehow();
    let output = 0;
    stream.on('readable', function () {
        // There is some data to read now.
        let data;

        while (data = this.read()) {
            if (data.toString().includes('success cd /home/johann/Pictures/Astro/test')) {
                output++;
                console.log('output: ', output);
            }
            console.log('Command: ', data.toString().match(new RegExp("Running command: cd", "g")).length);
            console.log('Output success: ', data.toString().match(new RegExp("success cd /home/johann/Pictures/Astro/test", "g")).length);
            
        }
    });
    for (i = 0; i < 5; i++) {
        execFileSync(c.SHELL + '/1.wd.sh', [c.WORKINDIRECTORY]);
    }

});
