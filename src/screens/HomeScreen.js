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

const styles = StyleSheet.create({
    header: {
      marginBottom: 20,
      justifyContent: "center", // Dikeyde ortalar
      alignItems: "center", // Yatayda ortalar
      paddingHorizontal: 20, // Yatayda boşluk bırakır
      paddingTop: 50, // Üstten yeterli boşluk bırakır
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      textAlign: "center",
      color: "#3498db",
      marginBottom: 10, // Başlık ve alt metin arasında boşluk
    },
    subtitle: {
      fontSize: 16,
      textAlign: "center",
      color: "#555",
      marginTop: 10,
    },
  });
  

export default HomeScreen;
