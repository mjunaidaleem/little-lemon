import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Hero = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.heading}>Little Lemon</Text>
      <Text style={styles.subHeading}>Chicago</Text>
      <Text style={styles.description}>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    main: {
        padding: 20, 
        height: 347, 
        width: "100%", 
        backgroundColor: "#495E57"
    },
    heading: {
        color: "yellow", 
        fontSize: 40,
    },
    subHeading: {
        color: "#EDEFEE", 
        fontSize: 30,
    },
    description: {
        color: "#EDEFEE", 
        fontSize: 20,
    },
})

export default Hero