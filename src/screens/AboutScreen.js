import React from "react";
import { View, Text, Image, StyleSheet } from 'react-native';
import { COLOR, FONT } from "../types/theme";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AboutScreen({ navigation }) {

   return (
      <SafeAreaView style={styles.container}>
         <View style={{ alignItems: 'center' }}>
            <Image source={require('../../assets/986_logo.png')} style={styles.logo}></Image>
            <Text style={styles.text}>Все вопросы и пожелания присылать по адресу:</Text>
            <Text style={styles.textBold}>dev.986.team@gmail.com</Text>
         </View>
         <Text style={styles.text}>Версия 1.0.0</Text>
      </SafeAreaView>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: COLOR.BACKGROUND,
      padding: 10
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