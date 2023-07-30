import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react";
import Cadastro from "../screens/Cadastro/index";
import Home from '../screens/Home';
import Login from "../screens/Login/index";
const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
            }}>
                <Screen
                    name="Login"
                    component={Login}
                />
                <Screen
                    name="Cadastro"
                    component={Cadastro}
                />
                 <Screen
                    name="Home"
                    component={Home}
                />

                   
              </Navigator>
    )

}