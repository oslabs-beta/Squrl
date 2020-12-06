import React from 'react';
import {Pie} from 'react-chartjs-2';
import randomColor from 'randomcolor'; // import the script

export class PieChart extends React.Component{
  render(){
    let testerDataNames = ['red', 'blue', 'green', 'purple', 'orange']
    let testLength = testerDataNames.length

    let testerDataNums = [1,2,3,4,5]

  let colorArray = randomColor({
    count: testLength,
    hue: 'random'
  })
 
  const data: any = {
    labels: testerDataNames,
    datasets: [{
      label: 'My Data',
      data: testerDataNums,
      backgroundColor: colorArray,
      hoverBackgroundColor: colorArray
    }]
  };

console.log(colorArray)
console.log(data)
    return(
      <div className='chart'>
        <Pie data={data} />
      </div>
    )
  }
}

export default PieChart;