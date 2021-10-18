import React, { } from "react";
import { View, Text, StyleSheet, TouchableOpacity, useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome5 } from '@expo/vector-icons';
import { COLOR, STYLE, TEXT } from "../styles";
import Background from "../componetnts/Background";

export default function HomeScreen({ navigation }) {
   const width = useWindowDimensions().width * 0.9;
   return (
      <Background>
         <SafeAreaView style={{ ...STYLE.CONTAINER, paddingBottom: 10 }}>
            <Text style={TEXT.HEADER}>Добро пожаловать!</Text>
            <Text>Перечень расчётов:</Text>
            <View style={{ ...STYLE.ROW, ...styles.row, width }}>
               <Text>1. Расчёт характеристик трубы</Text>
               <TouchableOpacity onPress={() => navigation.navigate('Калькулятор трубы')} style={{ width: 24 }}>
                  <FontAwesome5 name="arrow-alt-circle-right" size={24} color="black" />
               </TouchableOpacity>
            </View>
            <Text style={styles.textSmall}>   В данный момент мы пополняем библиотеку расчётов. С радостью прислушаемся к вашим пожеланиям. Связь с нами на вкладке Info</Text>
         </SafeAreaView>

      </Background>
   );
}

const styles = StyleSheet.create({
   row: {
      borderBottomWidth: 1,
      borderBottomColor: COLOR.MAIN,
      margin: 10,
      padding: 5
   },
   textSmall: {
      fontSize: 12
   }
});