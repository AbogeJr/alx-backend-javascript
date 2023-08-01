export default function setFromArray(arr) {
  const mySet = new Set();
  arr.map((item) => mySet.add(item));

  return mySet;
}
