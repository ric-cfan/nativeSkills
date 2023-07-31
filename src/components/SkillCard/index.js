import AsyncStorage from "@react-native-async-storage/async-storage";
import { api } from "../../services/api";
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { useState, useEffect } from 'react';
import { styles } from './styles';

export const SkillCard = ({ item }) => {
  const [lvl, setLvl] = useState(0);
  const [newLvl, setNewLvl] = useState(0)
  const [isShown, setIsShown] = useState(true)

  useEffect(() => {
    setNewLvl(item.lvl)
  }, []);

  const updateSkill = async (userSkillId, lvl) => {
    const token = await AsyncStorage.getItem("token")

    const updatedSkill = {
      id: userSkillId,
      lvl: lvl,
    }

    api.put(`/api/usuarioSkill/${userSkillId}`, updatedSkill, { headers: { "Authorization": `${token}`, "Accept": "application/json"}})
      .then(() => 
        setNewLvl(parseInt(lvl))
      );
  };

  const deleteSkill = async (userSkillId) => {
    const token = await AsyncStorage.getItem("token")
    await api.delete(`/api/usuarioSkill/${userSkillId}`, { headers: { "Authorization": `${token}`, "Accept": "application/json"}})
      .then(() => 
        setIsShown(false)
      );
  };

    if (isShown) {
    return (
                <View style={styles.mainCard}>
                    <View style={styles.containerCard}>

                    <Text style={styles.textoNome}>{item.skill.nome}</Text>
                       
                        <Image source={{ uri: item.skill.urlImagem }} style={styles.img} />
               
                        <View>
                          <View style={{alignItems:"center", marginBottom:14}}>
                            <Text style={styles.texto}>Descrição: {item.skill.descricao}</Text>
                            <Text style={styles.texto}>Level: {newLvl}</Text>

                            <Text style={styles.textoLvl}>Subiu de lvl? Selecione o novo número abaixo e clique em atualizar!</Text>
                            </View>
                        
                          <View style={{alignItems:"center"}}>
                          <TextInput
                            placeholder="lvl"
                            placeholderTextColor="#918d8d"
                            onChangeText={setLvl}
                            keyboardType = 'number-pad'
                            value={lvl}
                            style={styles.input}
                          />
                          </View>

                        <View style={styles.botoes}>
                          <TouchableOpacity onPress={() => updateSkill(item.id, lvl)} style={styles.atualizar}>
                            <Text style={{color: "#fff", fontWeight: "bold"}}>ATUALIZAR</Text>
                          </TouchableOpacity>

                          <TouchableOpacity onPress={() => deleteSkill(item.id)} style={styles.deletar}>
                            <Text style={{color: "#fff", fontWeight: "bold"}}>DELETAR</Text>
                          </TouchableOpacity>
                          </View>
                        </View>
                </View>
         
        </View>
    )
  } 
};