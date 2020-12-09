import React from 'react';
import Chart, { Pie, Doughnut } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';


const bytes = require('bytes');

type props = {
  data: {}
}

interface state {
  pieData: {}
}
export class PieChart extends React.Component<props, state>{
  constructor(props: props) {
    super(props)
    this.state = {
      pieData: []
    }
  }

  render() {


    // console.log(colorArray)
    // console.log(this.state.pieData)
    return (
      <div className='piechart-container'>
        <h3>Database Size by Table</h3>
        <Doughnut
          height={100}
          data={this.props.data}
          plugins={[ChartDataLabels]}
          options={{
            legend: {
              maintainAspectRatio: false,
              responsive: true,
              position: 'left',
              labels: {
                fontColor: '#f5f7fa',
                fontSize: 12,
                fontFamily: 'Montserrat'
              }
            },
            plugins: {
              // Change options for ALL labels of THIS CHART
              datalabels: {
                formatter: function (value: any) {
                  return value + ' kB'
                },
                color: '#f5f7fa',
              }
            }
          }}
        />
      </div>
    )
  }
}

export default PieChart;