import React from "react";
import { View, Text, Image, StyleSheet } from 'react-native';

export default function CalcPipe() {
   return (
      <View style={styles.center}>
         <Text>Расчёт характеристик трубы</Text>
         <Image source={require('../../../assets/calculations/pipe.png')} />
      </View>
   );
}

const styles = StyleSheet.create({
   center: {
      alignItems: 'center'
   }
})