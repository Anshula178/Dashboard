import React from 'react'
import{motion} from 'framer-motion'
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { salesData } from '../../config'

const SalesChart = () => {
    
  return (
    <motion.div className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700' initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.2}}>
       <h1 className='font-semibold text-lg mb-4'>Sales Overview</h1>
       <div className='h-80'>
     <ResponsiveContainer width={"100%"} height={"100%"}>
        <LineChart data={salesData}>
           <CartesianGrid strokeDasharray='3 3 ' stroke='#4B5563'/>
           <XAxis dataKey={"name"} stroke="#F59E0B"/>
           <YAxis stroke="#F59E0B"/>
           <Tooltip
							contentStyle={{
								backgroundColor: "rgba(31, 41, 55, 0.8)",
								borderColor: "#4B5563",
							}}
							itemStyle={{ color: "#E5E7EB" }}
						/>
						<Line
							type="step"
							dataKey='sales'
							stroke='#4B5563'
							strokeWidth={3}
							dot={{ fill: "#F59E0B", strokeWidth: 2, r: 6 }}
							activeDot={{ r: 8, strokeWidth: 2 }}
						/>
        </LineChart>
     </ResponsiveContainer>
       </div>
    </motion.div>
  )
}

export default SalesChart
