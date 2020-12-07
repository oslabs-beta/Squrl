import React from 'react';
import randomColor from 'randomcolor'; // import the script
import {Bar} from 'react-chartjs-2'


type props ={
    data:{}
}

export class BarChart extends React.Component<props> {
  constructor(props: props) {
    super(props)
  }

  render(){
    return(
      <div className='bar'> 
        <Bar 
        data={this.props.data}
        width={500}
        height={50}
        options={{
         maintainAspectRatio: false
          }} />
      </div>
    )
  }
}

export default BarChart;
