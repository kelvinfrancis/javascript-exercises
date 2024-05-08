const palindromes = function (word) {
    const alphanumeric = "abcdefghijklmnopqrstuvwxyz0123456789";

    const cleanWord = word
    .toLowerCase()
    .split('')
    .filter((character) => alphanumeric.includes(character))
    .join('');

    const reverseWord = cleanWord.split('').reverse().join('');
    return reverseWord === cleanWord;
};

// Do not edit below this line
module.exports = palindromes;
