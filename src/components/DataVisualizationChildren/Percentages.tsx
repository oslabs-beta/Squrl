import React, {useState, useEffect} from 'react'
import {Pie} from 'react-chartjs-2';
import axios from 'axios'



type props ={
  data: any
}

const Percentages: React.FC<props> = ({data}) => {
  const [percentages, setPercentages] = useState<number>(0)

const createCacheRatioPercent = () => {
  return (
    <div>
      <h1>Cache Hit Ratio:  {data[0]["ratio"] * 100} %</h1> 
    </div>
  )
}

return (
  <div className="chart">
      {data[0] === undefined ? null : createCacheRatioPercent()}
  </div>  
)
}

export default Percentages


// AndyAndyAndyAndyAndyAndy
