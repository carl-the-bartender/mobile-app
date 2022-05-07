import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function ShareScreen({ navigation }) {

    return (
        <View>
            <Text>ShareScreen</Text>
            <Button
                title="Go to survey"
                onPress={() => navigation.navigate('Survey')}
            />
        </View>
    );
}

const styles = StyleSheet.create({

});
