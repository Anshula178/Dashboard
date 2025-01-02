import React, { useState } from 'react'
import {motion} from 'framer-motion'
import { Edit, Search, Trash2 } from 'lucide-react'
import { userData } from '../../config'

const Table = () => {
    const [searchTerm,setSearchTerm]=useState('')
    const [filteredProduct,SetFilteredProduct]=useState(userData)
    const handleFilter=(e)=>{
    const value=e.target.value.toLowerCase();
    setSearchTerm(value)
    const filtered=userData.filter((product)=> product.name.toLowerCase().includes(value)||product.email.toLowerCase().includes(value))
    SetFilteredProduct(filtered)
    }
  return (
    <motion.div className='bg-gray-800 bg-opacity-50 rounded-lg mb-8 border border-gray-700 p-6 ' initial={{opacity:0,y:20}} animate={{opacity:1, y:0}} transition={{delay:0.3}}>
       <div className='flex justify-between items-center mb-6'>
         <h1 className='text-xl font-semibold text-gray--'>Users List</h1>
         <div className='relative'>
         <input type="text" value={searchTerm} className='bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2' placeholder='Search Users' onChange={handleFilter} />
         <Search className='absolute left-3 top-2.5 text-gray-400' sixe={18} />
         </div>
         
       </div>
       <div className='oberflow-x-auto'>
        <table className='min-w-full divide-gray-700'>
            <thead>
                <tr>
                    <th className='px-6 py-3 text-left text-xd font-medium text-gray-300 uppercase tracking-wider'>
                        Name
                    </th>
                    <th className='px-6 py-3 text-left text-xd font-medium text-gray-300 uppercase tracking-wider'>
                        Email
                    </th>
                    <th className='px-6 py-3 text-left text-xd font-medium text-gray-300 uppercase tracking-wider'>
                      Role
                    </th>
                    <th className='px-6 py-3 text-left text-xd font-medium text-gray-300 uppercase tracking-wider'>
                        Status
                    </th>
                    <th className='px-6 py-3 text-left text-xd font-medium text-gray-300 uppercase tracking-wider'>
                        Actions
                    </th>
                    
                </tr>
            </thead>
            <tbody className='divide-y divide-gray-700'>
            {
                filteredProduct.map((user)=>(
                    <motion.tr key={user.id} initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.3}}>
                       <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>{user.name}</td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
					{user.email}
					</td>
                    <td className='px-6 py-4 whitespace-nowrap'>
									<span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-800 text-blue-100'>
										{user.role}
									</span>
								</td>
								
								<td className='px-6 py-4 whitespace-nowrap'>
									<span
										className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
											user.status === "Active"
												? "bg-green-800 text-green-100"
												: "bg-red-800 text-red-100"
										}`}
									>
										{user.status}
									</span>
								</td>
								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
									<button className='text-indigo-400 hover:text-indigo-300 mr-2' >
										<Edit size={18} />
									</button>
									<button className='text-red-400 hover:text-red-300' >
										<Trash2 size={18} />
									</button>
								</td>
                    </motion.tr>
                ))
            }
            </tbody>
        </table>
       </div>
    </motion.div>
  )
}

export default Table
