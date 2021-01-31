import { StyleSheet } from 'react-native';
import { Dimension } from '../../Themes';

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center'
    },
    logo: {
        width: Dimension.screen.width / 5 * 3,
        resizeMode: 'contain'
    },
    input: {
        height: 40,
        width: Dimension.screen.width / 5 * 4,
        backgroundColor: 'rgba(0,0,0,.1)',
        borderRadius: 7,
        marginBottom: 20,
        paddingHorizontal: 20
    },
    button: {
        height: 40,
        width: Dimension.screen.width / 5 * 4,
        backgroundColor: '#000',
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40
    },
    textButton: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold'
    }
})

export default styles;