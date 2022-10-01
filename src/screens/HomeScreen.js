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

import CardDetail from "../components/CardDetail";

export default function App() {
  const friends = [
    {
      id: 1,
      name: "Luke Skywalker",
      url: "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
    },
    {
      id: 2,
      name: "C-3PO",
      url: "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
    },
    {
      id: 3,
      name: "R2-D2",
      url: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
    },
    {
      id: 4,
      name: "Dart Vader",
      url: "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
    },
    {
      id: 5,
      name: "Leia Organa",
      url: "https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png",
    },
    {
      id: 6,
      name: "Owen Lars",
      url: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png",
    },
    {
      id: 7,
      name: "Beru Whitesun lars",
      url: "https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png",
    },
    {
      id: 8,
      name: "R5-D4",
      url: "https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png",
    },
    {
      id: 9,
      name: "Biggs Darklighter",
      url: "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png",
    },
    {
      id: 10,
      name: "Obi-Wan Kenobi",
      url: "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg",
    },
    {
      id: 11,
      name: "Anakin Skywalker",
      url: "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png",
    },
    {
      id: 12,
      name: "Wilhuff Tarkin",
      url: "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg",
    },
    {
      id: 13,
      name: "Chewbacca",
      url: "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png",
    },
    {
      id: 14,
      name: "Han Solo",
      url: "https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png",
    },
    {
      id: 15,
      name: "Greedo",
      url: "https://vignette.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg",
    },
    {
      id: 16,
      name: "Yoda",
      url: "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png",
    },
    {
      id: 17,
      name: "Palpatine",
      url: "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png",
    },
    {
      id: 18,
      name: "Boba Fett",
      url: "https://vignette.wikia.nocookie.net/starwars/images/7/79/Boba_Fett_HS_Fathead.png",
    },
    {
      id: 19,
      name: "IG-88",
      url: "https://vignette.wikia.nocookie.net/starwars/images/f/f2/IG-88.png",
    },
    {
      id: 20,
      name: "Ayla Secura",
      url: "https://vignette.wikia.nocookie.net/starwars/images/f/f9/Aayla.jpg",
    },
    {
      id: 21,
      name: "Dooku",
      url: "https://vignette.wikia.nocookie.net/starwars/images/b/b8/Dooku_Headshot.jpg",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container1}>
        <ImageBackground
          source={require("../../assets/star-wars-background.jpeg")}
          style={styles.image}
        >
          <View style={styles.wrap}>
            <Image
              style={styles.logo}
              source={require("../../assets/logostarwars.png")}
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
  container1: {
    justifyContent: "center",
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
