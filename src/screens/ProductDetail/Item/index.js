import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Dimension } from '../../../Themes';

function Item({ uri }) {
    return (
        <View
            style={styles.container}
        >
            <Image
                style={styles.image}
                source={{ uri }}
            ></Image>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: Dimension.screen.width,
        height: Dimension.screen.width * 1.5,
    },
    image: {
        width: Dimension.screen.width,
        height:
            Dimension.screen.width * 1.5,
    }
})

export default Item;