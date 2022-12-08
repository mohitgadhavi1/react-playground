import { data } from "./config/data";
import { useState } from "react";
import PieChart from "./graphs/PieChart";
import LineChart from "graphs/Linechart";

const decData = {
  labels: ["Red", "Orange", "Blue"],
  // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
  datasets: [
    {
      label: "Popularity of colours",
      data: [55, 23, 96],
      // you can set indiviual colors for each bar
      backgroundColor: [
        "rgba(255, 255, 255, 0.6)",
        "rgba(255, 255, 255, 0.6)",
        "rgba(255, 255, 255, 0.6)",
      ],
      borderWidth: 1,
    },
  ],
};

function App() {
  const [chartData, setChartData] = useState({
    labels: data.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained ",
        data: data.map((data) => data.userGain),
        fill: true,
        backgroundColor: ["#50AF95", "#ecf0f1", "#f3ba2f", "#2a71d0"],
        borderColor: "rgb(75, 192, 192)",
        borderWidth: 3,
        tension: 0.1,
      },
    ],
  });

  return (
    <div className="App">
      {/* <Line
        datasetIdKey="id"
        data={{
          labels: ["Jun", "Jul", "Aug"],
          datasets: [
            {
              id: 1,
              label: "",
              data: [5, 6, 7],
            },
            {
              id: 2,
              label: "",
              data: [3, 2, 1],
            },
          ],
        }}
      /> */}
      <LineChart chartData={chartData} />
      <PieChart chartData={chartData} />
    </div>
  );
}

export default App;
