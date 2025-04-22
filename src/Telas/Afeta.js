import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, Button, ScrollView, ActivityIndicator } from "react-native"


export default function Afeta() {
  const [data, setData] = useState(null);
  const [carregando, setCarregando] = useState(true);

  const fetchData = async () => {
    try {
      setCarregando(true);
      const response = await fetch("https://api.carbonintensity.org.uk/intensity");
      const json = await response.json();
      setData(json.data[0]);
    } catch (error) {
      console.error("Erro ao buscar os dados: ", error);
    } finally {
      setCarregando(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.h1}>Causa</Text>

      <Image source={require("../../img/petr.jpg")} style={styles.imgCausa} />
      <Text style={styles.textoCausa}>
        A exploração de petróleo é a segunda atividade que mais emite gases de efeito estufa no planeta.
        A indústria de petróleo e gás é um dos setores mais lucrativos do mundo.
      </Text>

      <View style={styles.separador} />

      <Image source={require("../../img/des.jpg")} style={styles.imgCausa} />
      <Text style={styles.textoCausa}>
        O desmatamento acelera as mudanças climáticas e libera grandes quantidades de CO₂.
        Por trás do desmatamento há interesses econômicos como o agronegócio, o comércio ilegal
        de madeira e a produção de soja. 
      </Text>

      <View style={styles.separador} />

      <Text style={styles.paragrafo}>
      Grandes indústrias exploram recursos naturais e mão de obra em prol do capital.
      O sistema está ligado à produção em massa e no consumo acelerado, alimentando um ciclo de exploração e desigualdade.
      </Text>

      <View style={styles.separador} />

      <Text style={styles.h1}>Consequência</Text>
      <Text style={styles.h2}>API previsão de intensidade de carbono</Text>

      {carregando ? (
        <ActivityIndicator size="large" color="#7e59c2" />
      ) : (
        <View style={styles.dadosContainer}>
          <Text style={styles.dado}>
            <Text style={styles.label}>Intensidade Prevista: </Text>
            {data.intensity.forecast} gCO2/kWh
          </Text>
          <Text style={styles.dado}>
            <Text style={styles.label}>Intensidade Atual: </Text>
            {data.intensity.actual} gCO2/kWh
          </Text>
          <Text style={styles.dado}>
            <Text style={styles.label}>Índice: </Text>
            {data.intensity.index}
          </Text>
        </View>
      )}

      <Text style={styles.textoCausa}>
        Estimativa da emissão futura de gases de efeito estufa por kWh de eletricidade
        gerada, junto com o valor atual da intensidade dessas emissões.
      </Text>

      <View style={styles.btnAtualizar}>
        <Button title="Atualizar" onPress={fetchData} color="#7e59c2" />
      </View>

      <View style={styles.separador} />

      <View style={styles.alinhaTinyImgs}>
        <Image source={require("../../img/aque.jpg")} style={styles.tinyImgs} />
        <Image source={require("../../img/gele.jpg")} style={styles.tinyImgs} />
      </View>

      <View style={styles.separador} />

      <Text style={styles.textoConseq}>
      O desmatamento afeta a saúde pública, contribuindo para a poluição do ar e da água, aumento de doenças respiratórias e
      cardiovasculares, agrava a insegurança alimentar, e problemas relacionados à água contaminada ou escassa.
      </Text>
      <Text style={styles.textoConseq}>
      O aquecimento global afeta a economia. Prejudica a produção de matérias-primas, 
      aumenta os custos de energia e gera escassez de recursos naturais,
      o que intensifica disputas entre populações e compromete as cadeias produtivas.
      </Text>
      <Text style={styles.textoConseq}>
      A falta de matéria-prima afeta as leis ao impactar a economia e o funcionamento das indústrias,
      o que leva a problemas como inflação e desemprego, isso pode resultar em alterações legislativas
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#000",
    flexGrow: 1,
  },
  h1: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#7e59c2",
    marginBottom: 15,
    textAlign: "center",
  },
  h2: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#b39ddb",
    marginBottom: 15,
    textAlign: "center",
  },
  dadosContainer: {
    backgroundColor: "#1c1c1e",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  dado: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 5,
  },
  label: {
    fontWeight: "bold",
    color: "#9f8bd7",
  },
  textoCausa: {
    color: "#fff",
    fontSize: 16,
    marginVertical: 10,
    textAlign: "justify",
  },
  paragrafo: {
    marginTop: 20,
    marginBottom: 20,
    color: "#ddd",
    fontSize: 15,
    marginVertical: 10,
    textAlign: "center",
  },
  textoConseq: {
    color: "#fff",
    fontSize: 16,
    marginVertical: 10,
    textAlign: "center",
  },
  btnAtualizar: {
    marginVertical: 20,
    marginBottom: 17,
  },
  imgCausa: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 5,
  },
  tinyImgs: {
    width: 150,
    height: 140,
    resizeMode: "cover",
    borderRadius: 3,
  },
  alinhaTinyImgs: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  separador: {
    height: 30,
  },
});
