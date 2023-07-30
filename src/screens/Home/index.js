import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useContext, useEffect, useState, useRef } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { AuthContext } from "../../Context/auth";
import { api } from "../../services/api";
import { styles } from "./styles";
import { Modalize } from "react-native-modalize";
import { SelectList } from "react-native-dropdown-select-list";

const Home = () => {
  const { logout } = useContext(AuthContext);
  const navigation = useNavigation();
  const [userSkills, setUserSkills] = useState([]);
  const [generalSkills, setGeneralSkills] = useState([]);
  const [skill, setSkill] = useState([]);
  const [lvl, setLvl] = useState();
  const modalizeRef = useRef(null);

  useEffect(() => {
    getUserId() 
    getGeneralSkills()
  }, []);

  //requisicoes
  //gets

  const getUserId = async() => {
    const token = await AsyncStorage.getItem("token")
    const username = await AsyncStorage.getItem("username")
    const userId = await api.get(
      `/api/usuario/${username}`
      , { headers: { "Authorization": `${token}`, "Accept": "application/json"}}
    );
    await AsyncStorage.setItem("userId", userId.data.id)
    await getUserSkills()
  }

  const getUserSkills = async () => {
    try {
    const token = await AsyncStorage.getItem("token")
    const userId = await AsyncStorage.getItem("userId")
    const response = await api.get(
      `/api/usuarioSkill/${userId}`
      , { headers: { "Authorization": `${token}`, "Accept": "application/json"}}
    );
    setUserSkills(response.data);
    } 
    catch {
      console.error(error);
    };
  }

  const getGeneralSkills = async () => {
    try {
    const token = await AsyncStorage.getItem("token")
    const response = await api.get(
      `/api/skill/`
      , { headers: { "Authorization": `${token}`, "Accept": "application/json"}}
    );
    setGeneralSkills(response.data);
    } 
    catch {
      console.error(error);
    };
  }

  //delete

  const deleteSkill = async (userSkillId) => {
    const token = await AsyncStorage.getItem("token")
    api.delete(`/api/usuarioSkill/${userSkillId}`, { headers: { "Authorization": `${token}`, "Accept": "application/json"}})
      .then(() => 
        getSkills()
      );
  };

  //put

  const updateSkill = async (userSkillId, lvl) => {
    const token = await AsyncStorage.getItem("token")
    api.put(`/api/usuarioSkill/${userSkillId}`, { headers: { "Authorization": `${token}`, "Accept": "application/json"}})
      .then(() => 
        getSkills()
      );
  };

  //post

  const addSkill = async (skillId, lvl) => {
    const token = await AsyncStorage.getItem("token")
    const userId = await AsyncStorage.getItem("userId")
    api.post(`/api/usuarioSkill/`, { headers: { "Authorization": `${token}`, "Accept": "application/json"}})
      .then(() => 
        getSkills()
      );
  };

  //outras funcoes

  const handleLogout = () => {
    logout();
    navigation.navigate("Login");
  };

  function onOpen() {
    modalizeRef.current?.open();
  }
  
  return (
    <View style={styles.boxHome}>

      <Image style={styles.logo} source={require("../../../assets/Logo.png")}/>

      <TouchableOpacity>
        <Text style={styles.abrirModal} onPress={onOpen} >ADICIONAR SKILL</Text>
      </TouchableOpacity>
      
      <Text onPress={() => handleLogout()} style={styles.link}>
        LOGOUT
      </Text>


      {/* Modal */}

      <Modalize
        ref={modalizeRef}
        snapPoint={250}
      >
        <View style={styles.boxModal}>

            <SelectList
              setSelected={setSkill} 
              // data={}
              placeholder={"Selecione uma skill"}
              // defaultOption={}
            />

            <TextInput
              placeholder="lvl"
              placeholderTextColor="#918d8d"
              onChangeText={setLvl}
              keyboardType = 'number-pad'
              value={lvl}
              style={styles.input}
            />

            <TouchableOpacity>
                <Text>ADICIONAR</Text>
            </TouchableOpacity>
        </View>
      </Modalize>

    </View>
  );
};

export default Home;
