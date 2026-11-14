import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import POKEMONS from "../../data/pokemons";
import { Link } from "expo-router";

const ARTWORK =
  "https://raw.githubusercontent.com/PokeAPI/sprites" +
  "/master/sprites/pokemon/other/official-artwork/";
const favoritePokNumber = [
  1, 2, 3, 4, 10, 20, 30, 100, 24, 11, 1, 2, 3, 110000,
];

const favoritePokemons = POKEMONS.filter((pok) =>
  favoritePokNumber.includes(pok.number),
);

export default function Profil() {
  return (
    <View style={{ padding: 20, marginBottom: 35 }}>
      <Text style={styles.titre}>Pokemon favorie : </Text>
      <Text> {favoritePokemons.length} pokemons favories</Text>
      <FlatList
        data={favoritePokemons}
        keyExtractor={(item) => String(item.number)}
        numColumns={2}
        columnWrapperStyle={styles.ligne}
        contentContainerStyle={styles.liste}
        renderItem={({ item }) => (
          <View style={styles.carte}>
            <Image
              source={{ uri: `${ARTWORK}${item.number}.png` }}
              style={styles.image}
            />
            <Text style={styles.numero}>#{item.number}</Text>
            <Link
              style={styles.nom}
              href={{
                pathname: "/pokemon/pokemon",
                params: { number: String(item.number) },
              }}
            >
              {item.name}
            </Link>
            <Text style={styles.type}>{item.type}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  liste: {
    padding: 12,
    backgroundColor: "#F2F2F7",
  },
  ligne: {
    gap: 12,
  },
  titre: {
    fontSize: 28,
    fontWeight: "bold",
  },
  carte: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 16,
    padding: 12,
    marginBottom: 12,
  },
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
