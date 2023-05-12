import { Chart, ChartConfiguration } from "chart.js";
import { ChartUtils } from "../utils/wheelUtils";

console.log(Chart);

const Utils = ChartUtils.init();

const DATA_COUNT = 7;
const NUMBER_CFG = { count: DATA_COUNT, min: -100, max: 100 };

const labels = Utils.months({ count: 7 });
const data = {
  labels,
  datasets: [
    {
      label: "Fully Rounded",
      data: Utils.numbers(NUMBER_CFG),
      borderColor: Utils.CHART_COLORS.red,
      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
      borderWidth: 2,
      borderRadius: Number.MAX_VALUE,
      borderSkipped: false,
    },
    {
      label: "Small Radius",
      data: Utils.numbers(NUMBER_CFG),
      borderColor: Utils.CHART_COLORS.blue,
      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
      borderWidth: 2,
      borderRadius: 5,
      borderSkipped: false,
    },
  ],
};

console.log(JSON.stringify(data, null, 2));

export const config: ChartConfiguration = {
  type: "bar",
  data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
  },
};

const canvas = <HTMLCanvasElement>document.getElementById("myChart");
export const ctx = canvas.getContext("2d");
