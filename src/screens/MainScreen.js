import {
  View,
  ImageBackground,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const kaijuN8 = "../../assets/images/kaiju.jpg";

import { Feather } from "@expo/vector-icons";

export default function LoginScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.mainBox}>
        <ImageBackground source={require(kaijuN8)} style={styles.image} />
      </View>
      <View style={styles.textBox}>
        <Text
          numberOfLines={3}
          ellipsizeMode="tail"
          style={{ color: "white", fontSize: 14 }}
        >
          Em um mundo assolado por criaturas ameaçadoras conhecidas como
          "Kaiju", Kafka Hibino sempre sonhou em se alistar na Força de Defesa
          do Japão para derrotá-los. Kafka prometeu à sua amiga de infância,
          Mina Ashiro, que eles derrotariam esses monstros juntos. Com o tempo,
          circunstâncias da vida os forçaram a seguir caminhos diferentes,
          fazendo com que Kafka abandonasse sua ambição. Ele conseguiu um
          emprego na Monster Sweeper, Inc., uma empresa de limpeza profissional
          especializada em lidar com as consequências das batalhas contra Kaiju.
          Por outro lado, Mina Ashiro agora é a capitã da 3ª Divisão da Força de
          Defesa. No momento, ele não é considerado digno de lutar contra os
          Kaiju ao lado dela. No trabalho, Kafka acaba conhecendo o altamente
          motivado Reno Ichikawa. A determinação incansável de Reno de se juntar
          à Força de Defesa não deixa espaço para o fracasso. Sua perseverança
          reacende a ambição de Kafka de estar ao lado de Mina enquanto protegem
          a humanidade dos Kaiju juntos! Um sonho congelado pelo tempo,
          descongelado por uma promessa ardente!
        </Text>
      </View>

      <View style={{ flexDirection: "row", gap: 12, paddingBottom: "8%" }}>
        <TouchableOpacity style={styles.button}>
          <Feather name="play" size={24} color="black" />
          <Text style={{ color: "black", fontWeight: 500, fontSize: 16 }}>
            ASSISTIR AGORA
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonTwo}>
          <Text>
            <Feather name="bookmark" size={24} color="#ec7827" />
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={[styles.info, { gap: 10 }]}>
        <Feather name="info" size={24} color="white" />
        <Text style={{ color: "white", fontSize: 15 }}>
          Verifique a Classificação Indicativa
        </Text>
      </TouchableOpacity>
      <Text style={{ color: "white", fontSize: 17, fontWeight: 500 }}>
        RECOMENDAÇÕES PARA VOCÊ
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingHorizontal: 12,
  },
  mainBox: {
    flex: 1,
    height: 340,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  textBox: {
    marginBottom: "8%",
  },
  button: {
    flexDirection: "row",
    backgroundColor: "#F67420",
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "81%",
  },
  buttonTwo: {
    borderWidth: 2,
    borderColor: "#ec7827",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  info: {
    flexDirection: "row",
    backgroundColor: "#141519",
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "8%",
  },
});
