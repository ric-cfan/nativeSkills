import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useContext, useEffect, useState  } from "react";
import { Image, Text, TextInput, TouchableOpacity, View, FlatList, Alert, Modal } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { AuthContext } from "../../Context/auth";
import { api } from "../../services/api";
import { styles } from "./styles";
import { SelectList } from "react-native-dropdown-select-list";
import { SkillCard } from "../../components/SkillCard";

const Home = () => {
  const { logout } = useContext(AuthContext);
  const navigation = useNavigation();
  const [userSkills, setUserSkills] = useState([]);
  const [generalSkills, setGeneralSkills] = useState([]);
  const [selected, setSelected] = useState([]);
  const [skill, setSkill] = useState(0);
  const [lvl, setLvl] = useState(0);
  const [userName, setUserName] = useState("")
  const [modalOn, setModalOn] = useState(false);

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
    if(skillId == 0){
      Alert.alert("Ocorreu um erro e a skill não foi adicionada","Você precisa escolher uma skill", [
        {text: "OK"}
      ])
      return null;
    } 
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
    setSkill(0);
    setModalOn(true);
  }
  
  return (
    <View style={styles.boxHome}>

      <View style={styles.topo}>

      <Image style={styles.logo} source={require("../../../assets/Logo.png")}/>

      <View style={styles.centroTopo}>
        <Text style={{color:"#fff"}} >Bem vindo, {userName}!</Text>

        <TouchableOpacity >
          <View style={styles.abrirModal}>
          <Text onPress={() => onOpen()} style={{color:"#fff", fontWeight: "bold", textAlign: "center"}} >ADICIONAR SKILL</Text>
          </View>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => handleLogout()} style={styles.logout}>
        <Text style={{color:"#fff", fontWeight: "bold", 
        // fontSize: "50", 
        textAlign: "center"}}>LOGOUT</Text>
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

      <Modal
        animationType="fade"
        visible={modalOn}
        transparent={true}
      >
        <View style={styles.boxModal}>

        <Text style={{color:"#c7ac61", 
        fontWeight:"bold", textAlign: "center"}}>APRENDENDO NOVA SKILL</Text>

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
          <Text style={{color:"#fff", 
          fontWeight:"bold"}}>Selecione o nível da skill:</Text>
            <TextInput
              placeholder="lvl"
              placeholderTextColor="#918d8d"
              onChangeText={setLvl}
              keyboardType = 'number-pad'
              value={lvl}
              style={styles.input}
            />
          </View>

            <TouchableOpacity onPress={() => addSkill(skill, lvl)} >
              <View style={styles.adicionar}>
                <Text style={{color:"#fff", 
                fontWeight:"bold"}}>ADICIONAR</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setModalOn(false)} >
              <View style={styles.voltar}>
                <Text style={{color:"#fff", 
                fontWeight:"bold"}}>VOLTAR</Text>
                </View>
            </TouchableOpacity>
        </View>
      </Modal>

    </View>
  );
};

export default Home;
