import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

export default function Acao() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Ação Coletiva e Consciência</Text>

      <View style={styles.espaco} />

      <View style={styles.bloco}>
        <Image source={require("../../img/1e.jpg")} style={styles.tinyImgs} />
        <Text style={styles.texto}>
        A mudança começa na informação. Eles não oferecem educação porque ela derruba o sistema. 
        Uma população educada reconhece seus direitos, questiona e exige mudanças. Eles querem obediência, 
        e discursos de doutrina reforçam isso. A educação sobre o sistema é essencial para a mudança!
        </Text>
      </View>

      <View style={styles.paragrafoAlinha}>
        <Text style={styles.paragrafo}>
        Forçados a viver e fazer parte deste sistema, temos uma escolha entre manter os privilégios de uma 
        minoria ou lutar para que todos tenham acesso aos mesmos direitos e oportunidades.
        </Text> 
      </View>

      <View style={styles.bloco2}>
        <Text style={styles.texto2}>
        Doutrinas amplamente difundidas são utilizadas como ferramentas de controle social, 
        limitando o senso crítico e promovendo a intolerância. Elas mantêm a estrutura atual, tornando o ato 
        de questionar uma ameaça. Entender isso é um passo essencial.
        </Text>
        <Image source={require("../../img/2e.jpg")} style={styles.tinyImgs} />
      </View>

      <View style={styles.bloco2}>
        <Text style={styles.texto2}>
        É tudo uma questão de saber como transferir a culpa. Dê às pessoas um problema que você causou,
        faça-as escolher um lado e deixe-as ficar bravas umas com as outras por apoiarem o lado errado. 
        Ter consciência disso e manter o foco é essencial para entender a manipulação por trás desse processo.
        </Text>
        <Image source={require("../../img/3e.jpg")} style={styles.tinyImgs} />
      </View>

      <View style={styles.bloco2}>
        <Text style={styles.texto2}>
        A população unida tem mais força do que o sistema. É essencial que as pessoas compreendam seus direitos, lutem por igualdade, 
        redefinam o poder e exijam mudanças!
        </Text>
        <Image source={require("../../img/4e.jpg")} style={styles.tinyImgs} />
      </View>

      <View style={styles.paragrafoAlinha}>
        <Text style={styles.paragrafo}>
        Sem rebeldia, não há revolução. Sem desobediência, não há progresso.
        </Text> 
      </View>

      <View style={styles.espaco} />

      <Image source={require("../../img/flores2.jpg")} style={styles.imgFinal} />
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#7e59c2",
    textAlign: "center",
  },
  espaco: {
    height: 30,
  },
  bloco: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
  },
  bloco2: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
  },
  tinyImgs: {
    width: 135,
    height: 135,
    borderRadius: 2,
    marginHorizontal: 13,
  },
  texto: {
    flex: 1,
    color: "#fff",
    fontSize: 15,
    textAlign: "left",
  },
  texto2: {
    flex: 1,
    color: "#fff",
    fontSize: 15,
    textAlign: "right",
  },
  paragrafoAlinha: {
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  paragrafo: {
    color: "#ddd",
    fontSize: 14,
    textAlign: "center",
    marginBottom: 8,
  },
  imgFinal: {
    width: 410,
    height: 200,
    resizeMode: "cover",
    alignSelf: "center",
  },
});