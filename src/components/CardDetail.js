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
  const { name, url } = item;

  return (
    <TouchableOpacity style={styles.touch}>
      <ImageBackground source={{uri: url}} style={styles.image}>
        <View style={styles.container}>
          <Text style={styles.text}>{name}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
   
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
    width: 80,
    height: 80,
    borderWidth: 1,
    borderColor: "white",
  },
  text: {
    flex: 1,
    color: "white",
    fontSize: 10,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "left",
    backgroundColor: "#000000c1",
  },
  touch: {
    margin: 3,
    minWidth: 100,
    maxWidth: 100,
    alignItems: "center",
    height: 90,
    backgroundColor: "#181818",
    borderWidth: 1,
    borderColor: "white",
  },
  container: {
    justifyContent: "flex-start",
  },
});

export default CardDetail;
