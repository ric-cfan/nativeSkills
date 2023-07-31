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
        <View style={styles.container}>
            <TouchableOpacity>
                <View style={styles.main}>
                    <Text style={styles.textoNome}>{item.skill.nome}</Text>
                    <View style={styles.containerCard}>

                        <Image source={{ uri: item.skill.urlImagem + '?' + new Date() }} style={styles.img} />

                        <View>
                            <Text style={styles.texto}>Descrição: {item.skill.descricao}</Text>
                            <Text style={styles.texto}>Level: {newLvl}</Text>

                            <Text style={styles.texto}>Subiu de lvl? Selecione o novo número e clique em atualizar</Text>
                          <TextInput
                            placeholder="lvl"
                            placeholderTextColor="#918d8d"
                            onChangeText={setLvl}
                            keyboardType = 'number-pad'
                            value={lvl}
                            style={styles.input}
                          />

                        <View>
                          <TouchableOpacity onPress={() => updateSkill(item.id, lvl)}>
                            <Text>ATUALIZAR</Text>
                          </TouchableOpacity>

                          <TouchableOpacity onPress={() => deleteSkill(item.id)}>
                            <Text>DELETAR</Text>
                          </TouchableOpacity>
                        </View>

                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
  } 
};