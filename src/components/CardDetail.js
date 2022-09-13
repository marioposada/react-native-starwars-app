import {
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const CardDetail = ({ item }) => {
  return (
    <TouchableOpacity style={styles.touch} onPress={() => null}>
      <ImageBackground source={{ uri: item.url }} style={styles.image}>
        <View style={styles.container}>
          <Text style={styles.text}>{item.name}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    justifyContent: "flex-end",
    width: "100%",
    height: "100%",
  },
  text: {
    color: "white",
    fontSize: 13,
    lineHeight: 20,
    textAlign: "left",
    zIndex: 2,
    margin: 2,
    fontWeight: "bold",
    backgroundColor: "#000000a1",
  },
  touch: {
    margin: 2,
    alignItems: "center",
    backgroundColor: "#181818",
    width: 150,
    height: 150,
    margin: 3,
  },
  container: {
    justifyContent: "flex-end",
  },
});

export default CardDetail;
