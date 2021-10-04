import React, { useState, useRef } from "react";
import { ScrollView, View, Text, Image, TextInput, StyleSheet } from 'react-native';

import { COLOR, STYLES, TEXT } from '../../types/theme'

export default function CalcPipe() {

   const [dia, setDia] = useState(null);
   const [thin, setThin] = useState(null);

   const setDiaHandler = (e) => {
      console.log(e.current.value);
   }

   return (
      <ScrollView>
         <View style={STYLES.CONTAINER}>
            <Text style={TEXT.HEADER}>Расчёт характеристик трубы</Text>
            <Image source={require('../../../assets/calculations/pipe.png')} style={{ width: 200, height: 150, resizeMode: 'contain' }} />
            <View>
               <Text>Введите наружный диаметр трубы в мм (D)</Text>
               <TextInput
                  style={styles.input}
                  placeholder='D - диаметр трубы в мм'
                  keyboardType='numeric'
                  autoCorrect={false}
                  value={dia}
                  onChange={setDiaHandler}
               />
            </View>
            <View style={styles.center}>
               <Text>Введите толщину стенки трубы в мм (t)</Text>
               <TextInput
                  style={styles.input}
                  placeholder='t - толщина стенки  трубы в мм'
                  keyboardType='numeric'
               />
            </View>
            <View>
               <Text> Геометрические характеристики трубы:</Text>
               <View style={STYLES.ROW}>
                  <Text>Момент инерции J (см4)</Text>
                  <Text>bhjbkj</Text>
               </View>
            </View>
         </View>
      </ScrollView>
   );
}

const styles = StyleSheet.create({
   center: {
      alignItems: 'center',
      justifyContent: 'center'
   },
   input: {
      width: 300,
      backgroundColor: '#ffffff',
      margin: 5,
      padding: 5,
      borderWidth: 1,
      borderColor: COLOR.MAIN
   }
})