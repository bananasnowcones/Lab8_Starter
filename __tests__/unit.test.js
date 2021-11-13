// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('Normal phone', () => {
    expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
});

test('Parentheses included', () => {
    expect(functions.isPhoneNumber('(123)123-1231')).toBe(true);
});

test('Bad format', () => {
    expect(functions.isPhoneNumber('(123)56-78-0')).toBe(false);
});

test('Non numbers', () => {
    expect(functions.isPhoneNumber('abc-def-ghij')).toBe(false);
});


test('Real email', () => {
    expect(functions.isEmail('mwyap@ucsd.edu')).toBe(true);
});

test('Another real email', () => {
    expect(functions.isEmail('finaid@ucsd.edu')).toBe(true);
})

test('Bad format email', () => {
    expect(functions.isEmail('A@_-*%%')).toBe(false);
});

test('Number in ending', () => {
    expect(functions.isEmail('mwyap@12345.ed6u')).toBe(false);
});
  

test('Srong password', () => {
    expect(functions.isStrongPassword('A_1234')).toBe(true);
});

test('Length 4 password', () => {
    expect(functions.isStrongPassword('A_0b')).toBe(true);
});

test('First character not char', () => {
    expect(functions.isStrongPassword('1romans5:8')).toBe(false);
});

test('More than 15 characters', () => {
    expect(functions.isStrongPassword('abcdefghijklmnop')).toBe(false);
});


test('Today date', () => {
    expect(functions.isDate('11/12/2022')).toBe(true);
});

test('Someone birthday', () => {
    expect(functions.isDate('12/19/2000')).toBe(true);
});

test('Invalid month', () => {
    expect(functions.isDate('133/12/2021')).toBe(false);
});

test('Invalid year', () => {
    expect(functions.isDate('11/12/20089')).toBe(false);
});


test('Valid color - pink', () => {
    expect(functions.isHexColor('#E22777')).toBe(true);
});

test('Valid color - silver', () => {
    expect(functions.isHexColor('#bdcdde')).toBe(true);
});

test('Out of range length', () => {
    expect(functions.isHexColor('#1234567')).toBe(false);
});
test('Invalid hex', () => {
    expect(functions.isHexColor('#WWWW')).toBe(false);
});