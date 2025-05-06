import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, ScrollView, Pressable } from "react-native";

export default function Form() {
  const [resposta, setResposta] = useState(false);
  const [respostas, setRespostas] = useState({
    trabalho: null,
    proposito: null,
    celular: null,
  });

  const [formReset, setFormReset] = useState(false);

  const reiniciarFormulario = () => {
    setRespostas({
      trabalho: null,
      proposito: null,
      celular: null,
    });
    setResposta(false);
    setFormReset(!formReset); 
  };

  const enviarFormulario = () => {
    if (respostas.trabalho && respostas.proposito && respostas.celular) {
      setResposta(true);
    }
  };

  const selecionar = (campo, valor) => {
    setRespostas({ ...respostas, [campo]: valor });
    setResposta(false);
  };

  const corOpcao = (campo, valor) =>
    respostas[campo] === valor ? styles.opcaoSelecionada : styles.opcao;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Formulário de Eficiência</Text>
      <Image source={require("../../img/lbar.jpg")} style={styles.imgBpm} />
      <Text style={styles.subtitulo}>"aqui medimos o quanto você contribui com o sistema!"</Text>

      <Text style={styles.pergunta}>- Quantas horas trabalha?</Text>
      <Pressable style={corOpcao("trabalho", "8")} onPress={() => selecionar("trabalho", "8")}>
        <Text style={styles.textoOpcao}>8 horas, como um ser humano normal</Text>
      </Pressable>
      <Pressable style={corOpcao("trabalho", "10")} onPress={() => selecionar("trabalho", "10")}>
        <Text style={styles.textoOpcao}>10 horas, sempre ocupado</Text>
      </Pressable>
      <Pressable style={corOpcao("trabalho", "naosei")} onPress={() => selecionar("trabalho", "naosei")}>
        <Text style={styles.textoOpcao}>Não conto mais</Text>
      </Pressable>

      <Text style={styles.pergunta}>- Você sente que seu trabalho tem um propósito pessoal?</Text>
      <Pressable style={corOpcao("proposito", "sim")} onPress={() => selecionar("proposito", "sim")}>
        <Text style={styles.textoOpcao}>Claro, estou construindo algo</Text>
      </Pressable>
      <Pressable style={corOpcao("proposito", "mais")} onPress={() => selecionar("proposito", "mais")}>
        <Text style={styles.textoOpcao}>Mais ou menos, não tenho escolha</Text>
      </Pressable>
      <Pressable style={corOpcao("proposito", "naotem")} onPress={() => selecionar("proposito", "naotem")}>
        <Text style={styles.textoOpcao}>Não, propósito já não existe</Text>
      </Pressable>

      <Text style={styles.pergunta}>- Quantas vezes olhou para o celular hoje?</Text>
      <Pressable style={corOpcao("celular", "diversas")} onPress={() => selecionar("celular", "diversas")}>
        <Text style={styles.textoOpcao}>Diversas vezes</Text>
      </Pressable>
      <Pressable style={corOpcao("celular", "semideia")} onPress={() => selecionar("celular", "semideia")}>
        <Text style={styles.textoOpcao}>Não tenho ideia</Text>
      </Pressable>
      <Pressable style={corOpcao("celular", "algumas")} onPress={() => selecionar("celular", "algumas")}>
        <Text style={styles.textoOpcao}>Algumas vezes</Text>
      </Pressable>

      <Pressable style={styles.btn} onPress={enviarFormulario}>
        <Text style={styles.textoBtn}>Enviar</Text>
      </Pressable>

      {resposta && (
        <View style={{ marginTop: 20, padding: 15, borderRadius: 5 }}>
          <Text style={{ color: "#fff", fontSize: 22, textAlign: "center", marginBottom: 15 }}>
            O sistema está funcionando perfeitamente!
          </Text>
        </View>
      )}

      <Pressable style={styles.btn} onPress={reiniciarFormulario}>
        <Text style={styles.textoBtn}>Reiniciar Formulário</Text>
      </Pressable>

      <Image source={require("../../img/div2.jpg")} style={styles.imgBorbo} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    padding: 20,
    flex: 1,
  },
  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 10,
  },
  imgBpm: {
    width: "100%",
    height: 180,
    marginBottom: 15,
    resizeMode: "cover",
  },
  imgBorbo: {
    width: "100%",
    height: 130,
    marginTop: 20,
    resizeMode: "cover",
  },
  subtitulo: {
    fontStyle: "italic",
    color: "#ccc",
    textAlign: "center",
    marginBottom: 20,
  },
  pergunta: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 15,
    marginBottom: 5,
  },
  opcao: {
    backgroundColor: "#333",
    padding: 12,
    marginTop: 8,
    borderRadius: 8,
  },
  opcaoSelecionada: {
    backgroundColor: "#744fb8",
    padding: 12,
    marginTop: 8,
    borderRadius: 8,
  },
  textoOpcao: {
    color: "#fff",
  },
  btn: {
    backgroundColor: "#6240a1",
    padding: 15,
    borderRadius: 8,
    marginTop: 30,
  },
  textoBtn: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});
