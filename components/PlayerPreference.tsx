import { useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export const PlayerPreference = ({ name, onValueChange }) => {
    const [option, setOption] = useState('');

    return (
        <View style={{
            marginTop: 10,
            marginBottom: 10
        }}>
            <Text>
                {name}
            </Text>
            <RNPickerSelect
                onValueChange={(value) => {
                    setOption(value)
                    onValueChange(name, value);
                }}
                items={[
                    { label: "All", value: "all" },
                    { label: "Alcoholic only", value: "alcoholic_only" },
                    { label: "Non-alcoholic", value: "non-alcoholic" },
                    { label: "Soft drinks only", value: "soft-drinks-only" },
                    { label: "You're not ready for this", value: "you-re-not-ready-for-this" },
                ]}
            />
        </View>
    )
}