export default function cleanSet(set, startString) {
 let result = '';

  for (const value of set) {
    if (value.startsWith(startString)) {
      const cleanedValue = value.substring(startString.length);
      result += cleanedValue + '-';
    }
  }

  if (result.endsWith('-')) {
    result = result.slice(0, -1);
  }

  return result;
}
