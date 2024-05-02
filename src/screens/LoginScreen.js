import { useState } from "react";
import {
  Image,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";

const logo = "../../assets/images/logo.png";
const logo2 = "../../assets/images/logo2.png";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const login = "teste@email.com";
  const password = "123456";

  function buttonFunction() {
    if (email == login && senha == password) {
      return navigation.navigate("main");
    } else {
      return Alert.alert(
        "Dados de acesso inválidos. Por favor, tente novamente."
      );
    }
  }

  return (
    <View style={styles.container}>
      <View style={[styles.logos, { marginBottom: 25 }]}>
        <Image style={styles.logoOne} source={require(logo)} />
        <Image style={styles.logoTwo} source={require(logo2)} />
      </View>
      <Text style={[styles.textOne, { marginBottom: 25 }]}>
        Bem-vindo à Crunchyroll! Entre com suas credenciais da Crunchyroll ou
        também da Funimation.
      </Text>
      <TextInput
        placeholder="E-mail ou Nome de Usuário"
        placeholderTextColor="#C6C7C9"
        value={email}
        onChangeText={setEmail}
        style={[styles.input, , { marginBottom: 10 }]}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Senha"
        placeholderTextColor="#C6C7C9"
        value={senha}
        onChangeText={setSenha}
        style={[styles.input, { marginBottom: 25 }]}
        secureTextEntry={true}
      />
      <Text style={[styles.textOne, { marginBottom: 25 }]}>
        Ao entrar com sua conta, você declara possuir mais de 16 anos de idade e
        estar de acordo com nossos{" "}
        <Text style={styles.textTwo}>Termos e Condições </Text>e nossa
        <Text style={styles.textTwo}> Política de Privacidade</Text>.
      </Text>
      <TouchableOpacity
        style={[styles.button, { marginBottom: 25 }]}
        onPress={() => buttonFunction()}
      >
        <Text style={{ color: "black", fontWeight: 500 }}>ENTRAR</Text>
      </TouchableOpacity>
      <Text style={styles.textOne}>
        <Text style={styles.textTwo}>Esqueceu a Senha?</Text>
        {"  "}|{"  "}
        <Text style={styles.textTwo}>Criar conta</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "black",
  },
  logoOne: {
    width: "40%",
    resizeMode: "contain",
  },
  logoTwo: {
    width: "35%",
    resizeMode: "contain",
  },
  logos: {
    paddingTop: "30%",
    height: "22%",
    flexDirection: "row",
    alignItems: "center",
    gap: 30,
  },
  textOne: {
    color: "white",
    textAlign: "center",
  },
  textTwo: {
    color: "#EF771E",
    textAlign: "center",
  },
  input: {
    backgroundColor: "#1b1c20",
    borderBottomColor: "#57585B",
    borderWidth: 2,
    padding: 10,
    width: "95%",
    height: 52,
    color: "white",
  },
  link: {
    color: "#EF771E",
  },
  button: {
    backgroundColor: "#F67420",
    width: "95%",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
