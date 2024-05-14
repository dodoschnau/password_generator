function singlePassword(collection) {
  let randomIndex = Math.floor(Math.random() * collection.length);
  return collection[randomIndex];
}

function generatePassword(data) {
  const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseLetters = lowerCaseLetters.toUpperCase();
  const numbers = "1234567890";
  const symbols = '`~!@#$%^&*()-_+={}[]|;":,.<>/?';

  let collection = [];

  // according to user's choice & from input name's value
  if (data.lowercase === "on") {
    collection = collection.concat(lowerCaseLetters.split(""));
  }

  if (data.uppercase === "on") {
    collection = collection.concat(upperCaseLetters.split(""));
  }

  if (data.number === "on") {
    collection = collection.concat(numbers.split(""));
  }

  if (data.symbol === "on") {
    collection = collection.concat(symbols.split(""));
  }

  // remove excludeCharacters from collection
  if (data.excludeChar) {
    collection = collection.filter((charcter) => {
      return !data.excludeChar.includes(charcter);
    });
  }

  // if collection is empty, return error message
  if (collection.length === 0) {
    return "There is no valid characters in your selection.";
  }

  // generate password
  let password = ''
  for (let i = 1; i <= data.passwordLength; i++) {
    password += singlePassword(collection)
  }
  return password
}

module.exports = generatePassword

