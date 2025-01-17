import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PlaceItem from './PlaceItem'
import { Colors } from '../../constants/colors';

const PlacesList = ({ places }) => {
    if (!places || places.length === 0) {
        return (
            <View style={{ height: '100%' }}>
                <View style={styles.fallbackContainer}>
                    <Text style={styles.fallbackText}>
                        No places added yet! Start adding some.
                    </Text>
                </View>
            </View>
        )
    }

    return (
        <View>
            <FlatList
                data={places}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <PlaceItem place={item} />}
            />
        </View>
    )
}

export default PlacesList

const styles = StyleSheet.create({
    fallbackContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    fallbackText: {
        fontSize: 16,
        color: Colors.primary700,
    }
})