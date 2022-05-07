import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Home({ navigation }) {

    return (
        <View>
            <Text>Landing</Text>
            <Button
                title="Go to setup"
                onPress={() => navigation.navigate('Setup')}
            />
        </View>
    );
}

const styles = StyleSheet.create({

});
