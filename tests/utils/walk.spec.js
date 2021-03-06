/*!
 * qwebs
 * Copyright(c) 2016 Benoît Claveau <benoit.claveau@gmail.com>
 * MIT Licensed
 */
"use strict";

const walk = require('../../lib/utils/walk');

describe("walk", () => {

    it("get", done => {
        
        return Promise.resolve().then(() => {
            
            let files = walk.get(__dirname);
            expect(files.length).toEqual(7);
            expect(files[0].slice(__dirname.length)).toEqual("/contentType.spec.js");
            expect(files[1].slice(__dirname.length)).toEqual("/pathRegex.spec.js");
            expect(files[2].slice(__dirname.length)).toEqual("/repository.spec.js");
            expect(files[3].slice(__dirname.length)).toEqual("/stream/data/page1.html");
            expect(files[4].slice(__dirname.length)).toEqual("/stream/data/page2.html");
            expect(files[5].slice(__dirname.length)).toEqual("/string.spec.js");
            expect(files[6].slice(__dirname.length)).toEqual("/walk.spec.js");
        }).catch(fail).then(done);
    });
});
