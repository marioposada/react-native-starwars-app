import {
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useEffect, useState } from "react";

import CardDetail from "./src/components/CardDetail";

export default function App() {
  const friends = [
    { id: 1, name: "Anakin Skywalker", url: 'https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg'},
    { id: 2, name: "Luke Skywalker", url: 'https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png'},
    { id: 3, name: "Obi Wan", url: 'https://placeimg.com/640/480/nature/grayscale'},
    { id: 4, name: "Leia Organa", url: 'https://placeimg.com/640/480/arch/grayscale' },
    { id: 5, name: "Han Solo", url: 'https://placeimg.com/640/480/animals/grayscale'},
    { id: 6, name: "Yoda", url: 'https://placeimg.com/640/480/tech/grayscale'},
    { id: 7, name: "R2-D2", url: 'https://placeimg.com/640/480/tech/grayscale'},
    { id: 8, name: "Chewbacca", url: 'https://placeimg.com/640/480/tech/grayscale'},
  ]

  

  return (
   <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../starwars-app/assets/star-wars-background.jpeg")}
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
            horizontal
            data={friends}
            renderItem={({ item }) => <CardDetail item={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
          />
        </ImageBackground>
      </View>
      </SafeAreaView>
 
   
  );
}

const styles = StyleSheet.create({
  container: {
   
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    backgroundColor: "#000000a1",


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
    height: 60,
    resizeMode: "contain",
    backgroundColor: "#000000f1",
    flexDirection: "row",
  },
 
});
