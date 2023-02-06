"use strict";
const splitTheString = (value) => {
    return value.split('');
};
const reverseTheString = (value) => {
    return value.reverse();
};
const joinTheString = (value) => {
    return value.join('');
};
const isPalindrom = (value) => {
    value = value.replace(/\s+/g, '');
    const splitString = splitTheString(value);
    const reversedString = reverseTheString(splitString);
    const joinedString = joinTheString(reversedString);
    const result = joinedString === value;
    return result;
};
const isPalindromSimple = (value) => {
    value = value.replace(/\s+/g, '');
    return value.split('').reverse().join('') === value;
};
const answer = isPalindrom("boat");
const simpleAnswer = isPalindromSimple("boat");
console.log(answer);
console.log(simpleAnswer);
