export const shuffle = (array: string[]): string[] => {
  const deepCopy: string[] = [...array];
  const newArray: string[] = [];
  let n: number = deepCopy.length;
  let i: number;

  // While there remain elements to shuffle…
  while (n) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * n--);

    // And move it to the new array.
    newArray.push(deepCopy.splice(i, 1)[0]);
  }

  return newArray;
};
