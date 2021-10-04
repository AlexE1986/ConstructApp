import React from "react";
import { View, Text, Image, TextInput, StyleSheet } from 'react-native';

import { FONT } from '../../types/theme'

export default function CalcPipe() {
   return (
      <View style={styles.wrapper}>
         <Text style={styles.header}>Расчёт характеристик трубы</Text>
         <Image source={require('../../../assets/calculations/pipe.png')} />
         <View style={styles.input}>
            <Text style={styles.center}  >D - диаметр трубы</Text>
            <TextInput
               placeholder='D - диаметр трубы в мм'
               keyboardType='numeric'
            />
         </View>

      </View>
   );
}

const styles = StyleSheet.create({
   wrapper: {
      alignItems: 'center',
      margin: 10
   },
   center: {
      alignItems: 'center',
      justifyContent: 'center'
   },
   header: {
      fontFamily: FONT.BOLD
   },
   input: {
      flexDirection: 'row',
      backgroundColor: '#ffffff',
      margin: 5,
      padding: 5
   }
})