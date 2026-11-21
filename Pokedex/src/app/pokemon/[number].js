// Correction TP 5 · partie 1
// Fichier : src/app/pokemon/[number].js
// Les crochets : une seule page pour tous les Pokémon (/pokemon/1, /pokemon/25…)

import { Stack, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";
// Le fichier est dans pokemon/ : il faut remonter de 2 dossiers

const ARTWORK =
  "https://raw.githubusercontent.com/PokeAPI/sprites" +
  "/master/sprites/pokemon/other/official-artwork/";

export default function FichePokemon() {
  const { number } = useLocalSearchParams();
  const [pok, setPok] = useState(null);
  useEffect(() => {
    async function charger() {
      const reponse = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${number}`,
      );
      const data = await reponse.json();
      setPok(data);
    }
    charger();
  }, [number]);

  if (pok === null) {
    return <ActivityIndicator size="large" style={{ flex: 1 }} />;
  }

  return (
    <View style={styles.page}>
      {/* Le nom du Pokémon dans la barre du haut */}
      <Stack.Screen options={{ title: pok.name }} />

      <Image source={{ uri: `${ARTWORK}${pok.id}.png` }} style={styles.image} />
      <Text style={styles.numero}>#{pok.id}</Text>
      <Text style={styles.nom}>{pok.name}</Text>
      <Text style={styles.type}>{pok.types[0].type.name}</Text>
      <Text style={styles.subData}>{pok.height / 10} m </Text>
      <Text style={styles.subData}>{pok.weight / 10} Kg </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    backgroundColor: "white",
  },
  image: {
    width: 240,
    height: 240,
  },
  numero: {
    fontSize: 16,
    color: "#999",
  },
  nom: {
    fontSize: 32,
    fontWeight: "bold",
  },
  type: {
    marginTop: 8,
    paddingVertical: 4,
    paddingHorizontal: 14,
    borderRadius: 12,
    backgroundColor: "#FFE066",
    fontWeight: "bold",
    overflow: "hidden",
  },
  subData: {
    fontSize: 16,
    color: "#999",
  },
});
