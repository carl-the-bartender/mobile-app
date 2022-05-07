import React, { useState } from "react"
import { TextInput, Button, View, Keyboard } from "react-native"

export const AddPerson = ({ handleOnPress }) => {
    const [personName, setPersonName] = useState('');

    return (
        <View style={{
            marginTop: 10,
            marginBottom: 10
        }}>
            <TextInput
                style={{
                    height: 40,
                    borderWidth: 1,
                    borderColor: 'gray',
                    padding: 10,
                }}
                onChangeText={text => setPersonName(text)}
                value={personName}
                placeholder="who's name is that"
            />
            <Button
                onPress={() => {
                    handleOnPress(personName);
                    setPersonName('');
                    Keyboard.dismiss();
                }}
                title="Add person"
            />
        </View>
    )
}