import React from 'react'
import{motion} from 'framer-motion'
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'


const SalesTrend = () => { 
    const salesData = [
        { month: "Jan", sales: 4000 },
        { month: "Feb", sales: 3000 },
        { month: "Mar", sales: 2000 },
        { month: "Apr", sales: 3500 },
        { month: "May", sales: 4000 },
        { month: "Jun", sales: 6000 },
    ]; 
  return (
    <motion.div className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700' initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.2}}>
       <h1 className='font-semibold text-lg mb-4'>Sales Overview</h1>
       <div style={{width:"100%",height:300}} >
      <ResponsiveContainer>
        <LineChart data={salesData}>
           <CartesianGrid strokeDasharray='3 3' stroke='#4B5563'/>
           <XAxis dataKey='month' stroke="#9CA3AF"/>
           <YAxis stroke="#9CA3AF"/>
           <Tooltip
							contentStyle={{
								backgroundColor: "rgba(31, 41, 55, 0.8)",
								borderColor: "#4B5563",
							}}
							itemStyle={{ color: "#E5E7EB" }}
						/>
						<Line
							type="natural"
							dataKey='sales'
							stroke='#6366F1'
							strokeWidth={3}
							dot={{ fill: "#6366F1", strokeWidth: 2, r: 4 }}
							activeDot={{ r: 6, strokeWidth: 2 }}
						/>
        </LineChart>
     </ResponsiveContainer>
       </div>
    </motion.div>
  )
}

export default SalesTrend



