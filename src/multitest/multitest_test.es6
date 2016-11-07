const test = require('tape');
const func = require('./func');

test('test pass', t => {
    t.plan(1);
    const res = func();
    t.deepEqual([1, 2], res);
});

test('test fail', t => {
    t.plan(2);
    const res = func();
    t.deepEqual({a:[1, 3]}, {a:res});
});