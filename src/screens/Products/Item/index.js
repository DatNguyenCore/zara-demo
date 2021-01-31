/** @format */

import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { helperFunction } from '../../../utils';

function Item({ data }) {
    const navigation = useNavigation();

	return (
        <TouchableOpacity onPress={() => navigation.navigate('ProductDetail', {
            transData: data
        })}>
            <View style={styles.container}>
                <View style={styles.containerImage}>
                    <Image
                        style={styles.image}
                        source={{
                            uri: data.thumbImage
                        }}
                    ></Image>
                </View>
                <View style={styles.content}>
                    <Text style={styles.header} numberOfLines={2}>{data.name}</Text>
                    <Text style={styles.price}>Price: {helperFunction.moneyFormat(data.price)}</Text>
                    <Text>Colour: {data.colour}</Text>
                </View>
            </View>
        </TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
        padding: 10,
        backgroundColor: '#fff',
        marginVertical: 10,
        marginHorizontal: 10,
        flexDirection: 'row',
        borderRadius: 7,
        overflow: 'hidden'
    },
    containerImage: {width: 100, height: 150},
    image: {
        width: 100,
        height: 150,
        resizeMode: 'contain',
    },
    content: {
        marginLeft: 10,
        flex: 1,
    },
    header: {
        fontSize: 20,
        marginBottom: 10
    },
    price: {
        fontSize: 15,
        marginBottom: 10
    },
});

export default Item;
