// import { Chart } from "chart.js";
import { run } from "./app/app";
import { PickService } from "./app/pick.service";
// import { config, ctx } from "./app/wheel.service";

// const chart = new Chart(ctx, config);
// console.log(chart);

const pickServ: PickService = new PickService();
run(pickServ);
