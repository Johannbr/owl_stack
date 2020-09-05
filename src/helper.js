/* @flow */
const chokidar = require('chokidar');
const c = require('./constants.js');
const fs = require('fs');
const path = require('path');
const commandC = require('./command.js')


class Helper {
    command = new commandC();
    // Initialize watcher
    initFileWatcher() {
        const watcher = chokidar.watch(c.WORKINDIRECTORY, { persistent: true });
        watcher
            .on('add', path => {
                if (path.substring(path.length - 3) === 'CR2') {
                    console.log(`New CR2 file has been added`);
                    // Remove all preprocessed files
                    this.removeProcessedFiles();
                    this.command.convertRaw();
                    this.command.register();
                    this.command.stack();
                }
            })
            // .on('all', (event, path) => {
            //     // console.log(event, path);
            //     if (event === 'unlink') {
            //         if (this.isCr2File() && this.isEveryProcessedFileDeleted()) {
            //             execFileSync(c.SHELL + '/2.convert_raw.sh');
            //         }
            //     }
            // });
    }

    removeProcessedFiles() {
        console.time('removeProcessedFiles');
        const files: string[] = fs.readdirSync(c.WORKINDIRECTORY);
        for (const file of files) {
            if (file.substring(0, 5) === c.PREFIX || file.substring(0, 7) === c.REGISTERED + c.PREFIX) {
                fs.unlinkSync(path.join(c.WORKINDIRECTORY, file));
            } 
        }
        console.timeEnd('removeProcessedFiles');
    }

    isCr2File(): boolean {
        const files: string[] = fs.readdirSync(c.WORKINDIRECTORY);
        return files.some(file => file.substring(file.length - 3) === 'CR2');
    };

    /**
     * Is every processed file deleted
     */
    isEveryProcessedFileDeleted(): boolean {
        const files: string[] = fs.readdirSync(c.WORKINDIRECTORY);
        return !files.some(file => file.substring(file.length - 3) === 'fit' || file.substring(file.length - 3) === 'seq');
    }
}
module.exports = Helper;