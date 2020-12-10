import React, { useState } from 'react'
import PieChart from '../components/DataVisualizationChildren/PieChart'
import DataVisualizationPanel from '../components/DataVisualizationChildren/DataVisualizationPanel'
//generates random colors that go well together
import randomColor from 'randomcolor';
import axios from 'axios'
//converts all data sizes to bytes
const bytes = require('bytes');
import Percentages from '../components/DataVisualizationChildren/Percentages'
import BarChart from '../components/DataVisualizationChildren/BarChart'


const DataVisualization: React.FC = () => {
  const [input, setInput] = useState<string>('')
  const [sizeData, setSizeData] = useState<{}>({})
  const [cacheData, setCacheData] = useState<{}[]>([])
  const [indexHitRate, setIndexHitRate] = useState<{}[]>([])
  const [indexUsage, setIndexUsage] = useState<{}>({})


//gets invoked when you invoke changeDB and it gets data for pie chart
  const clicked = () => {
    axios.get('http://localhost:30000/api')
      .then((data: any) => {

        const resArray = data.data;
        const tableNameArr = resArray.map((el: any) => {
          return el.table_name;
        })
        const tableArr = resArray.map((el: any) => {
          let elArr = el.full_size.toUpperCase().split(' ');
          return bytes(elArr.join('')) / 1024
        })
        let colorArray = randomColor({
          count: tableNameArr.length,
          hue: 'blue',
          luminosity: 'dark'
        })
        const dataset: any = {
          labels: [...tableNameArr],
          datasets: [{
            label: 'My Data',
            data: [...tableArr],
            backgroundColor: [...colorArray],
            hoverBackgroundColor: [...colorArray]
          }],
        };
        setSizeData(({ ...dataset }))
      })
  }

// next three functions get invoked after ChangeDB function 
  //next two functions  do fetch requests that have queries 
  //that return the correct object from pg stats
  const getCache = () => {
    axios.get('http://localhost:30000/api/cache')
      .then((data: any) => {
        setCacheData(([...data.data]))
      })
  }

  const getIndexHitRate = () => {
    axios.get('http://localhost:30000/api/indexHitRate')
      .then((data: any) => {
        setIndexHitRate(([...data.data]))
      })
  }

  //does fetch with a query to get index usage and then creates object that matches
  //the object that bar chart needs to run
  const getIndexUsage = () => {
    axios.get('http://localhost:30000/api/indexUsage')
      .then((data: any) => {
        let relName = []
        let indexUsed = []
        for (let i = 0; i < data.data.length; i++) {
          relName.push(data.data[i].relname)
          indexUsed.push(+data.data[i].percent_of_times_index_used)
        }
        const barChartData = {
          labels: relName, datasets: [{
            label: "Index Ratio", data: indexUsed, backgroundColor: randomColor({
              count: indexUsed.length, hue: 'blue'
            })
          }]
        }
        setIndexUsage(({ ...barChartData }))
      })
  }

//this function gets invoked on connect to db button. does fetch request for the database but also invokes helper functions
  const changeDB = () => {
    axios.post('http://localhost:30000/api', { input })
      .then((data: any) => {
        clicked();
        getCache();
        getIndexHitRate();
        getIndexUsage();
      })
  }
  //updates the input field for you to connect to db. doesnt
  // this do the same as changeDB?. i dont think this is being used
  const updateDB = (e: any) => {
    setInput(e.target.value)
  }

  return (
    <div className="data-viz-container">
      <div className='data-viz-panel'>
        <DataVisualizationPanel
          input={input}
          setInput={setInput}
          updateDB={updateDB}
          changeDB={changeDB}
        />
      </div>
      <div className='data-viz-dash-wrapper'>
        <div className="data-viz-dash">
          <div className='piechart'>
            <PieChart data={sizeData} />
          </div>
          <div className='percentages'>
            <Percentages indexHit={indexHitRate} data={cacheData} />
          </div>
          <div className='barchart'>
            <BarChart data={indexUsage} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default DataVisualization;


