import React from 'react';
import { HorizontalBar } from 'react-chartjs-2'
import ChartDataLabels from 'chartjs-plugin-datalabels';


type props = {
  data: {}
}

export class BarChart extends React.Component<props> {
  constructor(props: props) {
    super(props)
  }

  render() {
    return (
      <div className='barchart-container'>
        <h3>Index Usage by Table</h3>
        {
          Object.keys(this.props.data).length !== 0
            ?
            <HorizontalBar
              data={this.props.data}
              width={500}
              height={75}
              plugins={[ChartDataLabels]}
              options={{
                maintainAspectRatio: false,
                responsive: true,
                legend: {
                  position: 'left',
                  display: false,
                  labels: {
                    fontColor: '#f5f7fa',
                  }
                },
                scales: {
                  yAxes: [{
                    ticks: {
                      font: "Montserrat",
                      fontColor: "#f5f7fa",
                      fontSize: 12,
                      stepSize: 1,
                      beginAtZero: true
                    },
                    gridLines: {
                      display: false,
                      color: "#646e7c"
                    }
                  }],
                  xAxes: [{
                    ticks: {
                      fontColor: "#f5f7fa",
                      fontSize: 12,
                      stepSize: 1,
                      beginAtZero: true
                    },
                    gridLines: {
                      display: false,
                      color: "#646e7c"
                    }
                  }],
                }
              }}
            />
            :
            null
        }
      </div>
    )
  }
}

export default BarChart;
