import { Link, Tabs } from "expo-router";
import { Text, StyleSheet } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Pokédex",

          tabBarIcon: ({ color }) => (
            <MaterialIcons size={28} name="home" color={color} />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="profil"
        options={{
          title: "Profil",
          tabBarIcon: ({ color }) => (
            <AntDesign name="smile" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  link: {
    fontWeight: "semibold",
  },
});
