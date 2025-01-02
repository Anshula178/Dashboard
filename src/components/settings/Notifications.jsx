import React, { useState } from 'react'
import {motion} from 'framer-motion'
import SettingSection from './SettingSection'
import { Bell } from 'lucide-react'
import ToggleSwitch from './ToggleSwitch'

const Notifications = () => {
    const [notification,setNotification]=useState({
        push:true,
        email:false,
        sms:true,

})

  return (
    <SettingSection icon={Bell} title={"Notifications"}>
     <ToggleSwitch Label={" Push Notifications"} isOn={notification.push} onToggle={()=>setNotification({...notification,push:!notification.push})}/>
     <ToggleSwitch Label={" Email Notifications"} isOn={notification.email} onToggle={()=>setNotification({...notification,email:!notification.email})}/>
     <ToggleSwitch Label={" Sms Notifications"} isOn={notification.sms} onToggle={()=>setNotification({...notification,sms:!notification.sms})}/>
    </SettingSection>
  )
}

export default Notifications
