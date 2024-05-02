import { View, Text, StyleSheet, Image } from "react-native";

export default function AppHeaderBar() {
  return (
    <View>
      <Image
        style={{ width: 48, height: 48, marginLeft: 10 }}
        source={require("../../assets/images/crunchyrollIcon.png")}
      />
    </View>
  );
}
