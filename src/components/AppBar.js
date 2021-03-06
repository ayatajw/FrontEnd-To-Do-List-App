import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function AppBar(){
  return (
    <View style={styles.appBar}>
      <Text style={styles.heading}>Ayat- Todo List App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  appBar: {
    backgroundColor: "#0e2477",
    color: "white",
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  heading: {
    color: "white",
    fontSize: 24,
    fontWeight: "400"
  }
});
