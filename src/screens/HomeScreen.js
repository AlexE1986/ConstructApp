import React, { } from "react";
import { Image, View, Text, Button, StyleSheet } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CalcPipe from "../componetnts/calculations/CalcPipe";

function Home({ navigation }) {
   return (
      <View>
         <Text>Перечень расчётов:</Text>
         <View style={styles.row}>
            <Image style={{ width: 50, height: 50 }} source={require('../../assets/calculations/pipe.png')} />
            <Button onPress={() => navigation.navigate('Калькулятор трубы')} title='К расчёту' />
         </View>
      </View>
   );
}

export default function HomeScreen() {
   navigation.navigate('Перечень расчётов');

   const HomeScreenStack = createNativeStackNavigator();

   return (
      <HomeScreenStack.Navigator initialRouteName='Перечень расчетов'>
         <HomeScreenStack.Screen name='Перечень расчетов' component={Home} />
         <HomeScreenStack.Screen name='Калькулятор трубы' component={CalcPipe} />
      </HomeScreenStack.Navigator>
   );
}

const styles = StyleSheet.create({
   center: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ffffff'
   }
});