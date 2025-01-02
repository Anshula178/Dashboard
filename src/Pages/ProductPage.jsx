import React from 'react'
import Header from '../components/Header'
import StatCard from '../components/StatCard'
import {motion} from 'framer-motion'
import { AlertTriangle, BarChart2, DollarSign, Package, ShoppingBag, TrendingUp, Users, Zap } from 'lucide-react'
import CategoryDistributionChart from '../components/overview/CategoryDistributionChart'
import SalesTrend from '../components/products/SalesTrend'
import Table from '../components/products/Table'

const ProductPage = () => {
  return (
    <div  className='flex-1 overflow-auto relative z-10'>
    <Header title={"Products"}/>
    <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:1}} className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 mb-8  '>
        <StatCard name='Total Products' icon={Package} value='2345' color='#6366F1' />
					<StatCard name='Top Sellings' icon={TrendingUp} value='53' color='#8B5CF6' />
					<StatCard name='TLow Stock' icon={AlertTriangle} value='56' color='#EC4899' />
					<StatCard name='Total Revenue' icon={DollarSign} value='$543,23' color='#10B981' />
        </motion.div>
        <Table/>
        <div className='grid grid-cols-1  lg:grid-cols-2 gap-8'>
          <SalesTrend/>
          <CategoryDistributionChart/>
        </div>
      </main>
  </div>
  )
}

export default ProductPage
