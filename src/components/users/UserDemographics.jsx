import React from 'react'
import {motion} from 'framer-motion'
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'
import { COLORS, userDemographicsData } from '../../config'

const UserDemographics = () => {
  return (
   <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.4}} className='bg-gray-800 border border-gray-700 bg-opacity-50 backdrop-blur-md rounded-xl p-6 lg:col-span-2'>
    <h2 className='text-xl font-semibold text-gray-100 mb-4'>User Demographics</h2>
    <div style={{width:"100%",height:300}}>
  <ResponsiveContainer>
    <PieChart>
        <Pie data={userDemographicsData} cx='50%' cy="50%" outerRadius={100} fill='#8884d8' dataKey='value' label={({name,percent})=>`${name}${(percent*100).toFixed(0)}%`}>
        {
            userDemographicsData.map((entry,index)=>(
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))
        }
        </Pie>
        <Tooltip
        contentStyle={{
            backgroundColor:'rgba(31, 41, 55, 0.8)',
            borderColor: "#4B5563",
        }}
        itemStyle={{ color: "#E5E7EB" }}
        />
        <Legend/>
    </PieChart>
  </ResponsiveContainer>
    </div>
   </motion.div>
  )
}

export default UserDemographics
