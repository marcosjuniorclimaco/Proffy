import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f0f0f7",
    },

    teacherList: {
       marginTop: -40, 
    },

    searchForm: {
        marginBottom: 24,
    },

    label: {
        color: '#d4c2ff',
        fontFamily: 'Archivo_700Bold',
    },

    
    inputGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between'
        
    },
    
    inputblock: {
        width: '48%',
    },
    
    input: {
        height: 54,
        backgroundColor: '#fff',
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 26,
        marginTop: 4,
        marginBottom: 16,


    },

    searchButton: {
        backgroundColor: '#04d361',
        flexDirection: 'row',
        height: 56,
        borderRadius: 8,
        justifyContent:'center',
        alignItems: 'center',
    },

    searchButtonText: {
        color: '#fff',
        fontFamily: 'Archivo_700Bold',
    }




});

export default styles;
