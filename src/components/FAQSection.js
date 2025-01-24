import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Collapsible from "react-native-collapsible";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    { title: "Purgatorydao Nedir?", body: "Çok zincirli ekosistemlere katkı sağlayan bir ekip." },
    { title: "Hangi Hizmetleri Sunuyoruz?", body: "Doğrulayıcılar için kapsamlı çözümler sunuyoruz." },
    { title: "Güvenlik Önlemlerimiz Nelerdir?", body: "SSH anahtarları ve iki faktörlü kimlik doğrulama kullanıyoruz." },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sıkça Sorulan Sorular</Text>
      {faqData.map((item, index) => (
        <View key={index}>
          <TouchableOpacity onPress={() => toggleAccordion(index)} style={styles.accordionHeader}>
            <Text style={styles.accordionHeaderText}>{item.title}</Text>
          </TouchableOpacity>
          <Collapsible collapsed={activeIndex !== index}>
            <View style={styles.accordionBody}>
              <Text style={styles.accordionBodyText}>{item.body}</Text>
            </View>
          </Collapsible>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginTop: 20 },
  title: { fontSize: 20, fontWeight: "bold", textAlign: "center", marginBottom: 10 },
  accordionHeader: { backgroundColor: "#f1f1f1", padding: 15, borderRadius: 8, marginBottom: 5 },
  accordionHeaderText: { fontSize: 16, fontWeight: "bold", color: "#333" },
  accordionBody: { backgroundColor: "#fafafa", padding: 15, borderRadius: 8 },
  accordionBodyText: { fontSize: 14, color: "#555" },
});

export default FAQSection;
