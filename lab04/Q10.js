function countWords(sentence) {
    let words = sentence.split(" ");

    return words.length;
}
console.log(countWords("JavaScript is fun"));
console.log(countWords("I love coding"));