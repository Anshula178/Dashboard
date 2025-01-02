import React from 'react'
import { BarChart,Bar, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis, Cell } from 'recharts'
import { COLORS, SALES_CHANNEL_DATA } from '../../config'
import{motion} from 'framer-motion'

const SalesChannelChart = () => {
  return (
    <motion.div className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border lg:col-span-2 border-gray-700' initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.4}}>
       <h1 className='font-semibold text-lg mb-4'>Sales by Channel</h1>
       <div className='h-80'>
     <ResponsiveContainer width={"100%"} height={"100%"}>
        <BarChart data={SALES_CHANNEL_DATA}>
        <CartesianGrid strokeDasharray={"3 3"} stroke='#4B5563'/>
        <XAxis dataKey='name' stroke='#9CA3AF' />
		<YAxis stroke='#9CA3AF' />
        <Tooltip
							contentStyle={{
								backgroundColor: "rgba(31, 41, 55, 0.8)",
								borderColor: "#4B5563",
							}}
							itemStyle={{ color: "#E5E7EB" }}
						/>
						<Legend />
                        <Bar dataKey={"value"} fill='#8884d8'>
							{SALES_CHANNEL_DATA.map((entry, index) => (
								<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
							))}
						</Bar>
        </BarChart>
     </ResponsiveContainer>
       </div>
    </motion.div>
  )
}

export default SalesChannelChart
