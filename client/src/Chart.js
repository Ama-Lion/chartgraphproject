import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

export default function Chart() {
  const [chartData, setChartData] = useState();
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const response = await fetch("http://127.0.0.1:8000/");
    const data = await response.json();
    setChartData(data);
  };
  console.log(chartData);
  return (
    <div style={{ width: 800, height: 400 }}>
      <Line
        data={{
          labels: [
            1,
            2,
            3,
            4,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            18,
            19,
            20,
            21,
            22,
            23,
            24,
            25,
          ],
          datasets: [
            {
              data: "e",
              label: "CAC4O",
              borderColor: "orange",
              fill: true,
            },
            {
              data: "e",
              label: "NASDAQ",
              borderColor: "blue",
              backgroundColor: "rgba(255, 0, 0, 0.5)",
              fill: true,
            },
          ],
        }}
      />
    </div>
  );
}
