import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

export default function Integr() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>

        <View style={styles.imgLado}>
          <View style={styles.imgAlinha}>
            <Image source={require("../../img/1.jpg")} style={styles.imgIntegr} />
            <Text style={styles.nome}>Taís</Text>
          </View>
          <View style={styles.imgAlinha}>
            <Image source={require("../../img/2.jpg")} style={styles.imgIntegr} />
            <Text style={styles.nome}>Iris</Text>
          </View>
        </View>

        <Image source={require("../../img/div.jpg")} style={styles.divisoria} />

        <View style={styles.centralizado}>
          <Text style={styles.textoEquipe}>
            Somos a equipe por trás do projeto Acorde, explicamos
            como o sistema atual manipula a sociedade, explora a mão de obra e destrói o planeta por lucro,
            transfere a responsabilidade para a população e manipula a narrativa para manter seus interesses intactos.
          </Text>
        </View>
      </ScrollView>

      <Image source={require("../../img/flores.jpg")} style={styles.imgFlores} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  scrollContent: {
    paddingBottom: 200,
  },
  imgLado: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingTop: 30,
  },
  imgAlinha: {
    alignItems: "center",
  },
  imgIntegr: {
    width: 140,
    height: 140,
    borderRadius: 5,
    marginBottom: 8,
  },
  nome: {
    color: "#fff",
    marginTop: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  divisoria: {
    width: "100%",
    height: 30,
    resizeMode: "cover",
    marginVertical: 30,
  },
  centralizado: {
    alignItems: "center",
    paddingHorizontal: 30,
  },
  textoEquipe: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
  imgFlores: {
    width: 420,
    height: 200,
    resizeMode: "cover",
  },
});
