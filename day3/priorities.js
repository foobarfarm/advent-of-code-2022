let priorities = {};

for (let i = 0; i < 26; i++) {
  const upperCaseCharacter = String.fromCharCode(65 + i);
  const lowerCaseCharacter = String.fromCharCode(97 + i);

  priorities[lowerCaseCharacter] = i + 1;
  priorities[upperCaseCharacter] = i + 26 + 1;
}

module.exports = priorities;
