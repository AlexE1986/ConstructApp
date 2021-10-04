import React from "react";
import { Button, Text, View, StyleSheet } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { STYLES } from "../types/theme";

export default function FavoriteScreen() {

   return (
      <SafeAreaView style={STYLES.CONTAINER}>
         <Text>Здесь представлен список избранных расётов</Text>
      </SafeAreaView>
   );
}