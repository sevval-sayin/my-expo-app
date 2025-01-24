import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image, Dimensions } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

const networks = [
  {
    id: 1,
    name: "Ethereum",
    description: "Merkeziyetsiz platform.",
    image: "https://via.placeholder.com/300x200?text=Ethereum",
    icon: "ethereum",
  },
  {
    id: 2,
    name: "Binance Smart Chain",
    description: "Hızlı ve düşük maliyetli ağ.",
    image: "https://via.placeholder.com/300x200?text=Binance",
    icon: "currency-btc",
  },
  {
    id: 3,
    name: "Polkadot",
    description: "Farklı zincirleri bağlayan protokol.",
    image: "https://via.placeholder.com/300x200?text=Polkadot",
    icon: "dots-horizontal",
  },
  {
    id: 4,
    name: "Cardano",
    description: "Bilimsel bir yaklaşımla geliştirildi.",
    image: "https://via.placeholder.com/300x200?text=Cardano",
    icon: "alpha-c-circle",
  },
];

const { width } = Dimensions.get("window");

const NetworksSection = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("Details", { network: item })}
      style={{
        width: width * 0.4,
        backgroundColor: "rgba(255,255,255,0.9)",
        borderRadius: 10,
        padding: 8,
        marginHorizontal: width * 0.02,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        alignSelf: "center",
      }}
    >
      <View style={{ alignItems: "center", marginBottom: 8 }}>
        <MaterialCommunityIcons name={item.icon} size={22} color="#3498db" />
      </View>
      <Image
        source={{ uri: item.image }}
        style={{ width: "100%", height: 70, borderRadius: 6 }}
        resizeMode="cover"
      />
      <View style={{ marginTop: 6 }}>
        <Text
          style={{
            fontSize: 12,
            fontWeight: "bold",
            color: "#3498db",
            textAlign: "center",
          }}
        >
          {item.name}
        </Text>
        <Text style={{ fontSize: 10, color: "#555", textAlign: "center" }}>
          {item.description}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{ marginTop: 16 }}>
      <Text
        style={{
          fontSize: 16,
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: 12,
        }}
      >
        Desteklenen Ağlar
      </Text>
      <FlatList
        data={networks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: width * 0.02,
          justifyContent: "center",
        }}
        snapToAlignment="center"
        snapToInterval={width * 0.44}
        decelerationRate="fast"
      />
    </View>
  );
};

export default NetworksSection;
