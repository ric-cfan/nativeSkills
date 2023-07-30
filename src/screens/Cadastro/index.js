import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { api } from '../../services/api';
import { styles } from "./styles";


const Cadastro = () => { 

    const [mostraSenha, setMostraSenha] = useState(true);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [mensagem, setMensagem] = useState("");
    const navigation = useNavigation()
    
    
    const registerUser = () => {
      const tokenStorage = AsyncStorage.getItem("token")

        if (password !== confirmPassword) {
          setMensagem("")
          setMensagem("Senhas Diferentes! Cadastro não realizado")
          return;
        }
        
        const user = {
          login: username,
          senha: password,
          confirmaSenha: confirmPassword,
        };

        api.post("/api/usuario", user)
        .then((res) => {
          console.log(res)
          console.log(res.data.id)
          AsyncStorage.setItem("userID", res.data.id)
          navigation.navigate('Login')

        }).catch((err) => { 
          console.log(err)
        })

         
      };



    return (
        <View style={styles.containerCadastro}>
          <Image style={styles.logo} source={require("../../../assets/Logo.png")}/>            
          <View>
            <Text style={styles.textLabel}> USUARIO </Text>
            <TextInput 
              placeholder="Usuario"
              placeholderTextColor="#918d8d"
              style={styles.input} 
              onChangeText={(e) => setUsername(e)}
            />
          </View>

          <View>
            <View style={styles.hideOrShowPass}> 
                <Text style={styles.textLabel}> SENHA </Text>
            </View>
        
            <TextInput 
              placeholder="Senha"
              placeholderTextColor="#918d8d"
              style={styles.input}
              secureTextEntry={mostraSenha} 
              onChangeText={(e) => setPassword(e)}
            />
          </View>

        
          <View>
            <View style={styles.hideOrShowPass}> 
              <Text style={styles.textLabel}> CONFIRME SUA SENHA </Text>
              <TouchableOpacity style={styles.iconSenha} onPress={() => setMostraSenha(!mostraSenha)}>
                <Icon name="eye" size={20} color="#f7f7f7" />      
              </TouchableOpacity>
            </View>
            <TextInput 
              placeholder="Confirme sua senha"
              placeholderTextColor="#918d8d"
              style={styles.input} 
              secureTextEntry={mostraSenha}
              onChangeText={(e) => setConfirmPassword(e)}
            />
          </View>

          <Text style={styles.errorMessage}>{mensagem}</Text>

          <TouchableOpacity  onPress={() => registerUser()} style={styles.button} >
            <Text style={styles.textButton}>CADASTRAR</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.button2} > 
            <Text style={styles.textButton}>RETORNAR</Text>
          </TouchableOpacity> 
        </View>
    )
}

export default Cadastro; 