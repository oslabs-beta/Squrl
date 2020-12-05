import React, {useState, useEffect} from 'react'
import PieChart from '../components/DataVisualizationChildren/PieChart'
import DataVisualizationPanel from '../components/DataVisualizationChildren/DataVisualizationPanel'
import axios from 'axios'
import  Chart  from '../components/Charts/PieChart'

const bytes = require('bytes');
type props ={
  dataValue: {}
}
const DataVisualization: React.FC = () => {
  const [input, setInput] = useState<string>('')
  // const [labels, setLabels] = useState<string[]>([])
  // const [data, setData] = useState<any>([])
  

  // const clicked = () =>{
  //   axios.get('http://localhost:30000/api')
  //   .then((data:any)=>{
  //     console.log(data.data)
  //     const resArray = data.data;
  //     //[people,vessels,film,...]
  //     const tableNameArr = resArray.map((el:any)=>{
  //       return el.table_name;
  //     })
  //     const tableArr = resArray.map((el:any)=>{
  //       let elArr = el.full_size.toUpperCase().split(' ');
  //       return bytes(elArr.join(''))/1024
  //     })
  //     setLabels([...tableNameArr]);
  //     setData([...tableArr])
  //     console.log(tableArr,tableNameArr)
  //   })
  // }
  // useEffect(() => {
  //   axios.get('http://localhost:30000/api')
  //   .then((data:any)=>{
  //     console.log(data.data)
  //     const resArray = data.data;
  //     //[people,vessels,film,...]
  //     const tableNameArr = resArray.map((el:any)=>{
  //       return el.table_name;
  //     })
  //     const tableArr = resArray.map((el:any)=>{
  //       let elArr = el.full_size.toUpperCase().split(' ');
  //       return bytes(elArr.join(''))/1024
  //     })
  //     setLabels([...tableNameArr]);
  //     setData([...tableArr])
  //     console.log(tableArr,tableNameArr)  
  //   })
  // },[])
  const changeDB = () =>{
    axios.post('http://localhost:30000/api',{input})
    .then((data:any)=>console.log(data))
  }
  const updateDB = (e:any) => {
    setInput(e.target.value)
  }
  return (
    <div>
    <div className='dataVisualization'>
      <DataVisualizationPanel />
      <PieChart />
    </div>
    <div className='dataViz'>
      <h1>dataViz</h1>
      <input type="text" name="" id="" value={input} onChange={updateDB}/>
      <button onClick={changeDB}>Change Database</button>
      {/* <button onClick={clicked}>Button</button> */}
      <h1>All Data are shown as (kB) </h1>
      {/* {clicked()} */}

      <Chart/>
    </div>
    </div>
  )
}

export default DataVisualization;

