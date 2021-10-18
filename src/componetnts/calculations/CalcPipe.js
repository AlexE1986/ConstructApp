import React, { useState } from "react";
import { ScrollView, View, Text, Image, TextInput, StyleSheet } from 'react-native';

import { COLOR, STYLE, TEXT } from '../../styles'

export default function CalcPipe() {

   const [dia, setDia] = useState(null);
   const [thin, setThin] = useState(null);
   const [value1, setValue1] = useState('-');
   const [value2, setValue2] = useState('-');
   const [value3, setValue3] = useState('-');
   const [value4, setValue4] = useState('-');

   const setDiaHandler = (dia) => {
      setDia(dia);
      calc(dia, thin);
   };

   const setThinHandler = (thin) => {
      setThin(thin);
      calc(dia, thin);
   };

   const calc = (dia, thin) => {

      let val1 = (Math.PI * ((+dia / 10) ** 4 - (+dia / 10 - 2 * (+thin / 10)) ** 4) / 64).toFixed(0);
      let val2 = (Math.PI * ((+dia / 10) ** 2 - (+dia / 10 - 2 * (+thin / 10)) ** 2) / 4).toFixed(2);
      let val3 = (Math.PI * ((+dia / 10) ** 4 - (+dia / 10 - 2 * (+thin / 10)) ** 4) / 32 / (+dia)).toFixed(2);
      let val4 = ((val1 / val2) ** 0.5).toFixed(2);

      if (+dia <= +thin || isNaN(+dia) || isNaN(+thin) || +dia === 0 || +thin === 0) {
         val1 = val2 = val3 = val4 = '-';
      };

      setValue1(val1);
      setValue2(val2);
      setValue3(val3);
      setValue4(val4);
   };

   const Row = ({ text, value }) => {
      return (
         <View style={STYLE.ROW}>
            <View style={{ width: '75%' }}>
               <Text>{text}</Text>
            </View>
            <View style={{ ...STYLE.CENTER, width: '25%' }}>
               <Text>{value}</Text>
            </View>
         </View>
      );
   };

   return (
      <ScrollView>
         <View style={STYLE.CONTAINER}>
            <Text style={TEXT.HEADER}>Исходные данные</Text>
            <Image source={require('../../../assets/calculations/pipe.png')} style={{ width: 200, height: 150, resizeMode: 'contain' }} />
            <View>
               <Text>Введите наружный диаметр трубы в мм (D)</Text>
               <TextInput
                  style={styles.input}
                  placeholder='D - диаметр трубы в мм'
                  keyboardType='numeric'
                  autoCorrect={false}
                  value={dia}
                  onChangeText={setDiaHandler}
               />
            </View>
            <View style={styles.center}>
               <Text>Введите толщину стенки трубы в мм (t)</Text>
               <TextInput
                  style={styles.input}
                  placeholder='t - толщина стенки  трубы в мм'
                  keyboardType='numeric'
                  value={thin}
                  onChangeText={setThinHandler}
               />
            </View>
            <View style={styles.center}>
               <Text style={TEXT.HEADER}>Результаты расчёта</Text>
               <Row text='Момент инерции J (см4)' value={value1} />
               <Row text='Площадь сечения А (см2)' value={value2} />
               <Row text='Момент сопроитивления W (см3)' value={value3} />
               <Row text='Радиус инерции i (см)' value={value4} />
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