import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerCadastro: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000000",
    flexDirection: "column",
  },

  logo: { 
    width: 158,
    height: 130,
    marginBottom: 30,
  },

  textLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#f7f7f7",
  },
  input: {
    height: 50,
    padding: 10,
    width: 260,
    marginBottom: 10,
    marginTop: 10,
    fontSize: 20,
    backgroundColor: "#f7f7f7",
    borderRadius: 5,
  },

  button: {
    backgroundColor: "#660e0a",
    justifyContent: "center",
    alignItems: "center",
    width: 260,
    borderRadius: 9,
    paddingVertical: 10,
    marginTop: 25,
  },

  button2: {
    backgroundColor: "#4846cf",
    justifyContent: "center",
    alignItems: "center",
    width: 260,
    borderRadius: 9,
    paddingVertical: 10,
    marginTop: 25,
  },

  textButton: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },

  iconSenha: {
    alignItems: "center",
    justifyContent: "center",
    width: "20%",
  },

  hideOrShowPass: {
    display: "flex",
    flexDirection: "row",
  },

  errorMessage: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
    color: "#c9261e",
  },
});
