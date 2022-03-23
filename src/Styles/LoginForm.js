import { StyleSheet } from 'react-native'

export const stylesLoginForm = StyleSheet.create({
    content: {
        margin: 10
    },
    title: {
        textAlign: "center",
        fontSize: 28,
        fontWeight: "bold",
        marginTop: 20,
        marginBottom: 15
    },
    input: {
        height: 40,
        marginTop: 12,
        marginBottom: 12,
        borderWidth: 1.,
        padding: 10,
        borderRadius: 10
    },
    button: {
        marginTop: 15,
        width: "50%"
    },
    error: {
        textAlign: "center",
        color: "#f00",
        marginTop: 20, 
    }
})