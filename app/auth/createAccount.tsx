import { View, Text, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import Loading from '@/components/Loading'

export default function CreateAccount() {

  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    const TimeOut = setTimeout(()=>{
        setLoading(false)
    }, 1000)
    return () => clearTimeout(TimeOut)
},[])

  return (
    loading ? <Loading /> : (
      <View style={styles.container}>
        <Text> Create Account </Text>
      </View>
    )
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#36305C',
    justifyContent: 'center',
    alignItems: 'center'
  }
})