import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from "react";
import { Seguindo } from "../src/screens/Seguindo";
import { cores } from "../utils/cores";



const Tab = createMaterialBottomTabNavigator();

export const Routes = () => {

    return(
        <NavigationContainer>
      <Tab.Navigator
        activeColor={cores.brandLight}
        inactiveColor={cores.textColor}
        shifting={false}
        initialRouteName={'Seguindo'}
        barStyle={{backgroundColor: cores.background}}>
        <Tab.Screen
          name={'Seguindo'}
          options={{
            tabBarLabel: 'Seguindo',
            tabBarIcon: ({color}) => {
              return (
                <MaterialCommunityIcons
                  name={'heart'}
                  size={20}
                  color={color}
                />
              );
            },
          }}
          component={Seguindo}
        />
        <Tab.Screen
          name={'Descubra'}
          options={{
            tabBarLabel: 'Descubra',
            tabBarIcon: ({color}) => {
              return (
                <MaterialCommunityIcons
                  name={'compass'}
                  size={20}
                  color={color}
                />
              );
            },
          }}
          component={Seguindo}
        />
        <Tab.Screen
          name={'Procurar'}
          options={{
            tabBarLabel: 'Procurar',
            tabBarIcon: ({color}) => {
              return (
                <MaterialCommunityIcons
                  name={'content-copy'}
                  size={20}
                  color={color}
                />
              );
            },
          }}
          component={Seguindo}
        />
        <Tab.Screen
          name={'Busca'}
          options={{
            tabBarLabel: 'Busca',
            tabBarIcon: ({color}) => {
              return (
                <MaterialCommunityIcons
                  name={'magnify'}
                  size={20}
                  color={color}
                />
              );
            },
          }}
          component={Seguindo}
        />
      </Tab.Navigator>
    </NavigationContainer>



    );

}