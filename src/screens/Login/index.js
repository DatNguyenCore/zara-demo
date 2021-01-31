/** @format */

import React, { useState } from 'react';
import {
	View,
	Text,
	TextInput,
	Image,
	Keyboard,
	TouchableWithoutFeedback,
    TouchableOpacity,
    Alert
} from 'react-native';
import { ApplicationStyles } from '../../Themes';
import styles from './styles';

function Login({ navigation }) {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
    
    const handleLogin = () => {
        if(username.trim() === 'datnguyen' && password.trim() === '12345') {
            return navigation.navigate('Products');
        }

        Alert.alert('Tào khoản hoặc mật khẩu không chính xác.')
    }

	return (
		<View style={ApplicationStyles.screen.container}>
			<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
				<View style={styles.content}>
					<Image
						source={require('../../images/logo.png')}
						style={styles.logo}
					></Image>
					<TextInput
						style={styles.input}
                        placeholder='Tên tài khoản'
                        value={username}
                        onChangeText={text => setUsername(text)}
					></TextInput>
					<TextInput
						style={styles.input}
                        placeholder='Mật khẩu'
                        value={password}
                        onChangeText={text => setPassword(text)}
                        secureTextEntry={true}
					></TextInput>
					<TouchableOpacity style={styles.button} onPress={handleLogin}>
						<Text style={styles.textButton}>Login</Text>
					</TouchableOpacity>
				</View>
			</TouchableWithoutFeedback>
		</View>
	);
}

export default Login;
