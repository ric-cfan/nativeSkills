import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    
  
    boxLogin:{
    flex: 1,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000000",
    flexDirection: "column",
    alignItems: "center",
    },
     
    logo: { 
    width: 158,
    height: 130,
    marginTop: 3,
    marginBottom: 30,
    },

    input: {
      height: 50,
      padding: 10,
      width: 260,
      marginBottom: 10,
      marginTop: 10,
      fontSize: 20,
      backgroundColor: "#f7f7f7",
      borderRadius: 5      
    },
  
    button: {
      backgroundColor: "#660e0a",
      justifyContent: "center",
      alignItems: "center",
      width: 260,
      borderRadius: 9,
      paddingVertical: 10,
      
    },

    textButton: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff",
        textAlign: "center",
    },
    
    viewTitle: {
      width: 150,
      marginLeft: 50
    },

    link: { 
      fontSize: 15,
      fontWeight: "bold",
      color: "#4846cf",
      marginTop: 30
    },

    textLabelContainer:{
      width: 260,
    },

    textLabel:{
      fontWeight: "bold",
      color:"#f7f7f7",
      textAlign: "left",
    },

    iconSenha: {
      flexDirection: "row",
      width: 160,
      alignItems: "flex-start",
      justifyContent: "space-evenly", 
      marginRight: 89.5,
      marginTop: 20,
    },

    mostrar: {
      fontWeight: "bold",
      color: "#4c4a57",
    },

    inputETitulo: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      height: 30
    }
  
  });