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

  boxModal:{
    flex: 1,
    minHeight: 800,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "column",
    backgroundColor: "#1C1C1B",
    },

    logo: { 
      width: 158,
      height: 130,
      marginBottom: 30,
      marginTop: 20,
      },
      
    topo: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center",
      backgroundColor: "#000000"
    },

    logout: {
      display: "flex",
      alignItems: "center",
    },

    centroTopo: {
      display: "flex",
      height: "50%",
      justifyContent: "space-evenly",
      alignItems: "center",
    },

    abrirModal: {
      backgroundColor: "#660e0a",
      padding: "5px",
      borderRadius: "3px",
    },

    input: {
      border: "1px solid black",
      padding: "0.5rem",
      backgroundColor: "#fff",
      borderRadius: "5px",
      textAlign: "center",
    },

    addSkill: {
      backgroundColor: "#660e0a",
      padding: "40px",
      borderRadius: "5px",
      fontSize:"70",
  
    },

    selectContainer: {
      backgroundColor: "#fff",
      borderRadius: "5px",
    },

    inputETitulo: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      height: 80,
    },

});