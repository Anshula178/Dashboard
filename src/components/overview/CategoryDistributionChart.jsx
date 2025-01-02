import React from 'react'
import{motion} from 'framer-motion'
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'
import { categoryData } from '../../config'
const CategoryDistributionChart = () => {
    const COLORS = ["#6366F1", "#8B5CF6", "#EC4899", "#10B981", "#F59E0B"];
  return (
    <motion.div className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700' initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.2}}>
       <h1 className='font-semibold text-lg mb-4'>Category Distribution</h1>
       <div className='h-80'>
     <ResponsiveContainer width={"100%"} height={"100%"}>
          <PieChart>
          <Pie data={categoryData} cx={"50%"} cy={"50%"} outerRadius={100} fill='#8884d8' dataKey='value' label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}>
          {
            categoryData.map((entry,index)=>(
               <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/> 
            ))
          }
          </Pie>
          <Tooltip contentStyle={{
            backgroundColor:"rgba(31,41,55,0.8)",
            borderColor:"#4B5563"
          }}  itemStyle={{ color: "#E5E7EB" }}    />
          <Legend/>
          </PieChart>
          
     </ResponsiveContainer>
       </div>
    </motion.div>
  )
}

export default CategoryDistributionChart