import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const Header = () => {
    return (
        <View style={styles.main}>
            <Image source={require("../assets/images/logo-lemon.jpg")}
                style={styles.logo} />
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        width: '100%',
        height: 140,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center',
        alignContent: "center",
        paddingHorizontal: 20,
        paddingTop: 40
    },
    logo: {
        width: 150,
        height: 80,
        resizeMode: 'contain'
    }

})


export default Header