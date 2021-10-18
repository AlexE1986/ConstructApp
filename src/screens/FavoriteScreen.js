import React from "react";
import { Text } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import Background from "../componetnts/Background";
import { STYLE, TEXT } from "../styles";

export default function FavoriteScreen() {

   return (
      <Background>
         <SafeAreaView style={STYLE.CONTAINER}>
            <Text style={TEXT.HEADER}>Избранные расчёты</Text>
            <Text>Здесь представлен список избранных расётов</Text>
         </SafeAreaView>
      </Background>
   );
}