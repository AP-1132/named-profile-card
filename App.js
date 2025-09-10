import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={require("./assets/IMG_7135_Original.jpg")}
          style={styles.picture}
        />
        <Text style={styles.name}>Alonso Palmero</Text>
        <Text style={styles.bio}>
          Student at Indiana University Indianapolis. Majoring in Media Arts &
          Science specializing in Web Design & Development
        </Text>
        <View>
          <Text style={styles.facts}>Fun Facts about me:</Text>
          <Text style={styles.facts}>I have a pet turtle</Text>
          <Text style={styles.facts}>I can solve a Rubik's cube</Text>
          <Text style={styles.facts}>I like burgers</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    padding: 20,
  },
  card: {
    backgroundColor: "#3fa6fbff",
    borderRadius: 50,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 5,
  },
  picture: {
    width: 200,
    height: 200,
    borderRadius: 50,
    marginBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  bio: {
    fontSize: 16,
    marginBottom: 15,
  },
  facts: {
    fontSize: 14,
  },
});
