import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Results({ navigation }) {

    return (
        <View>
            <Text>Results</Text>
            <Button
                title="Go to share"
                onPress={() => navigation.navigate('ShareScreen')}
            />
        </View>
    );
}

const styles = StyleSheet.create({

});
