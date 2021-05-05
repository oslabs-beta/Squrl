import React, { useState, useEffect } from 'react'
import Progress from './ProgressBar'

//typescript props
type props = {
  data: any
  indexHit: any
}

const Percentages: React.FC<props> = ({ data, indexHit }) => {
  // const [percentages, setPercentages] = useState<number>(0)
  const createCacheRatioPercent = () => {
    // data is an array of objects being passed down. 
    //this gives us a percentage for the cache hit
    let newCacheHit = (data[0]["ratio"] * 100).toFixed(2)
    return (
      <div>
        <h2>Cache Hit Ratio: </h2>
        {/* progress will give us the progress bar */}
        <Progress done={newCacheHit} />
      </div>
    )
  }

//same as cache hit but for index hit ratio
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
        {/* if data is undefined dont run these functions otherwise itll return an error */}
        {data[0] === undefined ? null : createCacheRatioPercent()}
      </div>
      <div className="index-ratio-container">
        {indexHit[0] === undefined ? null : createIndexHitRatio()}
      </div>
    </div>
  )
}

export default Percentages
