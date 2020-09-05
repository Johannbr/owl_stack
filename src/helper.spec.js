const assert = require('assert');
const Helper = require('./helper.js');
var mock = require('mock-fs');


describe('Is there at least one CR2 file', () => {
    it('should return yes', () => {
        mock({
            '/home/johann/Pictures/Astro/test': {
                'some-file.txt': '',
                'IMG.CR2': ''
            }
        });
        const bool = new Helper().isCr2File();
        assert.equal(bool, true);
    });

    it('should return no', () => {
        mock({
            '/home/johann/Pictures/Astro/test': {
                'some-file.txt': ''
            }
        });
        const bool = new Helper().isCr2File();
        assert.equal(bool, false);
    });
});


describe('Have processed files been deleted', () => {
    it('should return yes', () => {
        mock({
            '/home/johann/Pictures/Astro/test': {
                'some-file.txt': '',
                'IMG.CR2': ''

            }
        });
        const bool = new Helper().isEveryProcessedFileDeleted();
        assert.equal(bool, true);
    });

    it('should return no', () => {
        mock({
            '/home/johann/Pictures/Astro/test': {
                'some-file.txt': '',
                'IMG.fit': ''
            }
        });
        const bool = new Helper().isEveryProcessedFileDeleted();
        assert.equal(bool, false);
    });

    it('should return no', () => {
        mock({
            '/home/johann/Pictures/Astro/test': {
                'IMG.seq': ''
            }
        });
        const bool = new Helper().isEveryProcessedFileDeleted();
        assert.equal(bool, false);
    });
});