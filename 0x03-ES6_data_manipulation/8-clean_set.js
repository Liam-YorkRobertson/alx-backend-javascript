export default function cleanSet(inputSet, startStr) {
  if (typeof startStr !== 'string' || startStr === '') {
    return '';
  }

  const resultStrings = Array.from(inputSet)
    .filter((value) => typeof value === 'string' && value.startsWith(startStr))
    .map((value) => value.slice(startStr.length));

  return resultStrings.join('-');
}
