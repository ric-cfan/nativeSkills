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
    flex: 2,
    display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
    flexDirection: "column",
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
    }

});