import React from "react";
import { Text, Image, StyleSheet } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import Background from "../componetnts/Background";
import { SOURCE, STYLE, TEXT } from "../styles";

export default function AboutScreen() {

   return (
      <Background>
         <SafeAreaView style={STYLE.CONTAINER}>
            <Text style={TEXT.HEADER}>Информация о приложении</Text>
            <Image source={SOURCE.LOGO} style={styles.logo}></Image>
            <Text>Все вопросы и пожелания присылать по адресу:</Text>
            <Text style={TEXT.BOLD}>dev.986.team@gmail.com</Text>
         </SafeAreaView>
         <Text>Версия 1.0.0</Text>
      </Background>
   );
}

const styles = StyleSheet.create({
   logo: {
      width: 200,
      height: 200
   }
})