let test = require('tape');
let time_parser = require('./ex7-time_parser.js');

const h     = (val) => val*60;
const m     = (val) => val;
const am    = (val) => val;
const pm    = (val) => val + h(12);

let tests = {
    "1am": h(1),
    "1pm": pm(h(1)),
    "2:30": h(2) + m(30),
    "14:30": pm(h(2)) + m(30),
    "2:30pm": pm(h(2)) + m(30),
};

test('time parsing', function (t){
    for (const string in tests) {
        let result = time_parser.parse(string);
        t.equal(result, tests[string], string);
    }
    t.end()
});
