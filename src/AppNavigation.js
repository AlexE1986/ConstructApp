// Библиотеки

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Компоненты

import AboutScreen from './screens/AboutScreen';
import HomeScreen from './screens/HomeScreen';
import FavoriteScreen from './screens/FavoriteScreen';
import CalcPipe from './componetnts/calculations/CalcPipe';

import { COLOR } from './styles';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function HomeTabs() {
   return (
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
         })
         }
         shifting={true}
         activeColor={COLOR.ACTIVE}
         inactiveColor={COLOR.INACTIVE}
         barStyle={{
            backgroundColor: COLOR.MAIN,
         }}
      >
         <Tab.Screen name='Главная' component={HomeScreen} />
         <Tab.Screen name='Избранные' component={FavoriteScreen} />
         <Tab.Screen name='Инфо' component={AboutScreen} />
      </Tab.Navigator >
   );
}



export default function AppNavigation() {
   return (
      <SafeAreaProvider>
         <NavigationContainer >
            <Stack.Navigator initialRouteName='Перечень расчетов'
               screenOptions={{
                  headerStyle: {
                     backgroundColor: COLOR.MAIN
                  },
                  headerTintColor: COLOR.ACTIVE
               }}
            >
               <Stack.Screen name='Помощник конструктора' component={HomeTabs} options={{ headerShown: false }} />
               <Stack.Screen name='Калькулятор трубы' component={CalcPipe} />
            </Stack.Navigator>
         </NavigationContainer>
      </SafeAreaProvider>
   );
}