import React from 'react';
import {Pie} from 'react-chartjs-2';
import randomColor from 'randomcolor'; // import the script


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
  
  // }
  render(){


// console.log(colorArray)
// console.log(this.state.pieData)
    return(
      <div className='chart'> 
        <Pie data={this.props.data} />
      </div>
    )
  }
}

export default PieChart;