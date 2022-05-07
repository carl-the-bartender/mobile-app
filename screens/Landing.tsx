import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TextInput, View, Image } from 'react-native';

export default function Home({ navigation }) {

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Carl The Bartender</Text>
            <Image style={styles.image} source={require('./../assets/carl.jpeg')} />
            <Button
                disabled={true}
                title="Continue with Instagram"
                onPress={() => navigation.navigate('Setup')}
            />
            <Button
                title="Continue as a guest"
                onPress={() => navigation.navigate('ShareScreen')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    heading: {
        fontSize: 32,
        textAlign: 'center',
        margin: 20
    },
    image: {
        margin: 20,
        width: 100
    }
});
