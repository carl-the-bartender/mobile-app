import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import { getRandom } from './../api/thecocktaildb'

export default function Generating({ route, navigation }) {

    const [loading, setLoading] = useState(true);

    const { persons } = route.params;

    useEffect(() => {
        for (let person of persons) {
            getRandom()
                .then(response => {
                    person.drinkName = response.drinks[0].strDrink;
                    person.drinkId = response.drinks[0].idDrink;
                })
        }

        setLoading(false);
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Carl is thinking...</Text>
            <Image style={styles.image} source={require('./../assets/carl.jpeg')} />
            <Button
                disabled={loading}
                title="Show results"
                onPress={() =>
                    navigation.navigate('Results', {
                        persons: persons
                    })
                }
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
    image: {}
});