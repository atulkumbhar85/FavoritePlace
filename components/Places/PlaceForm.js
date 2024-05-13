import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const PlaceForm = () => {
    const [enteredTitle, setEnteredTitle] = useState('');

    const changeTitleHandler = (title) => {
        setEnteredTitle(title)
    }

    return (
        <ScrollView>
            <View>
                <Text>
                    Title
                </Text>
                <TextInput
                    onChangeText={changeTitleHandler}
                    value={enteredTitle}
                />
            </View>
        </ScrollView>
    )
}

export default PlaceForm

const styles = StyleSheet.create({})