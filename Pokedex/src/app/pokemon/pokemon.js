import { View, Text, Image, StyleSheet, style } from "react-native";
import { Stack, useLocalSearchParams, Link } from "expo-router";
import POKEMONS from "../../data/pokemons";

const ARTWORK =
  "https://raw.githubusercontent.com/PokeAPI/sprites" +
  "/master/sprites/pokemon/other/official-artwork/";

export default function FichePokemon() {
  const { number } = useLocalSearchParams();
  const pokemon = POKEMONS.find((p) => p.number === Number(number));
  return (
    <View style={{ flex: 1, alignItems: "center", padding: 24 }}>
      <Stack.Screen options={{ title: pokemon.name }} />
      {
        <View>
          <Image
            source={{ uri: `${ARTWORK}${Number(number)}.png` }}
            style={styles.image}
          />
          <Text style={styles.numero}>#{pokemon.number}</Text>
          <Text style={styles.nom}>{pokemon.name}</Text>
          <Text style={styles.type}>{pokemon.type}</Text>
        </View>
      }
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
  numero: {
    color: "#999",
    fontSize: 13,
  },
  nom: {
    fontSize: 17,
    fontWeight: "bold",
  },
  type: {
    fontSize: 13,
    color: "#666",
    marginBottom: 8,
  },
});
