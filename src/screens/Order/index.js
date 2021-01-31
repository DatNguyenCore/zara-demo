/** @format */

import React, { useContext } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { ApplicationStyles } from '../../Themes';
import Header from '../../components/Header';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import Context from '../Context';
import { helperFunction } from '../../utils';

function Order(props) {
	const navigation = useNavigation();
	const [context, setContext] = useContext(Context);

	const renderTotal = () => {
		if (Object.keys(context).length === 0) {
			helperFunction.moneyFormat(0);
		}

		let count = 0;

		context.forEach((item) => {
			if (item.quantity !== 0) {
				count = count + item.quantity * item.price;
			}
		});

		return helperFunction.moneyFormat(count);
	};

	const handleBuy = () => {
		setContext([]);
		Alert.alert('Thực hiện mua thành công.');
		navigation.navigate('Products');
	};

	return (
		<View style={ApplicationStyles.screen.container}>
			<Header
				goBack={() => navigation.navigate('Products')}
				label='Order'
				rightButton={() => navigation.navigate('Order')}
			></Header>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={styles.content}>
					{context
						.filter((item) => item.quantity !== 0)
						.map((item, index) => {
							return (
								<View style={styles.row} key={index}>
									<Text style={styles.text}>{item.name}</Text>
									<Text style={styles.text}>
										{item.quantity}
									</Text>
								</View>
							);
						})}
					<View style={[styles.row, { borderBottomWidth: 0 }]}>
						<Text style={[styles.text, styles.total]}>Total</Text>
						<Text style={[styles.text, styles.total]}>
							{renderTotal()}
						</Text>
					</View>
				</View>
				<View style={styles.footer}>
					<TouchableOpacity
						style={styles.button}
						onPress={
							Object.keys(context).length !== 0
								? handleBuy
								: () => {}
						}
					>
						<Text
							style={styles.buttonText}
						>
							Buy
						</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</View>
	);
}

export default Order;
