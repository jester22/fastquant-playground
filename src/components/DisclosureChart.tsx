import React from 'react';
import Plot, { PlotParams } from 'react-plotly.js';

const DisclosureChart = ({ layout }: Pick<PlotParams, 'layout'>) => {
  return (
    <Plot
      data={[
        {
          x: [1, 2, 3],
          y: [2, 6, 3],
          type: 'scatter',
          mode: 'lines+markers',
          marker: { color: 'red' },
        },
        { type: 'bar', x: [1, 2, 3], y: [2, 5, 3] },
      ]}
      layout={layout}
    />
  );
};

export default DisclosureChart;
