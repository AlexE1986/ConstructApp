import React, { } from "react";
import { ImageBackground, View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome5 } from '@expo/vector-icons';
import { COLOR, FONT, STYLES, TEXT, TEXT_STYLES } from "../types/theme";

export default function HomeScreen({ navigation }) {
   return (
      <SafeAreaView style={STYLES.CONTAINER}>
         <Text style={TEXT.HEADER}>Добро пожаловать!</Text>
         <Text style={styles.text}>Перечень расчётов:</Text>
         <View style={styles.row}>
            <Text>1. Расчёт характеристик трубы</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Калькулятор трубы')}>
               <FontAwesome5 name="arrow-alt-circle-right" size={24} color="black" />
            </TouchableOpacity>
         </View>
         <Text style={styles.textSmall}>   В данный момент мы пополняем библиотеку расчётов. С радостью прислушаемся к вашим пожеланиям. Связь с нами на вкладке Info</Text>
      </SafeAreaView>
   );
}

const styles = StyleSheet.create({
   row: {
      flexDirection: 'row',
      width: '100%',
      alignItems: 'center',
      padding: 10,
      justifyContent: 'space-between',
      borderBottomWidth: 1
   },
   text: {
      paddingBottom: 10
   },
   textSmall: {
      fontSize: 12
   }
});