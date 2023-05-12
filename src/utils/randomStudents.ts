import { shuffle } from "./fisherYates";

export const randomStudent = (students: string[]): string => {
  if (students?.length > 0) {
    const randomIndex: number = Math.floor(Math.random() * students.length);
    return students[randomIndex];
  } else {
    return "nope";
  }
};
