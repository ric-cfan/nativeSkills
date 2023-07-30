import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        "Content-Type": "application/json",
        'Authorization': 'Bearer ' + AsyncStorage.getItem('token')    
      },
      
})