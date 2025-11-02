import React, { useEffect, useState } from 'react'
import { prepareIncomeBarChartData } from '../../utils/helper'
import { LuPlus } from 'react-icons/lu'
import CustomBarChart from '../Charts/CustomBarChart'

const IncomeOverview = ({transactions, onAddIncome}) => {
  const [chartData, setChartData] = useState([])

  useEffect(() => {
    //if (!transactions || !Array.isArray(transactions)) return;
    const result = prepareIncomeBarChartData(transactions)
    setChartData(result)

  }, [transactions])
  
  return (
    <div className='card'>
      <div className='flex items-center justify-between'>
        <div className=''>
            <h5 className='text-lg'>Monthly Income Overview</h5>
            <p className='text-s text-gray-400 mt-0.5'>
                Track your earnings over time and analyze your monthly Income trends.
            </p>
        </div>

        <button className='add-btn' onClick={onAddIncome}>
              <LuPlus className='text-lg' />
              Add Income
        </button>
      </div>

      <div className="mt-10">
        <CustomBarChart data={chartData} />
      </div>
    </div>

   
  )
}

export default IncomeOverview