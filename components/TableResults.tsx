import React from "react";
import { View, Text, Button } from "react-native";
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';

export const TableResults = ({ persons, onPressDrinkId }) => {
    return (
        <View>
            {persons.map(item => {
                console.log(item)
                return <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text>{item.name}</Text>
                    <Button title={item.drinkName} onPress={() => onPressDrinkId(item.drinkId)} />
                </View>
            })}
        </View>
    )
}