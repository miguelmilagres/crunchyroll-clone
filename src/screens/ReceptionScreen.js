import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Image,
  Button,
} from "react-native";

const background = "../../assets/images/receptionBackground.jpg";
const logo = "../../assets/images/logo.png";

export default function ReceptionScreen() {
  return (
    <ImageBackground source={require(background)} style={styles.image}>
      <View style={styles.containerVazio} />
      <View style={styles.container}>
        <Image style={styles.logo} source={require(logo)} />
        <Text style={styles.text}>
          Todos os seus animes favoritos. Agora num só lugar.
        </Text>
        <Button
          style={styles.buttonOne}
          title="EXPERIMENTE O TESTE GRATUITO"
          onPress={() => navigation.navigate("#")}
          color={"#ffbf00"}
        />
        <Button
          buttonStyle={styles.buttonTwo}
          title="LOGIN"
          onPress={() => navigation.navigate("#")}
          color={"transparent"}
        />
        <Text style={styles.text}>ou Criar Conta</Text>
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
    paddingVertical: 15,
    paddingHorizontal: 5,
  },
});
