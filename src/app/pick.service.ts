export class PickService {
  students: string[] = ["Anyssa", "Erika", "Noelle", "Andrew", "Nick", "Troy"];
  pickBtn: HTMLElement | null;
  whoseIt: HTMLElement | null;
  constructor() {
    this.pickBtn = document.getElementById("spin");
    this.whoseIt = document.getElementById("who");
  }
  onClick(cbFn: () => void): void {
    this.pickBtn.addEventListener("click", cbFn);
  }
}
