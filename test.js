var test = require('tape');
var capitals = require('./index');
test('should return string test', function (t) {
    t.plan(2);
    t.equal(typeof capitals.capitalOf('japan'), 'string');
    t.equal(typeof capitals.isCapitalOf('budapest'), 'string');
});

test('should return true names', function (t) {
    t.plan(4);

    t.equal(capitals.capitalOf('germany'), 'Berlin');
    t.equal(capitals.capitalOf('Peru'), 'Lima');

    t.equal(capitals.isCapitalOf('Bangkok'), 'Thailand');
    t.equal(capitals.isCapitalOf('jakarta'), 'Indonesia');
    
});