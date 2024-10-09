import { Dimensions, StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    boxTop: {
        height: Dimensions.get('window').height/3,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    boxMedium: {
        height: Dimensions.get('window').height/4,
        width: '100%',
        paddingHorizontal: 37,
    },
    boxBottom: {
        height: Dimensions.get('window').height/3,
        width: '100%',
        alignItems: 'center',
        marginTop: 50
    },
    logo: {
        width: 80,
        height: 80,
    },
    titulo: {
        fontWeight: 'bold',
        marginTop: 40,
        fontSize: 18
    },
    tituloInput: {
        marginLeft: 5,
        color: themas.colors.gray,
        marginTop: 20
    },
    boxInput: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderRadius: 40,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 5,
        backgroundColor: themas.colors.lightGray,
        borderColor: themas.colors.lightGray
    },
    input: {
        height: '100%',
        width: '90%',
        borderRadius: 490,
        paddingLeft: 5
    },
    icons: {
        fontSize: 20,
        color: themas.colors.gray
    },
    button: {
        width: 250,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: themas.colors.primary,
        borderRadius: 40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    textButton: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold'
    },
    textBottom: {
        fontSize: 16,
        color: themas.colors.gray,
        marginTop: 20,
    },
    textBottomCreate: {
        fontSize: 16,
        color: themas.colors.primary,
        marginTop: 20,
    }
})