const words = [
    "fox",
    "wolf",
    "snake",
    "crocodile",
    "lion",
    "cat",
    "crocodile",
    "horse"
]

const forbiddenWord = "crocodile"
const minLength = 4

const filterWords = (words, forbiddenWord, minLength) => {
    const result = words.filter((word) => {
        if (word !== forbiddenWord && word.length >= minLength) {
            return true
        }
        return false;
    })
    return result
}

const filterWords2 = (words, forbiddenWordminLength) => words.filter((word) =>
    word !== forbiddenWord && word.length >= minLength)

console.log(filterWords(words, forbiddenWord, minLength))
console.log(filterWords2(words,forbiddenWord,minLength))

const years = [1990,2000,2004,2010,1975,1988,2001,2024]

const year=2025;
const ages=years.map(y=>year-y);

const minAge=ages.filter(age=>age>18)

console.log(minAge);