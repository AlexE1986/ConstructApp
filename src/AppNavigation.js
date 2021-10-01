// Библиотеки

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';

// Компоненты

import AboutScreen from './screens/AboutScreen';
import HomeScreen from './screens/HomeScreen';
import FavoriteScreen from './screens/FavoriteScreen';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { COLOR } from './types/theme';

const Tab = createMaterialBottomTabNavigator();

export default function AppNavigation() {
   return (
      <NavigationContainer>
         <Tab.Navigator initialRouteName='Home'
            screenOptions={({ route }) => ({
               tabBarIcon: ({ color, size }) => {
                  let iconName;
                  if (route.name === 'Главная') {
                     iconName = 'home';
                  } else if (route.name === 'Избранные') {
                     iconName = 'star';
                  } else if (route.name === 'Инфо') {
                     iconName = 'info';
                  }
                  size = 20;

                  return <FontAwesome5 name={iconName} size={size} color={color} />;
               }
            })}
            shifting='true'
            activeColor={COLOR.ACTIVE}
            inactiveColor={COLOR.INACTIVE}
            barStyle={{
               backgroundColor: COLOR.MAIN,

            }}
         >
            <Tab.Screen name='Главная' component={HomeScreen} options={{ headerShown: false }} />
            <Tab.Screen name='Избранные' component={FavoriteScreen} options={{ headerShown: false }} />
            <Tab.Screen name='Инфо' component={AboutScreen} />
         </Tab.Navigator>
      </NavigationContainer>
   );
}