const unidecode = require('unidecode');

function removeDiacriticsAndSpaces(inputString) {
  const withoutDiacritics = unidecode(inputString);
  const withoutSpaces = withoutDiacritics.replace(/\s+/g, '');
  return withoutSpaces;
}

module.exports = removeDiacriticsAndSpaces;
