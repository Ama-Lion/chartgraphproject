import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

export default class Chart extends React.Component {
  constructor() {
    super();
    this.state = {
      chartDataCAC: [],
      chartDataNAS: [],
      show: false,
    };
  }

  componentDidMount() {
    fetch("http://127.0.0.1:8000/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        data.map((d) => {
          this.state.chartDataCAC.push(d.stocks["CAC40"]);
          this.state.chartDataNAS.push(d.stocks["NASDAQ"]);
          this.state.show = true;
        });
        this.setState(this.state);
      });
  }

  render() {
    let chart = this.state.show ? (
      <Line
        type="line"
        data={{
          labels: [
            1,
            2,
            3,
            4,
            5,
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
              data: this.state.chartDataCAC,
              label: "CAC4O",
              borderColor: "blue",
              fill: false,
              lineTension: 0.1,
              pointRadius: 1,
            },
            {
              data: this.state.chartDataNAS,
              label: "NASDAQ",
              borderColor: "orange",
              backgroundColor: "rgba(255, 0, 0, 0.5)",
              fill: false,
              pointRadius: 1,
              lineTension: 0.1,
            },
          ],
        }}
      />
    ) : null;
    console.log(this.state.chartDataCAC);
    if (chart) {
      return (
        <div style={{ width: 800, height: 400, margin: "auto" }}>{chart}</div>
      );
    } else return null;
  }
}
