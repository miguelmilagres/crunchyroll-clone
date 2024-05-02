import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { View, StyleSheet } from "react-native";

import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import MainScreen from "../screens/MainScreen";

import CrunchyrollIcon from "../components/CrunchyrollIcon";
import User from "../components/User";

const { Navigator, Screen } = createBottomTabNavigator();

export default function Tab() {
  return (
    <Navigator
      screenOptions={{
        tabBarActiveTintColor: "#f37521",
      }}
    >
      <Screen
        name="Início"
        component={MainScreen}
        options={{
          headerTintColor: "transparent",
          tabBarIcon: ({ size, color }) => (
            <SimpleLineIcons name="home" size={size} color={color} />
          ),
          headerLeft: () => <CrunchyrollIcon />,
          headerRight: () => (
            <View style={{ flexDirection: "row", gap: 20 }}>
              <MaterialIcons name="connected-tv" size={32} color="white" />
              <MaterialIcons
                name="search"
                size={32}
                color="white"
                style={{ marginRight: 10 }}
              />
            </View>
          ),
          headerStyle: styles.blackHeader,
          tabBarStyle: styles.blackTabBar,
        }}
      />
      <Screen
        name="Listas"
        component={MainScreen}
        options={{
          headerTintColor: "transparent",
          tabBarIcon: ({ size, color }) => (
            <Feather name="bookmark" size={size} color={color} />
          ),
          headerLeft: () => <CrunchyrollIcon />,
          headerRight: () => (
            <View style={{ flexDirection: "row", gap: 20 }}>
              <MaterialIcons name="connected-tv" size={32} color="white" />
              <MaterialIcons
                name="search"
                size={32}
                color="white"
                style={{ marginRight: 10 }}
              />
            </View>
          ),
          headerStyle: styles.blackHeader,
          tabBarStyle: styles.blackTabBar,
        }}
      />
      <Screen
        name="Catálogo"
        component={MainScreen}
        options={{
          headerTintColor: "transparent",
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="th-large" size={size} color={color} />
          ),
          headerLeft: () => <CrunchyrollIcon />,
          headerRight: () => (
            <View style={{ flexDirection: "row", gap: 20 }}>
              <MaterialIcons name="connected-tv" size={32} color="white" />
              <MaterialIcons
                name="search"
                size={32}
                color="white"
                style={{ marginRight: 10 }}
              />
            </View>
          ),
          headerStyle: styles.blackHeader,
          tabBarStyle: styles.blackTabBar,
        }}
      />
      <Screen
        name="Simulcasts"
        component={MainScreen}
        options={{
          headerTintColor: "transparent",
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="star-four-points-outline"
              size={size}
              color={color}
            />
          ),
          headerLeft: () => <CrunchyrollIcon />,
          headerRight: () => (
            <View style={{ flexDirection: "row", gap: 20 }}>
              <MaterialIcons name="connected-tv" size={32} color="white" />
              <MaterialIcons
                name="search"
                size={32}
                color="white"
                style={{ marginRight: 10 }}
              />
            </View>
          ),
          headerStyle: styles.blackHeader,
          tabBarStyle: styles.blackTabBar,
        }}
      />
      <Screen
        name="Conta"
        component={MainScreen}
        options={{
          headerTintColor: "transparent",
          tabBarIcon: () => <User />,
          headerLeft: () => <CrunchyrollIcon />,
          headerRight: () => (
            <View style={{ flexDirection: "row", gap: 20 }}>
              <MaterialIcons name="connected-tv" size={32} color="white" />
              <MaterialIcons
                name="search"
                size={32}
                color="white"
                style={{ marginRight: 10 }}
              />
            </View>
          ),
          headerStyle: styles.blackHeader,
          tabBarStyle: styles.blackTabBar,
        }}
      />
    </Navigator>
  );
}

const styles = StyleSheet.create({
  blackHeader: {
    backgroundColor: "black",
  },
  blackTabBar: {
    backgroundColor: "#24252A",
  },
});
