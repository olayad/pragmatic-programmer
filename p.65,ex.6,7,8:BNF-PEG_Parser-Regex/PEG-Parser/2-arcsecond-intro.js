const A = require('arcsecond');

// const stringParser = A.many(A.str('hello'));
// console.log(stringParser.run('hellohellohello'));


// const helloParser = A.choice([
//     A.str('hello'),
//     A.str('world')
// ]);
// const stringParser = A.many(helloParser);
// console.log(
//     stringParser.run('hellohelloworldhelloworldwaka')
// );


// const stringParser = A.str('hello').map(result => ({
//     type: 'captured string',
//     value: result.toUpperCase()
// }));
// console.log(
//     stringParser.run('hello')
// );


// const stringParser = A.many(A.str('hello')).map(results => results.map(x => x.toUpperCase()).join(''));
// console.log(stringParser.run('hellohellohellohellohello'));


// The map in the second sequence, skips the letters but it did parse them
// const stringParser = A.sequenceOf([
//     A.sequenceOf([
//         A.letters,
//         A.digits,
//     ]).map(results => results[1]),
//     A.str('hello'),
//     A.many(A.char(' ')),
//     A.str('world'),
//     A.endOfInput
// ]);
// console.log(
//     stringParser.run('fdsfasdfasfasfsafashe1242314123hello    world')
// );


const tag = type => value => ({type, value});
const stringParser = A.sequenceOf([
    A.sequenceOf([
        A.letters,
        A.digits,
    ]).map(tag('letterDigits')),
    A.str('hello').map(tag('string')),
    A.many(A.char(' ')).map(tag('whitespace')),
    A.str('world').map(tag('string')),
    A.endOfInput.map(tag('endOfInput'))
]);
console.log(
    stringParser.run('fdsfasdfasfasfsafashe1242314123hello    world')
);