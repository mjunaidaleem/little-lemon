import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const Hero = () => {
    return (
        <View style={styles.main}>
            <Text style={styles.heading}>Little Lemon</Text>
            <View style={{ flexDirection: 'row', width: '100%' }}>
                <View style={{ width: "65%" }}>
                    <Text style={styles.subHeading}>Chicago</Text>
                    <Text style={styles.description}>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</Text>
                </View>
                <View style={{ width: "35%", padding: 5 }}>

                    <Image source={require("../assets/images/product1.jpg")}
                        style={styles.image} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        padding: 10,
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
        marginTop: 20
    },
    image: {
        width: 140,
        height: 160,
        borderRadius: 20
    }
})

export default Hero