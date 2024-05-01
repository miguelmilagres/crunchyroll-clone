import { createStackNavigator } from "@react-navigation/stack";
import { Feather } from "@expo/vector-icons";

import ReceptionScreen from "../screens/ReceptionScreen";
import LoginScreen from "../screens/LoginScreen";
import MainScreen from "../screens/MainScreen";

const { Navigator, Screen } = createStackNavigator();

export default function Stack() {
  return (
    <Navigator initialRouteName="ReceptionScreen">
      <Screen
        name="reception"
        component={ReceptionScreen}
        options={{
          title: "Reception",
          headerTintColor: "black",
          headerShown: false,
        }}
      />
      <Screen
        name="login"
        component={LoginScreen}
        options={({ navigation }) => ({
          title: "Entrar",
          headerTintColor: "white",
          headerTitleAlign: "center",
          headerShown: true,
          headerStyle: {
            backgroundColor: "black",
          },
          headerTitleStyle: {
            fontSize: 24,
          },
          headerLeft: () => <CustomHeaderLeft navigation={navigation} />,
        })}
      />
      <Screen
        name="main"
        component={MainScreen}
        options={{
          title: "Main",
          headerTintColor: "blue",
          headerShown: true,
        }}
      ></Screen>
    </Navigator>
  );
}

function CustomHeaderLeft({ navigation }) {
  return (
    <Feather
      name="x"
      size={40}
      color="white"
      style={{ marginLeft: 10 }}
      onPress={() => navigation.goBack()}
    />
  );
}
