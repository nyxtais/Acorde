import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

export default function Inicial() {

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>ACORDE</Text>

      <Image
        source={require("../../img/eye.jpg")}
        style={[styles.imgEye]}
      />

      <View style={styles.textoInicial}>
        <View style={styles.colContainer}>
          <Text style={styles.coluna}>
          Você já reciclou hoje? Andou de bike? Ótimo. Mas isso não basta. {`\n`}
          Não se muda um sistema jogando pelas regras dele.
          </Text>
          <Image
            source={require("../../img/bfly.jpg")}
            style={styles.imgBorfly}
          />
        </View>

        <View style={styles.colContainer}>
          <Text style={styles.coluna}>
          Acorde é uma crítica social para expor o impacto real do sistema sobre a sociedade e o meio ambiente. A proposta
          é simples: informar, conscientizar e provocar.  Os verdadeiros responsáveis precisam ser vistos, nomeados e responsabilizados.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flexGrow: 1,
    alignItems: "center",
    paddingBottom: 40,
    paddingTop: 40,
  },
  titulo: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#7e59c2",
    marginBottom: 20,
  },
  imgEye: {
    width: "100%",
    height: 250,
    marginBottom: 20,
    resizeMode: "cover",
  },
  textoInicial: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    gap: 15,
    marginBottom: 20,
  },
  colContainer: {
    flex: 1,
  },
  coluna: {
    fontSize: 16,
    color: "#fff",
    textAlign: "justify",
    lineHeight: 24,
  },
  imgBorfly: {
    width: 130,
    height: 130,
    marginTop: 80,
    borderRadius: 5,
    alignSelf: "center",
  },
});
