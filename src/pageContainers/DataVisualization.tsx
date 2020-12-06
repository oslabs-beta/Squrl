import React, {useState, useEffect} from 'react'
import PieChart from '../components/DataVisualizationChildren/PieChart'
import DataVisualizationPanel from '../components/DataVisualizationChildren/DataVisualizationPanel'
import randomColor from 'randomcolor';
import axios from 'axios'
import { Pie } from 'react-chartjs-2';
const bytes = require('bytes');
import Percentages from '../components/DataVisualizationChildren/Percentages'

type props ={
  dataValue: {}
}
const DataVisualization: React.FC = () => {
  const [input, setInput] = useState<string>('')
  const [sizeData, setSizeData] = useState<{}>({})
  const [cacheData, setCacheData] = useState<{}[]>([])
  
  

  const clicked = () =>{
    axios.get('http://localhost:30000/api')
    .then((data:any)=>{
      // console.log(data.data)
      const resArray = data.data;
      const tableNameArr = resArray.map((el:any)=>{
        return el.table_name;
      })
      const tableArr = resArray.map((el:any)=>{
        let elArr = el.full_size.toUpperCase().split(' ');
        return bytes(elArr.join(''))/1024
      })
      let colorArray = randomColor({
        count: tableNameArr.length,
        hue: 'random'
      })
      const dataset: any = {
        labels: [...tableNameArr],
        datasets: [{
          label: 'My Data',
          data: [...tableArr],
          backgroundColor: [...colorArray],
          hoverBackgroundColor: [...colorArray]
        }]
      };
      setSizeData(({...dataset}))
    })
  }

  const getCache = () =>{
    axios.get('http://localhost:30000/api/cache')
    .then((data:any)=> {
      console.log('data.data', data.data)
      setCacheData(([...data.data]))
      console.log('cachedata', cacheData)
    })
  }

  const changeDB = () =>{
    axios.post('http://localhost:30000/api',{input})
    .then((data:any)=>{
      clicked();
      getCache();
    })
  }
  const updateDB = (e:any) => {
    setInput(e.target.value)
  }

  return (
    <div>
      <div className='dataVisualization'>
      <DataVisualizationPanel 
      input={input} 
      setInput={setInput}  
      updateDB={updateDB}
      changeDB={changeDB}
       />
       <div>
         <PieChart data={sizeData}/>
        </div>
       <div>
         <Percentages data={cacheData} />
       </div>
    </div>
    </div>
  )
}
export default DataVisualization;


