import React, {useState, useEffect} from 'react';
import {Pie} from 'react-chartjs-2'
import axios from 'axios';
const bytes = require('bytes')
const randomColor = require('randomcolor');
// const data = {
// 	labels: [
// 		'Red',
// 		'Blue',
//     'Yellow',
//     'cow'
// 	],
// 	datasets: [{
// 		data: [300, 50, 100,1010],
// 		backgroundColor: [
// 		'#FF6384',
// 		'#36A2EB',
// 		'#FFCE56',
// 		'#cFC56a'
// 		],
// 		hoverBackgroundColor: [
// 		'#FF6384',
// 		'#36A2EB',
//     '#FFCE56',
//     '#cFC56a'
// 		]
// 	}]
// };

// type labelType = string[];
// type dataSetType = any[]
// type dataType = {
//   labels: labelType,
//   dataSetType:dataSetType
// }
type props={
	titleArray: string[],
	sizeArray: number[]
}
type item = any
const Chart: React.FC<item> = (dataValue) => {
  // console.log("these are the data: ",titleArray, sizeArray)
  // const [labels, setLabels] = useState<string[]>([])
  // const [data, setData] = useState<any>([])
  // const [data, setData] = useState<any>({})

  // useEffect(()=>{
  //   axios.get('http://localhost:30000/api')
  //   .then((data:any)=>{
  //     console.log(data.data)
  //     const resArray = data.data;

  //     const tableNameArr = resArray.map((el:any)=>{
  //       return el.table_name;
  //     })
  //     const tableArr = resArray.map((el:any)=>{
  //       let elArr = el.full_size.toUpperCase().split(' ');
  //       return bytes(elArr.join(''))/1024
  //     })
  //     let color = randomColor({
  //       count:tableNameArr.length,
  //       hue: 'random'
  //     })
  //     let tempData = {
  //       labels:tableNameArr,
  //       datasets:[{
  //         data: tableArr,
  //         backgroundColor:color,
  //         hoverBackgroundColor:color
  //       }
  //     ]}
  //     setData({...tempData})
  //     console.log(tableArr,tableNameArr)
  //     console.log('temp ',tempData)
  //   })
  // })
  console.log(dataValue)
	return(
		<div className='chart'>
			Chart:
			<Pie data={dataValue}/>
		</div>
	)
}

export default Chart