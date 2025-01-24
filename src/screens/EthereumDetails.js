import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const EthereumDetails = ({ route }) => {
  const { network } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: network.image }} style={styles.image} />
      <Text style={styles.title}>{network.name}</Text>
      <Text style={styles.description}>{network.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
  },
});

export default EthereumDetails;
