import React, { Component } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { BlurView } from "@react-native-community/blur";

export default function Menu() {

  return (
    <View style={styles.container}>
      <Image

        source={require("./image/1.jpeg")}
        style={{width:"100%",height:"100%"}}
      />
      
      <BlurView
        style={{position: "absolute",width:350,height:150, justifyContent:"center",alignItems:"center"}}
        blurType="light"
        blurAmount={20}
        
        reducedTransparencyFallbackColor="white">
        <Text style={{fontSize:20,fontWeight:'bold',color:"white"}}>Hi, I am some blurred text</Text>
        </BlurView>
        
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center"
  },
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }
});