export default function cleanSet(set, startString) {
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }

  const part = [];
  set.forEach((word) => {
    if (word.startsWith(startString)) {
      const endWith = word.substring(startString.length);
      part.push(endWith);
    }
  });
  return (part.join('-'));
}
