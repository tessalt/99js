var Bottles = require('../bottles');
var assert = require('chai').assert;

test('first verse', function () {
  var expected = "99 bottles of beer on the wall, " +
    "99 bottles of beer.\n" +
    "Take one down and pass it around, " +
    "98 bottles of beer on the wall.\n"
  assert.equal(expected, new Bottles().verse(99));
});

test('another verse', function () {
  var expected = "3 bottles of beer on the wall, " +
    "3 bottles of beer.\n" +
    "Take one down and pass it around, " +
    "2 bottles of beer on the wall.\n"
  assert.equal(expected, new Bottles().verse(3));
});

test('97th verse', function () {
  var expected = "2 bottles of beer on the wall, " +
    "2 bottles of beer.\n" +
    "Take one down and pass it around, " +
    "1 bottle of beer on the wall.\n"
  assert.equal(expected, new Bottles().verse(2));
});


test('penultimate verse', function () {
  var expected = "1 bottle of beer on the wall, " +
    "1 bottle of beer.\n" +
    "Take it down and pass it around, " +
    "no more bottles of beer on the wall.\n"
  assert.equal(expected, new Bottles().verse(1));
});

test('last verse', function () {
  var expected = "No more bottles of beer on the wall, " +
    "no more bottles of beer.\n" +
    "Go to the store and buy some more, " +
    "99 bottles of beer on the wall.\n"
  assert.equal(expected, new Bottles().verse(0));
});

test('a couple verses', function () {
  var expected = "99 bottles of beer on the wall, " +
    "99 bottles of beer.\n" +
    "Take one down and pass it around, " +
    "98 bottles of beer on the wall.\n" +
    "98 bottles of beer on the wall, " +
    "98 bottles of beer.\n" +
    "Take one down and pass it around, " +
    "97 bottles of beer on the wall.\n"
  assert.equal(expected, new Bottles().verses(99, 98));
});

test('a couple more verses', function () {
  var expected = "2 bottles of beer on the wall, " +
    "2 bottles of beer.\n" +
    "Take one down and pass it around, " +
    "1 bottle of beer on the wall.\n" +
    "1 bottle of beer on the wall, " +
    "1 bottle of beer.\n" +
    "Take it down and pass it around, " +
    "no more bottles of beer on the wall.\n" +
    "No more bottles of beer on the wall, " +
    "no more bottles of beer.\n" +
    "Go to the store and buy some more, " +
    "99 bottles of beer on the wall.\n"
  assert.equal(expected, new Bottles().verses(2, 0));
});
