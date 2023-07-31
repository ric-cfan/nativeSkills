import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    
  boxHome:{
  width: "100%",
  minHeight: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: "#1c1c1b",
  flexDirection: "column",
  },

  boxModal:{
    width: 300,
    height: 300,
    justifyContent:"space-evenly",
    alignItems: "center",
    backgroundColor: "#1C1C1B",
    borderRadius: 5,
    alignSelf:"center",
    marginTop: 60,
    border: "2px solid #fff"
    },

    logo: { 
      width: 158,
      height: 130,
      marginTop: 20,
      },
      
    topo: {
      width: "100%",
      height: 170,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center",
      backgroundColor: "#000000",
      paddingBottom:5,
    },

    logout: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      
    },

    centroTopo: {
      display: "flex",
      height: "50%",
      justifyContent: "space-evenly",
      alignItems: "center",
    },

    abrirModal: {
      padding: 5,
      backgroundColor: "#660e0a",
      fontWeight: "bold",
      borderRadius: 5,
      marginTop: 3,
    },

    input: {
      border: "1px solid black",
      backgroundColor: "#fff",
      textAlign: "center",
    },

    adicionar: {
      padding: 5,
      fontWeight: "bold",
      borderRadius: 5,
      marginTop: 3,
      backgroundColor: "#4846cf",
    },

    voltar: {
      padding: 5,
      fontWeight: "bold",
      borderRadius: 5,
      marginTop: 3,
      backgroundColor: "#c9261e",
    },

    selectContainer: {
      backgroundColor: "#fff",
    },

    inputETitulo: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      height: 80,
    },

});