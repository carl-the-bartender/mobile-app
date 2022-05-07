import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Generating({ navigation }) {

    return (
        <View>
            <Text>Generating</Text>
            <Button
                title="Go to results"
                onPress={() => navigation.navigate('Results')}
            />
        </View>
    );
}

const styles = StyleSheet.create({

});
