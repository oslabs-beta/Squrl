import React from 'react';
import {Pie} from 'react-chartjs-2';
import axios from 'axios'
import randomColor from 'randomcolor'; // import the script

const bytes = require('bytes');

type props ={
//  labels : string[],
//  data : number[], 
//  color: string[]
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
  // componentDidMount(){
  //   axios.get('http://localhost:30000/api')
  //   .then((data:any)=>{
  //     console.log(this.props)
  //     const resArray = data.data;
  //     //[people,vessels,film,...]
  //     const tableNameArr = resArray.map((el:any)=>{
  //       return el.table_name;
  //     })
  //     const tableArr = resArray.map((el:any)=>{
  //       let elArr = el.full_size.toUpperCase().split(' ');
  //       return bytes(elArr.join(''))/1024
  //     }) 
  //     // console.log('componentDidMount: ',tableArr, tableNameArr)
  //     let colorArray = randomColor({
  //       count: tableNameArr.length,
  //       hue: 'random'
  //     })
  //     this.setState({
  //       ...this.state,
  //       pieData:{
  //         labels: tableNameArr,
  //         datasets:[{
  //           label: 'My Data',
  //           data: tableArr,
  //           backgroundColor: colorArray,
  //           hoverBackgroundColor: colorArray
  //         }]
  //       }
  //     })
  //   })
  // }
  render(){
  //   console.log('labels: ', this.props.labels)
  //   console.log('labels: ', this.props.data)
  //   let testerDataNames = ['red', 'blue', 'green', 'purple', 'orange']

  //   let testerDataNums = [1,2,3,4,5]

 
  // const data: any = {
  //   labels: this.props.labels,
  //   datasets: [{
  //     label: 'My Data',
  //     data: this.props.data,
  //     backgroundColor: this.props.color,
  //     hoverBackgroundColor: this.props.color
  //   }]
  // };

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