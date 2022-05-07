import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Setup({ navigation }) {
    const [personName, setPersonName] = useState('');
    const [persons, setPersons] = useState([{
        'name': 'John doe'
    }, {
        'name': 'Jane dora'
    }]);

    const handleOnPress = () => {
        setPersons([...persons, { name: personName }]);
        setPersonName('');
    }

    return (
        <View style={styles.container}>
            <Text>Setup</Text>
            <Button
                title="Go to generating"
                onPress={() => navigation.navigate('Generating')}
            />
            <SafeAreaView>
                <TextInput
                    style={styles.input}
                    onChangeText={text => setPersonName(text)}
                    value={personName}
                    placeholder="useless placeholder"
                />
            </SafeAreaView>
            <Button
                onPress={handleOnPress}
                title="Add person"
                accessibilityLabel="Learn more about this purple button"
            />
            {persons.map((item, index) => {
                return <Text>{item.name}</Text>
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFF00',
    },
    input: {
        backgroundColor: 'white',
        width: '100%',
    }
});
