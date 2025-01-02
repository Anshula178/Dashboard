import React from 'react'
import Header from '../components/Header'
import {motion} from 'framer-motion'
import StatCard from '../components/StatCard';
import { CreditCard, DollarSign, ShoppingCart, TrendingUp } from 'lucide-react';
import SalesOverview from '../components/Sales/SalesOverview';
import DailySalesTrend from '../components/Sales/DailySalesTrend';
import SalesByCategoryChart from '../components/Sales/SalesCategory';

const SalesPage = () => {
  const salesStats = {
    totalRevenue: "$1,234,567",
    averageOrderValue: "$78.90",
    conversionRate: "3.45%",
    salesGrowth: "12.3%",
  };
  return (
    <div className=' flex-1 z-10 relative overflow-auto'>
       <Header title='Sales Dashboard'/>
       <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
         <motion.div  initial={{opacity:0 ,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.4}} className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8'>
         <StatCard name='Total Revenue' icon={DollarSign} value={salesStats.totalRevenue} color='#6366F1' />
					<StatCard
						name='Avg. Order Value'
						icon={ShoppingCart}
						value={salesStats.averageOrderValue}
						color='#10B981'
					/>
					<StatCard
						name='Conversion Rate'
						icon={TrendingUp}
						value={salesStats.conversionRate}
						color='#F59E0B'
					/>
					<StatCard name='Sales Growth' icon={CreditCard} value={salesStats.salesGrowth} color='#EF4444' />
         </motion.div>
         <SalesOverview/>
         <div className='grid grid-cols-1  lg:grid-cols-2 gap-8'>
         <DailySalesTrend/>
         <SalesByCategoryChart/>
         </div>
       </main>
    </div>
  )
}

export default SalesPage
