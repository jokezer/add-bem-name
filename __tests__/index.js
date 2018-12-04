// import addBemName from '../index.js';
const addBemName = require('../index.js')

test('it returns the function on first call with the uniq class name', () => {
  expect(addBemName('first-class')).toBeTruthy();
});

test('it raises the error on the second call with the same class name', () => {
  expect(() => addBemName('first-class')).toThrowError('Block name "first-class" is already taken');
});

const bemName = addBemName('block-name');

test('it returns correct block name', () => {
  expect(bemName()).toBe('block-name');
});

test('it returns correct name for block - element', () => {
  expect(bemName('element')).toBe('block-name__element');
});

test('it returns correct name for block - element - modificator', () => {
  expect(bemName('element', 'modificator')).toBe('block-name__element--modificator');
});

test('it returns correct name for block - modificator', () => {
  expect(bemName(null, 'modificator')).toBe('block-name--modificator');
});
