import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useRef, useState } from 'react';
import { Button, ImageBackground, Platform, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import ViewShot, { captureRef } from 'react-native-view-shot';
import { ShareImage } from '../components/ShareImage';
import { ShareScreenCard } from '../components/ShareScreenCard';
import Share from 'react-native-share';

export default function ShareScreen({ navigation }) {

    return (
        <ImageBackground source={require('./../assets/Share-img.png')} resizeMode="cover" style={{ width: '100%', height: '100%' }}>
            <View style={styles.view}>
                <Text style={styles.text}>Carl has decided the following</Text>
                <ShareScreenCard />
            </View>
            <Button title="test" onPress={handleOnPress} />
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    view: { padding: 30 },
    text: { fontSize: 24, color: '#fff', textAlign: 'center' }
});