
import Header from '../components/Header'
import StatCard from '../components/StatCard'
import {motion} from 'framer-motion'
import {  User2, UserCheck2, UserPlus,  UserX, } from 'lucide-react'
import Table from '../components/users/Table'
import UserGrowth from '../components/users/UserGrowth'
import UserActivity from '../components/users/UserActivity'
import UserDemographics from '../components/users/UserDemographics'


const UsersPage = () => {
 
  return (
    <div  className='flex-1 overflow-auto relative z-10'>
    <Header title={"Users"}/>
    <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:1}} className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 mb-8  '>
        <StatCard name='Total Users' icon={User2} value='1452345' color='#6366F1' />
					<StatCard name='New Users ' icon={UserPlus} value='353' color='#8B5CF6' />
					<StatCard name='Active Users' icon={UserCheck2} value='56' color='#EC4899' />
					<StatCard name=' Rate' icon={UserX} value='2.4%' color='#10B981' />
        </motion.div>
       <Table/>
        <div className='grid grid-cols-1  lg:grid-cols-2 gap-8'>
        <UserActivity/>
          <UserGrowth/>
          <UserDemographics/>
        </div>
      </main>
  </div>
  )
}

export default UsersPage
