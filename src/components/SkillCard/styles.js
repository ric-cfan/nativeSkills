import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#1c1c1b',
        alignItems: 'center'
    },

    main: {
        width: '105%',
        height: 240,
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: '#b8b8d9',
        marginBottom: 20,
        marginTop: 20,
        paddingTop: 10,
        paddingBottom: 10
    },

    inputBotoes: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center",
    },

    input: {
      border: "1px solid black",
      padding: "0.5rem",
      backgroundColor: "#fff"
    },

    deletar: {
      backgroundColor: "#c9261e",
      padding: "10px",
      borderRadius: "3px",
    },

    atualizar: {
      backgroundColor: "#4846cf",
      padding: "10px",
      borderRadius: "3px",
    },

    botoes: {
      marginTop: "2px",
      height:  86,
      display: "flex",
      justifyContent: "space-between",
    },

    containerCard: {
        width: 550,
        height: 150,
        flexDirection: 'row',
        padding: 8,
        justifyContent:'center',
        borderRadius: "5px",
    },

    textoNome: {
        fontSize: 20,
        marginBottom: 5,
        fontWeight: "bold",
        color: "black",
    },
  
    texto: {
        fontSize: 13,
        maxWidth: "90%",
        paddingLeft: 5,
        marginBottom: 5,
        backgroundColor: "#2b2b33",
        color: "white",
        borderRadius: "3px",
    },

    textoLvl: {
      fontSize: 13,
      maxWidth: "90%",
      paddingLeft: 5,
      marginBottom: 5,
      backgroundColor: "#2b2b33",
      fontWeight: "bold",
      borderRadius: "3px",
      color: "#bdb87b",
    },

    img: {
        height: 130,
        width: 130,
        borderRadius: 10,
        marginRight: 11,
        backgroundColor: "#fff",
        border: "2px solid black"
    }

})