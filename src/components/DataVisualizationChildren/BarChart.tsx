import React from 'react';
import randomColor from 'randomcolor'; // import the script
import { Bar, HorizontalBar } from 'react-chartjs-2'
import ChartDataLabels from 'chartjs-plugin-datalabels';


type props = {
  data: {}
}

export class BarChart extends React.Component<props> {
  constructor(props: props) {
    super(props)
  }

  render() {
    console.log(this.props.data)
    return (
      <div className='barchart-container'>
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
                    scaleLabel: {
                      display: true,
                      labelString: "Percent Used",
                      fontSize: 24,
                      fontColor: '#E4E7EB'
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
