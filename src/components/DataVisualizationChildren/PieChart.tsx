import React from 'react';
import Chart, {Pie, Doughnut} from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';


const bytes = require('bytes');
 
type props ={
  data:{}
}

interface state{
  pieData : {}
}
export class PieChart extends React.Component<props, state>{
  constructor(props: props){
    super(props)
    this.state = {
      pieData:[]
    }
  }

  render(){


// console.log(colorArray)
// console.log(this.state.pieData)
    return(
      <div className='chart'> 
        <Doughnut 
        data={this.props.data}
        plugins={[ChartDataLabels]}
        options={{
          legend: {
            position: 'left',
            labels:{
              fontColor: '#E4E7EB',
              fontSize: 16,
              fontFamily: 'Montserrat'
            }
          },
          plugins: {
            // Change options for ALL labels of THIS CHART
            datalabels: {
              formatter:function(value:any){
                return value+' kB'
              },
              color: '#E4E7EB',
            }
        }
        }} 
        />
      </div>
    )
  }
}

export default PieChart;