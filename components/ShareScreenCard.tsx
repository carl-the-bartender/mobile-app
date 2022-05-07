import React from "react"
import { View, Text, Image, StyleSheet } from "react-native"

export const ShareScreenCard = () => {
    return (
        <View style={styles.view}>
            <Text style={{ flexGrow: 1 }}>Johnny</Text>

            <Text>Gin Cooler</Text>

            <Image style={{ width: 64, height: 64, marginLeft: 10 }} source={require('./../assets/carl.jpeg')} />
        </View>
    )
}

const styles = StyleSheet.create({
    view: { marginBottom: 10, marginTop: 10, padding: 10, borderRadius: 16, backgroundColor: 'rgba(255,255,255,0.8)', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }
});