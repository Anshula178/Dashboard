import React, { useState } from 'react'
import {motion} from 'framer-motion'
import { Edit, Search, Trash2 } from 'lucide-react'
import { PRODUCT_DATA } from '../../config'

const Table = () => {
const [searchTerm,setSearchTerm]=useState('')
const [filteredProduct,SetFilteredProduct]=useState(PRODUCT_DATA)
const [items, setItems] = useState(() => {
  const savedItems = localStorage.getItem('items');
  return savedItems ? JSON.parse(savedItems) : [];
});

const handleSearch=(e)=>{
    const value=e.target.value.toLowerCase();
    setSearchTerm(value)
    const filtered=PRODUCT_DATA.filter((product)=>product.name.toLowerCase().includes(value)||product.category.toLowerCase().includes(value));
    SetFilteredProduct(filtered)

}
const handleDelete=(id)=>{
  SetFilteredProduct((prev)=>{
    return prev.filter(product=> product.id!==id)
  })
}

  return (
    <motion.div className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8' initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.2}}>
      <div className='flex justify-between items-center mb-6'>
        <h2 className='text-xl font-semibold text-gray-100'>Product List</h2>
        <div className='relative'>
         <input type="text"  placeholder='Search Products' value={searchTerm} className='bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500' onChange={handleSearch}/>
        <Search className='absolute left-3 top-2.5 text-gray-400' size={18}/>
        </div>
      </div>
      <div>
      <table className='divide-y divide-gray-700 min-w-full'>
        <thead>
        <tr>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Name
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Category
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Price
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Stock
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Sales
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Actions
							</th>
						</tr>
        </thead>
        <tbody className='divide-y divide-gray-700'>
            {
              filteredProduct.map((product)=>(
                <motion.tr key={product.id} initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.3}}>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>{product.name}</td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
					{product.category}
					</td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
									${product.price.toFixed(2)}
								</td>
								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>{product.stock}</td>
								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>{product.sales}</td>
								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
									<button className='text-indigo-400 hover:text-indigo-300 mr-2'  >
										<Edit size={18} />
									</button>
									<button className='text-red-400 hover:text-red-300' onClick={()=>handleDelete(product.id)} >
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
