import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View, Alert } from "react-native";
import { CheckBox } from "react-native-elements";
import Icon from "react-native-vector-icons/Feather";
import { AuthContext } from "../../Context/auth";
import { styles } from "./styles";

const Login = () => {
  const [mostraSenha, setMostraSenha] = useState(true);
  const [rememberMe, setRememberMe] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigation = useNavigation();

  useEffect(() => {
    const loadLoginCredentials = async () => {
      const storedCredentials = await AsyncStorage.getItem("loginCredentials");
      if (storedCredentials) {
        const { username: storedUsername, password: storedPassword } =
          JSON.parse(storedCredentials);
          setUsername(storedUsername);
          setPassword(storedPassword);
          setRememberMe(true);
      }
    };
    loadLoginCredentials();
  }, []);

  const handleLogin = async () => {
    if (rememberMe) {
      const credentials = { username, password };
      await AsyncStorage.setItem(
        "loginCredentials",
        JSON.stringify(credentials)
      );
    } else {
      await AsyncStorage.removeItem("loginCredentials");
    }
    login(username, password).then((res) => {
      if(res) {
        navigation.navigate("Home");
      }
      else {
        Alert.alert("Ocorreu um erro ao logar","Verifique se seu usuário e senha estão corretos", [
        {text: "OK"}
      ])
    }
    });
  };

  return (
    <View style={styles.boxLogin}>
      <View style={styles.boxLogin}>
        
        <View style={styles.viewLogo}>
          <Image style={styles.logo} source={require("../../../assets/Logo.png")}/>
        </View>

        <View style={styles.textLabelContainer}>
          <Text style={styles.textLabel}> USUARIO </Text>
        </View>
        <TextInput
          placeholder="Usuario"
          placeholderTextColor="#918d8d"
          onChangeText={setUsername}
          value={username}
          style={styles.input}
        />

        <View style={styles.textLabelContainer}>
          <Text style={styles.textLabel}> SENHA </Text>
        </View>
        <TextInput
          placeholder="Senha"
          placeholderTextColor="#918d8d"
          onChangeText={setPassword}
          value={password}
          style={styles.input}
          secureTextEntry={mostraSenha}
        />

        <TouchableOpacity style={styles.iconSenha} onPress={() => setMostraSenha(!mostraSenha)}>
          <Icon name="eye" size={20} color="#f7f7f7" />  
          <Text style={styles.mostrar}>Mostrar senha</Text>
        </TouchableOpacity>

        <View>
          <CheckBox
            title="Lembre-se de mim"
            tintColors={{true:"#f7f7f7", false:"#f7f7f7"}}
            checked={rememberMe}
            onPress={() => setRememberMe(!rememberMe)}
            checkedColor="#f7f7f7"
            uncheckedColor="#f7f7f7"
            containerStyle={{ backgroundColor: "transparent", borderWidth: 0 }}
          />

          <TouchableOpacity onPress={handleLogin} style={styles.button}>
            <Text style={styles.textButton}>LOGIN </Text>
          </TouchableOpacity>

          
          <Text onPress={() => navigation.navigate("Cadastro")} style={styles.link}>
            Não possui um login? Clique aqui!
          </Text>
          
        </View>
      </View>
    </View>
  );
};

export default Login;
