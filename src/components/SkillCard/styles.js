import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    mainCard: {
        
        height: 500,
        borderRadius: 20,
        backgroundColor: '#44454f',
        marginBottom: 20,
        marginTop: 20,
        paddingTop: 10,
        paddingBottom: 10
    },

    inputBotoes: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center" ,
      maxWidth: "50%",
    },

    input: {
      border: "1px solid black",
      padding: "8px",
      width: "50%",
      backgroundColor: "#fff",
      textAlign: "center",
    },

    deletar: {
      backgroundColor: "#c9261e",
      padding: "10px",
      borderRadius: "3px",
      width:"40%",
    },

    atualizar: {
      backgroundColor: "#4846cf",
      padding: "10px",
      borderRadius: "3px",
      width:"40%",
    },

    botoes: {
      marginTop: "2px",
      height:  86,
      flexDirection:"row",
      justifyContent:"space-evenly",
      alignItems:"center",
    },

    containerCard: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
        width: 300,
        height: 500,
        padding: 8,
        alignItems:'center',
        borderRadius: "5px",
        textAlign: 'center',
    },

    textoNome: {
        fontSize: 20,
        marginBottom: 5,
        fontWeight: "bold",
        color: "black",
    },
  
    texto: {
        fontSize: 13,
        width: "60%",
        // paddingLeft: 5,
        marginBottom: 5,
        backgroundColor: "#2b2b33",
        color: "white",
        borderRadius: "3px",
    },

    textoLvl: {
      fontSize: 13,
      width: "60%",
      // paddingLeft: 5,
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
        backgroundColor: "#fff",
        border: "2px solid black"
    }

})