import React, { useState } from 'react'
import SettingSection from './SettingSection'
import { Lock } from 'lucide-react'
import ToggleSwitch from './ToggleSwitch'

const Security = () => {
    const [twoFacor,setTwoFactor]=useState(false)
  return (
    <SettingSection icon={Lock} title={"Security"}>
     <ToggleSwitch Label={"Two-Factor Authentication"} isOn={twoFacor} onToggle={()=>setTwoFactor(!twoFacor)} />
        <div className='mt-4'>
        <button className='bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded 
        transition duration-200 '>
       Change Password
        </button>
        </div>
    </SettingSection>
  )
}

export default Security
