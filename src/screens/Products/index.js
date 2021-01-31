import React, { useContext } from 'react';
import { View, FlatList, Text } from 'react-native';
import { ApplicationStyles } from '../../Themes';
import Header from '../../components/Header';
import styles from './styles';
import { Products as dataProducts } from '../../services';
import Item from './Item';
import Context from '../Context';

function Products({ navigation }) {
    const [context, setContext] = useContext(Context);

    const renderBadge = () => {
        let count = 0;
		if(Object.keys(context).length === 0) {
			count = 0;
		} else {
            context.forEach(item => {
                if(item.quantity !== 0) {
                    count = count + item.quantity;
                }
            })
        }

        return <>
            <Text style={{
                top: -10
            }}>Order</Text>
            {count !== 0 && <View style={{
                right: 10,
                top: 10,
                backgroundColor: '#000',
                padding: 5,
                borderRadius: 10,
            }}>
                <Text style={{color: '#fff'}}>{count}</Text>
            </View>}
        </>
    }

    return (
        <View style={ApplicationStyles.screen.container}>
            <Header 
                label='Zala'
				rightComponent={renderBadge()}
				rightButton={() => navigation.navigate('Order')}
            ></Header>
            <View style={styles.content}>
                <FlatList
                    data={dataProducts}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => {
                        return (
                            <Item data={item}></Item>
                        )
                    }}
                ></FlatList>
            </View>
        </View>
    )
}

export default Products;