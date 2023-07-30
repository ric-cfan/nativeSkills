import { StatusBar } from "react-native";
import { AuthProvider } from "./src/Context/auth";

import { Routes } from "./src/Routes";
export default function App() {


  
  return (
  <>
    <AuthProvider>

    
    <StatusBar 
        barStyle="light-content"
        backgroundColor= "transparent"
        translucent/>
    <Routes />
    </AuthProvider>
 </>
   
   
  );
}

