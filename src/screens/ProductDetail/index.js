/** @format */

import React, { useEffect, useState, useContext } from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';
import { ApplicationStyles, Dimension } from '../../Themes';
import Header from '../../components/Header';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { Products } from '../../services';
import ButtonBuy from '../../components/ButtonBuy';
import Context from '../Context';
import Item from './Item';
import { helperFunction } from '../../utils';

function ProductDetail({ route }) {
	const [product, setProduct] = useState({});
	const [data, setData] = useState({});
	const navigation = useNavigation();
	const [context, setContext] = useContext(Context);

	const { transData } = route.params;

	useEffect(() => {
		const data = Products.find((item) => item.id === transData.id);
		setData(data);
	}, []);

	const handleAddProduct = () => {
		if(Object.keys(product).length === 0) {
			return setProduct({...transData, quantity: 1})
		}

		setProduct(state => {
			return {
				...state,
				quantity: state.quantity + 1
			}
		})
	}

	const handleSubProduct = () => {
		setProduct(state => {
			return {
				...state,
				quantity: state.quantity - 1
			}
		})
	}

	const handleBuy = () => {
		if(Object.keys(product).length === 0) {
			return;
		}

		setContext(state => {
			return [...state, product]
		});
		navigation.navigate('Products')
	}

	const renderNumber = () => {
		if(Object.keys(product).length === 0) {
			return 0;
		}

		return product.quantity;
	}

	return (
		<View style={ApplicationStyles.screen.container}>
			<Header
				goBack={() => navigation.navigate('Products')}
				label={data.name}
				rightComponent={<Text>Buy</Text>}
				rightButton={handleBuy}
			></Header>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View
					style={{
						height: Dimension.screen.width * 1.5,
					}}
				>
					<FlatList
						data={data.carouselImages}
						keyExtractor={(item, index) => index.toString()}
						horizontal={true}
						showsHorizontalScrollIndicator={false}
						pagingEnabled={true}
						renderItem={({ item }) => {
							return <Item uri={item}></Item>
						}}
					></FlatList>
				</View>
				<View
					style={styles.marginItem}
				>
					<ButtonBuy number={renderNumber()} onAddProduct={handleAddProduct} onSubProduct={handleSubProduct}></ButtonBuy>
				</View>
				<View style={styles.content}>
					<Text
						style={{
							fontSize: 25,
							marginBottom: 10,
						}}
					>
						{data.name}
					</Text>
					<Text
						style={{
							marginBottom: 10,
						}}
					>
						{data.details}
					</Text>
					<Text
						style={{
							marginBottom: 10,
							fontSize: 17,
							fontWeight: 'bold',
						}}
					>
						Price: {helperFunction.moneyFormat(data.price)}
					</Text>
					<Text
						style={{
							fontSize: 17,
							marginBottom: 30,
						}}
					>
						Colour: {data.colour}
					</Text>
				</View>
			</ScrollView>
		</View>
	);
}

export default ProductDetail;
