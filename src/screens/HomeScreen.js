import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import Layout from "../components/Layout";
import NetworksSection from "../components/NetworksSection";
import FAQSection from "../components/FAQSection";

const HomeScreen = () => {
  return (
    <Layout>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>
            Purgatorydao Güçlü Altyapı ve Çok Zincirli Çözümler
          </Text>
          <Text style={styles.subtitle}>
            Purgatorydao, çok zincirli ağlarda lider bir doğrulayıcı ve katkı
            sağlayıcıdır. Güvenilir altyapımızdan faydalanın ve geliştiriciler
            için optimize edilmiş araçlarımızı keşfedin.
          </Text>
        </View>
        <NetworksSection />
        <FAQSection />
      </ScrollView>
    </Layout>
  );
};

//Deneme
const styles = StyleSheet.create({
    header: {
      marginBottom: 20,
      justifyContent: "center", 
      alignItems: "center", 
      paddingHorizontal: 20, 
      paddingTop: 50, 
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      textAlign: "center",
      color: "#3498db",
      marginBottom: 10, 
    },
    subtitle: {
      fontSize: 16,
      textAlign: "center",
      color: "#555",
      marginTop: 10,
    },
  });
  

export default HomeScreen;
