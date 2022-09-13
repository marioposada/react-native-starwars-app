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
import axios from "axios";

// import {useFetch} from './src/hooks/useFetch'

export default function App() {
  const friends = [
    { id: 1, name: "Anakin Skywalker", url: '../../assets/Anakyn_Skywalker.jpeg'},
    { id: 2, name: "Luke Skywalker", url: '../../assets/Anakyn_Skywalker.jpeg'},
    { id: 3, name: "Obi Wan", url: '../../assets/Anakyn_Skywalker.jpeg'},
    { id: 4, name: "Leia Organa", url: '../../assets/Anakyn_Skywalker.jpeg' },
    { id: 5, name: "Han Solo", url: '../../assets/Anakyn_Skywalker.jpeg'},
    { id: 6, name: "Yoda", url: '../../assets/Anakyn_Skywalker.jpeg'},
    { id: 7, name: "R2-D2", url: '../../assets/Anakyn_Skywalker.jpeg'},
    { id: 8, name: "Chewbacca", url: '../../assets/Anakyn_Skywalker.jpeg'},
  ]

  return (
   <SafeAreaView style={styles.container}>
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
    display: "flex",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    borderWidth: 1,
    borderColor:  "red"
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
