import React from "react";
import { Button, Text, View, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Favorite({ navigation }) {
   return (
      <View>
         <Text>Здесь представлен список расётов</Text>
      </View>
   );
}

export default function FavoriteScreen() {
   const FavoriteStack = createNativeStackNavigator();

   return (
      <FavoriteStack.Navigator>
         <FavoriteStack.Screen name='Избранные расчёты' component={Favorite} />
         <FavoriteStack.Screen name='Расчёты' component={Favorite} />
      </FavoriteStack.Navigator>
   );
}