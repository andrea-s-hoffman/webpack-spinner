import { randomStudent } from "../utils/randomStudents";
import { PickService } from "./pick.service";

export const run = (pickServ: PickService): void => {
  pickServ.onClick(() => {
    const whoIsNext: string = randomStudent(pickServ.students);
    pickServ.whoseIt.textContent = whoIsNext;
  });
};
