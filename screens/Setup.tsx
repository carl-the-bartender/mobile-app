import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { AddPerson } from '../components/AddPerson';
import { PlayerPreference } from '../components/PlayerPreference';

export default function Setup({ navigation }) {
    const [persons, setPersons] = useState([]);

    const handleOnPress = (personName) => {
        setPersons([...persons, { name: personName, option: '' }]);
    }

    const onValueChange = (personName, personOption) => {
        let index = persons.findIndex((item => item.name == personName));
        persons[index].option = personOption
        setPersons([...persons]);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Preferences</Text>

            <AddPerson handleOnPress={handleOnPress} />

            {persons.map((item, index) => {
                return <PlayerPreference name={item.name} onValueChange={onValueChange} />
            })}

            <Button
                title="Generate drinks"
                onPress={() => console.log(persons)}
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
});
