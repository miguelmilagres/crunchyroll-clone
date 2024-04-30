import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ReceptionScreen from "./src/screens/ReceptionScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <ReceptionScreen />
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});
