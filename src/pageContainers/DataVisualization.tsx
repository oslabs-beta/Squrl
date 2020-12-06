import PieChart from '../components/DataVisualizationChildren/PieChart'
import DataVisualizationPanel from '../components/DataVisualizationChildren/DataVisualizationPanel'
import React, {useState} from 'react'
import { ipcRenderer } from 'electron'
import axios from 'axios'

const DataVisualization: React.FC = () => {
  const [input, setInput] = useState<string>('')
  const clicked = () =>{
    axios.get('http://localhost:30000/api')
    .then((data:any)=>console.log(data))
  }
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
      <button onClick={clicked}>Button</button>
    </div>
    </div>
  )
}
export default DataVisualization;



