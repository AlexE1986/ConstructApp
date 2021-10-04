import React, { } from "react";
import { Image, View, Text, Button, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen({ navigation }) {
   return (
      <SafeAreaView>
         <Text>Перечень расчётов:</Text>
         <View style={styles.row}>
            <Image style={{ width: 50, height: 50 }} source={require('../../assets/calculations/pipe.png')} />
            <Button onPress={() => navigation.navigate('Калькулятор трубы')} title='К расчёту' />
         </View>
      </SafeAreaView>
   );
}

const styles = StyleSheet.create({
   center: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ffffff'
   }
});