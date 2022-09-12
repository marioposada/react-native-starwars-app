import { FlatList, Image, ImageBackground, StyleSheet, Text, View } from "react-native";

import Cardetail from "./src/components/CardDetail";

export default function App() {


  
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../starwars-app/assets/fondoapp.jpeg")}
        style={styles.image}
      >
        <View style={styles.wrap}>
          {/* <Text style={styles.text}>Mario</Text> */}
          <Image
            style={styles.logo}
            source={require("../starwars-app/assets/logostarwars.png")}
          />
        </View>
        <FlatList
        style={styles.itemList}
        data={task}
        renderItem={Cardetail}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: "100%",
    justifyContent: "flex-start",
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "left",
    backgroundColor: "#000000c1",
  },
  logo: {
    width: "100%",
    height:60,
   
    resizeMode: "contain",
    backgroundColor: "#000000f1",
    flexDirection: "row",
  },
});
