export default function hasValuesFromArray(set, array) {
  const allValuesExist = array.every((value) => set.has(value));
  return allValuesExist;
}
