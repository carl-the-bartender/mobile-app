import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { TableResults } from '../components/TableResults';

export default function Results({ route, navigation }) {

    const { persons } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Results</Text>
            <TableResults persons={persons} onPressDrinkId={(drinkId) => navigation.navigate('Drink', { drinkId: drinkId })} />

            <Button
                title="Go to share"
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
        marginTop: 20,
        marginBottom: 20
    }
});
