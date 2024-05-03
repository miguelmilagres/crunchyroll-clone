import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";

const background = "../../assets/images/receptionBackground.jpg";
const logo = "../../assets/images/logo.png";

export default function ReceptionScreen({ navigation }) {
  return (
    <ImageBackground source={require(background)} style={styles.image}>
      <View style={styles.containerVazio} />
      <View style={styles.container}>
        <Image style={styles.logo} source={require(logo)} />
        <Text style={styles.text}>
          Todos os seus animes favoritos. Agora num só lugar.
        </Text>
        <TouchableOpacity
          style={styles.buttonOne}
          onPress={() => navigation.navigate("profile")}
        >
          <Text style={{ color: "black", fontWeight: 500 }}>
            EXPERIMENTE O TESTE GRATUITO
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonTwo}
          onPress={() => navigation.navigate("login")}
        >
          <Text style={{ color: "#ec7827", fontWeight: 500 }}>LOGIN</Text>
        </TouchableOpacity>
        <Text style={{ color: "white", paddingTop: "8%" }}>
          ou <Text style={{ color: "#ec7827" }}>Criar Conta</Text>
        </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
  },
  containerVazio: {
    flex: 1.2,
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  logo: {
    width: 200,
    resizeMode: "contain",
  },
  text: {
    color: "white",
    textAlign: "center",
    fontWeight: "500",
    fontSize: 17,
    paddingVertical: "6%",
    paddingHorizontal: "5%",
  },
  buttonOne: {
    backgroundColor: "#f8b717",
    width: "90%",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonTwo: {
    marginTop: "3%",
    borderWidth: 2,
    borderColor: "#ec7827",
    width: "90%",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
