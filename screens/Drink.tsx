import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import { getLookupById } from '../api/thecocktaildb';

export default function Drink({ route, navigation }) {

    const { drinkId } = route.params;

    const [loading, setLoading] = useState(true);
    const [drink, setDrink] = useState(null);

    useEffect(() => {
        getLookupById(drinkId)
            .then(response => {
                console.log(response);
                setDrink(response);
            })

        setLoading(false);
    }, [])

    return (
        <View>
            <Text>
                {loading ? 'Loading...' : <>
                    {drink && drink.strDrinkThumb ? <Image style={{ width: 200, height: 200 }} source={{ uri: drink.strDrinkThumb }} /> : null}
                    {JSON.stringify(drink)}
                </>}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({

});
