import React, { useState, useEffect } from 'react'
import PieChart from '../components/DataVisualizationChildren/PieChart'
import DataVisualizationPanel from '../components/DataVisualizationChildren/DataVisualizationPanel'
import randomColor from 'randomcolor';
import axios from 'axios'
import { Pie } from 'react-chartjs-2';
const bytes = require('bytes');
import Percentages from '../components/DataVisualizationChildren/Percentages'
import BarChart from '../components/DataVisualizationChildren/BarChart'

type props = {
  dataValue: {}
}
const DataVisualization: React.FC = () => {
  const [input, setInput] = useState<string>('')
  const [sizeData, setSizeData] = useState<{}>({})
  const [cacheData, setCacheData] = useState<{}[]>([])
  const [indexHitRate, setIndexHitRate] = useState<{}[]>([])
  const [indexUsage, setIndexUsage] = useState<{}>({})



  const clicked = () => {
    axios.get('http://localhost:30000/api')
      .then((data: any) => {
        // console.log(data.data)
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
          hue: 'blue'
        })
        const dataset: any = {
          labels: [...tableNameArr],
          datasets: [{
            label: 'My Data',
            data: [...tableArr],
            backgroundColor: [...colorArray],
            hoverBackgroundColor: [...colorArray]
          }],
          options: {
            plugins: {
              legend: {
                position: "bottom"
              }
            }
          }
        };
        setSizeData(({ ...dataset }))
      })
  }

  const getCache = () => {
    axios.get('http://localhost:30000/api/cache')
      .then((data: any) => {
        console.log('data.data', data.data)
        setCacheData(([...data.data]))
        console.log('cachedata', cacheData)
      })
  }

  const getIndexHitRate = () => {
    axios.get('http://localhost:30000/api/indexHitRate')
      .then((data: any) => {
        console.log('indexhitrate', data.data)
        setIndexHitRate(([...data.data]))
        console.log('indexHitRate', indexHitRate)
      })
  }

  const getIndexUsage = () => {
    axios.get('http://localhost:30000/api/indexUsage')
      .then((data: any) => {
        console.log('indexhitrate data.data', data.data)
        // setIndexUsage(([...data.data]))
        let relName = []
        let indexUsed = []
        for (let i = 0; i < data.data.length; i++) {
          relName.push(data.data[i].relname)
          indexUsed.push(+data.data[i].percent_of_times_index_used)
        }
        console.log('1', relName)
        console.log('2', indexUsed)

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

  const changeDB = () => {
    axios.post('http://localhost:30000/api', { input })
      .then((data: any) => {
        clicked();
        getCache();
        getIndexHitRate();
        getIndexUsage();
      })
  }
  const updateDB = (e: any) => {
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
          <PieChart data={sizeData} />
        </div>
        <div>
          <BarChart data={indexUsage} />
        </div>
        <div>
          <Percentages indexHit={indexHitRate} data={cacheData} />
        </div>
      </div>
    </div>
  )
}
export default DataVisualization;


