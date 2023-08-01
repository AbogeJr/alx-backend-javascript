export default function hasValuesFromArray(set, array) {
  let flag = true;

  array.map((item) => {
    if (set.has(item) === false) {
      flag = false;
    }
    return flag;
  });

  return flag;
}
