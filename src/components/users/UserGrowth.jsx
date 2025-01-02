import React from 'react'
import{motion} from 'framer-motion'
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { userGrowthData } from '../../config'

const UserGrowth = () => {
   
    
  return (
    <motion.div className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700' initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.2}}>
       <h1 className='font-semibold text-lg mb-4'>UserGrowth</h1>
       <div className='h-80'>
     <ResponsiveContainer width={"100%"} height={"100%"}>
        <LineChart data={userGrowthData}>
           <CartesianGrid strokeDasharray='3 3 ' stroke='#4B5563'/>
           <XAxis dataKey={"month"} stroke="#10B981"/>
           <YAxis stroke="#10B981"/>
           <Tooltip
							contentStyle={{
								backgroundColor: "rgba(31, 41, 55, 0.8)",
								borderColor: "#4B5563",
							}}
							itemStyle={{ color: "#E5E7EB" }}
						/>
						<Line
							type="linear"
							dataKey='users'
							stroke='#4B5563'
							strokeWidth={3}
							dot={{ fill: "#10B981", strokeWidth: 2, r: 6 }}
							activeDot={{ r: 8, strokeWidth: 2 }}
						/>
        </LineChart>
     </ResponsiveContainer>
       </div>
    </motion.div>
  )
}

export default UserGrowth
