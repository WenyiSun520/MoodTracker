import React from "react";
import * as V from "victory";
import {VictoryLine, VictoryChart, VictoryTheme, VictoryAxis} from "victory";
// sample data
const data = [
  { date: 1, moodValue: 50 },
  { date: 2, moodValue: 12 },
  { date: 3, moodValue: 24 },
  { date: 4, moodValue: 11 },
  { date: 5, moodValue: 2 },
  { date: 6, moodValue: 5 },  
  { date: 7, moodValue: 68 },
  { date: 8, moodValue: 70 },

];

export default function MoodChart(props) {
    return (
      <div className="greetingBox">
        <VictoryChart
          maxDomain={20}
          theme={VictoryTheme.material}
          viewBox={"0 0 width, height"}
        >
          <VictoryLine
            data={data}
            // data accessor for x values
            x="date"
            // data accessor for y values
            y="moodValue"
          />
        </VictoryChart>
      </div>
    );
}


