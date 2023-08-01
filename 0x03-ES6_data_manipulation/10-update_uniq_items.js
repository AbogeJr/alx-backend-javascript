export default function updateUniqueItems(map) {
  if (map instanceof Map !== true) {
    throw Error('Cannot Process');
  }

  map.forEach((val, key) => {
    if (val === 1) {
      map.set(key, 100);
    }
  });

  return map;
}
