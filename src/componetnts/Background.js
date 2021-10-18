import React from "react";
import { View, ImageBackground } from "react-native";
import { SOURCE, STYLE } from "../styles";

export default function Background({ children }) {
   return (
      <View style={STYLE.WRAPPER}>
         <ImageBackground source={SOURCE.BGIMAGE} style={STYLE.BACKGROUND}>
            {children}
         </ImageBackground>
      </View>
   );
};