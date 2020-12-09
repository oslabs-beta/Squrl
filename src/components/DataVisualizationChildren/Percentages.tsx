import React, { useState, useEffect } from 'react'
import Progress from './ProgressBar'


type props = {
  data: any
  indexHit: any
}

const Percentages: React.FC<props> = ({ data, indexHit }) => {
  // const [percentages, setPercentages] = useState<number>(0)

  const createCacheRatioPercent = () => {
    let newCacheHit = (data[0]["ratio"] * 100).toFixed(2)
    return (
      <div>
        <h2>Cache Hit Ratio: </h2>
        <Progress done={newCacheHit} />
      </div>
    )
  }

  const createIndexHitRatio = () => {
    let newIndexHit = (indexHit[0]["ratio"] * 100).toFixed(2)
    return (
      <div>
        <h2>Index Hit Ratio: </h2>
        <Progress done={newIndexHit} />
      </div>
    )
  }

  return (
    <div className="percentage-container">
      <div className='cache-ratio-container'>
        {data[0] === undefined ? null : createCacheRatioPercent()}
      </div>
      <div className="index-ratio-container">
        {indexHit[0] === undefined ? null : createIndexHitRatio()}
      </div>
    </div>
  )
}

export default Percentages
