import React from 'react'
import Header from '../components/Header'
import OverviewCard from '../components/analytics/OverviewCard'
import Revenue from '../components/analytics/Revenue'
import ChannelPerformance from '../components/analytics/ChannelPerformance'
import ProductPerformance from '../components/analytics/ProductPerformance'
import UserRetention from '../components/analytics/UserRetention'
import CustomerSegmentation from '../components/analytics/CustomerSegmention'
import AIPoweredInsights from '../components/analytics/AIPoweredInsights'

const Analytics = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10 bg-gray-900'>
       <Header title={"Analytics Dashboard"}/>
       <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
         <OverviewCard/>
         <Revenue/>
         <div className='grid grid-cols-1  md:grid-col-2 lg:grid-cols-2 gap-8 mb-8'>
         <ChannelPerformance/>
         <ProductPerformance/>
         <UserRetention/>
         <CustomerSegmentation/>
         </div>
         <AIPoweredInsights/>
       </main>
    </div>
  )
}

export default Analytics
