import { View, Text } from 'react-native'
import React, {useEffect, useState} from 'react'
import SplashTimer from '@/components/SplashTimer'
import SplashScreens from '@/app/auth/SplashScreens'
import CreateAccount from '@/app/auth/createAccount'

export default function index() {

  const [ splashShown, setSplashShown ] = useState(true)

  useEffect(()=>{
    const timeout = setTimeout(()=>{
      setSplashShown(false)
    }, 2000)
    return () => clearTimeout(timeout);
  },[])

  return (
      splashShown ? <SplashTimer /> : <SplashScreens />


      // <SplashTimer />
  )
}