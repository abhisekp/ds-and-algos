export const comparator = (a: string | number, b: string | number) => {
  if (typeof a === 'string' || typeof b === 'string') {
    return (String(a).codePointAt(0) ?? 0) - (String(b).codePointAt(0) ?? 0);
  }
  return a - b;
}
