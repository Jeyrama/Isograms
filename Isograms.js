/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
Implement a function that determines whether a string that contains only letters is an isogram. 
Assume the empty string is an isogram. Ignore letter case.
*/


// Solution

function isIsogram(str) {
  return new Set(str.toUpperCase()).size == str.length;
}

// or

function isIsogram(str) {
  return !/(\w).*\1/i.test(str)
}