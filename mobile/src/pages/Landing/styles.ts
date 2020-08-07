import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8257E5',
        justifyContent: 'center',
        padding: 40,
    },

    banner: {
        width: '100%',
        resizeMode: 'contain',
    },

    title: {
        color: '#FFF',
        fontFamily: 'Archivo_700Bold',
        fontSize: 20,
        lineHeight: 30,
        marginTop: 80,
    },

    titleBold: {
        fontFamily: 'Archivo_700Bold',
    },

    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 40,
        justifyContent: 'space-between',
    },

    button: {
        height: 150,
        width: '48%',
        backgroundColor: '#333',
        borderRadius: 8,
        padding: 24,
        justifyContent: 'space-between',
    },
    
    buttonPrimary: {
        backgroundColor: '#9871F5',
    },

    buttonSecondary: {
        backgroundColor: '#04D361'
    },

    buttonText: {
        fontFamily:'Archivo_700Bold',
        color: '#fff',
        fontSize: 20,
    },

    totalConnections: {
        fontFamily:'Archivo_700Bold',
        color: '#d4c2ff',
        fontSize: 12,
        lineHeight: 20,
        marginTop: 40,
        maxWidth: 140,
    },

});

export default styles;
