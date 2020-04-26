// Refactor the function below using arrow syntax. Line 9 should
// still log the same sentence.

const template = 'I VERB NOUN.';

// function sentence(verb, noun) {
//   return template
//     .replace('VERB', verb)
//     .replace('NOUN', noun)
// }

let sentence = (verb, noun) => template
    .replace('VERB', verb)
    .replace('NOUN', noun)

console.log(sentence('like', 'birds'));
// logs: I like birds.

// LS explanation:
// If the function body contains only one statement, the return keyword
// can be omitted. Note that it's the number of statements that counts,
// not the number of lines. In our case, we have one statement spreading
// over several lines.