import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useContext, useEffect, useState, useRef } from "react";
import { Image, Text, TextInput, TouchableOpacity, View, FlatList, Alert } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { AuthContext } from "../../Context/auth";
import { api } from "../../services/api";
import { styles } from "./styles";
import { Modalize } from "react-native-modalize";
import { SelectList } from "react-native-dropdown-select-list";
import { SkillCard } from "../../components/SkillCard";

const Home = () => {
  const { logout } = useContext(AuthContext);
  const navigation = useNavigation();
  const [userSkills, setUserSkills] = useState([]);
  const [generalSkills, setGeneralSkills] = useState([]);
  const [selected, setSelected] = useState([]);
  const [skill, setSkill] = useState([]);
  const [lvl, setLvl] = useState(0);
  const modalizeRef = useRef(null);
  const [userName, setUserName] = useState("")

  useEffect(() => {
    getUserId() 
    getGeneralSkills()
  }, []);

  useEffect(() => {
    console.log(skill)
  }, [skill]);

  //requisicoes
  //gets

  const getUserId = async() => {
    const token = await AsyncStorage.getItem("token")
    const username = await AsyncStorage.getItem("username")
    setUserName(username)
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
    console.log(response.data)
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
    let newArray = response.data.map((item) => {
      return { key: item.id, value: item.nome }
  })
    setGeneralSkills(newArray);
    } 
    catch {
      console.error(error);
    };
  }

  //post

  const addSkill = async (skillId, lvl) => {
    const token = await AsyncStorage.getItem("token")
    const userId = await AsyncStorage.getItem("userId")

    const newSkill = {
      lvl: lvl,
      skill: {
        id: skillId
      },
      usuario: {
        id: userId
      }
    }

    api.post(`/api/usuarioSkill/`, newSkill, { headers: { "Authorization": `${token}`, "Accept": "application/json"}})
      .then(() => 
        getUserSkills()
      );
      Alert.alert("Você está mais forte","Skill adicionada com sucesso!", [
        {text: "OK"}
      ])
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

      <View style={styles.topo}>

      <Image style={styles.logo} source={require("../../../assets/Logo.png")}/>

      <View style={styles.centroTopo}>
        <Text style={{color:"#fff"}} >Bem vindo, {userName}!</Text>

        <TouchableOpacity style={styles.abrirModal}>
          <Text onPress={onOpen} style={{color:"#fff", fontWeight: "bold", textAlign: "center"}} >ADICIONAR SKILL</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => handleLogout()} style={styles.logout}>
        <Text style={{color:"#fff", fontWeight: "bold", fontSize: "50", textAlign: "center"}}>LOGOUT</Text>
        <Icon name="logout" size={30} color = "#fff" />
      </TouchableOpacity>
    </View>

      <View style={styles.mainBody}>

        <View style={styles.listaUserSkills}>
          <FlatList
            data={userSkills}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <SkillCard item={item} />}
          />
        </View>

      </View>


      {/* Modal */}

      <Modalize
        ref={modalizeRef}
        // panGestureEnabled={false}
        // adjustToContentHeight={true}
        // tapGestureEnabled={false}
      >
        <View style={styles.boxModal}>

        <Text style={{color:"#c7ac61", fontSize:"50", fontWeight:"bold"}}>APRENDENDO NOVA SKILL</Text>

          <View style={styles.selectContainer}>
            <SelectList
              setSelected={(val) => setSelected(val)} 
              data={generalSkills}
              save={"key"}
              onSelect={() => setSkill(selected)}
              placeholder={"Selecione uma skill"}
              // defaultOption={}
            />
          </View>

          <View style={styles.inputETitulo}>
          <Text style={{color:"#fff", fontSize:"20", fontWeight:"bold"}}>Selecione o nível da skill:</Text>
            <TextInput
              placeholder="lvl"
              placeholderTextColor="#918d8d"
              onChangeText={setLvl}
              keyboardType = 'number-pad'
              value={lvl}
              style={styles.input}
            />
          </View>

            <TouchableOpacity onPress={() => addSkill(skill, lvl)} style={styles.addSkill}>
                <Text style={{color:"#fff", fontSize:"70", fontWeight:"bold"}}>ADICIONAR</Text>
            </TouchableOpacity>
        </View>
      </Modalize>

    </View>
  );
};

export default Home;
