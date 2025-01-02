import React from 'react'
import {motion} from 'framer-motion'

const StatCard = ({name,icon:Icon,value,color}) => {
  return (
    <motion.div whileHover={{y:-5,boxShadow:"0 25px 50px -12px rgba(0,0,0,0.5)"}} className='bg-gray-800 bg-opacity-50 backdrop-blur-md border-gray-700 rounded-lg border   px-4 py-4 md:px-6 md:py-6 lg:px-8 lg:py-8 shadow-lg ' >
       <div>
        <span className='flex items-center gap-2'>
           <Icon size={20} style={{color}}/> 
           {name}
        </span>
        <p className='text-2xl font-semibold '>
            {value}
        </p>
        
       </div>
    </motion.div>
  )
}

export default StatCard
