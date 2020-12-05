import React from 'react'
import PieChart from '../components/DataVisualizationChildren/PieChart'
import DataVisualizationPanel from '../components/DataVisualizationChildren/DataVisualizationPanel'

const DataVisualization: React.FC = () => {
  return (
    <div className='dataVisualization'>
      <DataVisualizationPanel />
      <PieChart />
    </div>
  )
}

export default DataVisualization;