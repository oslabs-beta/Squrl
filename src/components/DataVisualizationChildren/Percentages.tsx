import React, {useState, useEffect} from 'react'
import {Pie} from 'react-chartjs-2';
import axios from 'axios'



type props ={
  data: any
  indexHit: any
}

const Percentages: React.FC<props> = ({data, indexHit}) => {
  // const [percentages, setPercentages] = useState<number>(0)

const createCacheRatioPercent = () => {
  return (
    <div>
      <h1>Cache Hit Ratio:  {(data[0]["ratio"] * 100).toFixed(2)} %</h1> 
    </div>
  )
}

const createIndexHitRatio = () => {
  return (
    <div>
      <h1>Index Hit Ratio:  {(indexHit[0]["ratio"] * 100).toFixed(2)} %</h1>
    </div>
  )
}

return (
  <div className="chart">
      {data[0] === undefined ? null : createCacheRatioPercent() }
      {indexHit[0] === undefined ? null : createIndexHitRatio()}
  </div>  
)
}

export default Percentages
