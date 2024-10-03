import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts";

const DataChart = {
  yAxis: [
    {
      label: "Downloads",
    },
  ],
  width: 700,
  height: 300,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: "rotate(-90deg) translate(0px, -20px)",
    },
  },
};
const dataset = [
  {
    Invoice: 59,
    Proforma: 57,
    Challan: 86,
    month: "Jan",
  },
  {
    Invoice: 50,
    Proforma: 52,
    Challan: 78,
    month: "Feb",
  },
  {
    Invoice: 47,
    Proforma: 53,
    Challan: 106,
    month: "Mar",
  },
  {
    Invoice: 54,
    Proforma: 56,
    Challan: 92,
    month: "Apr",
  },
  {
    Invoice: 57,
    Proforma: 69,
    Challan: 92,
    month: "May",
  },
  {
    Invoice: 60,
    Proforma: 63,
    Challan: 103,
    month: "June",
  },
  {
    Invoice: 59,
    Proforma: 60,
    Challan: 105,
    month: "July",
  },
  {
    Invoice: 65,
    Proforma: 60,
    Challan: 106,
    month: "Aug",
  },
  {
    Invoice: 51,
    Proforma: 51,
    Challan: 95,
    month: "Sept",
  },
  {
    Invoice: 60,
    Proforma: 65,
    Challan: 97,
    month: "Oct",
  },
  {
    Invoice: 67,
    Proforma: 64,
    Challan: 76,
    month: "Nov",
  },
  {
    Invoice: 61,
    Proforma: 70,
    Challan: 103,
    month: "Dec",
  },
];

const valueFormatter = (value) => `${value}`;

export default function BarsDataset() {
  return (
    <BarChart
      dataset={dataset}
      xAxis={[{ scaleType: "band", dataKey: "month" }]}
      series={[
        { dataKey: "Invoice", label: "Invoice", valueFormatter },
        { dataKey: "Proforma", label: "Proforma", valueFormatter },
        { dataKey: "Challan", label: "Challan", valueFormatter },
      ]}
      {...DataChart}
    />
  );
}
