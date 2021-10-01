import React from "react";
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FONT } from "../types/theme";


export default function AboutScreen({ navigation }) {

   const AboutStack = createNativeStackNavigator();

   function AboutStackScreen() {
      return (
         <AboutStack.Navigator>
            <AboutStack.Screen name='About' component={AboutScreen} />
         </AboutStack.Navigator>
      );
   }

   return (
      <View style={styles.center}>
         <View style={{ alignItems: 'center' }}>
            <Image source={require('../../assets/986_logo.png')} style={styles.logo}></Image>
            <Text style={styles.text}>Все вопросы и пожелания присылать по адресу:</Text>
            <Text style={styles.textBold}>dev.986.team@gmail.com</Text>
         </View>
         <Text style={styles.text}>Версия 1.0.0</Text>
      </View>
   );
}

const styles = StyleSheet.create({
   center: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#ffffff'
   },
   text: {
      textAlign: 'center',
      fontFamily: FONT.REGULAR
   },
   textBold: {
      fontFamily: FONT.BOLD
   },
   logo: {
      width: 200,
      height: 200
   }
})