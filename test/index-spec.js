var assert = require('assert');
var multiplytime = require('../index');
describe('multiplytime', function() {
    describe('multiply', function() {
        it('multiply for 33', function () {
            var result = multiplytime.mul(11, 3);
            assert.equal(result, 33);
        });
    });
});