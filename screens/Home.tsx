import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Home({ navigation }) {

    return (
        <View>
            <Text>Home</Text>
            <Button
                title="Go to persons"
                onPress={() => navigation.navigate('Persons')}
            />
        </View>
    );
}

const styles = StyleSheet.create({

});
