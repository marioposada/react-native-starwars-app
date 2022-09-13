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
  console.warn(item.url);
  console.warn(item.name);

  return (
    <TouchableOpacity style={styles.touch} onPress={() => null}>
      <ImageBackground
        source={require("../../assets/Yoda.jpeg")}
        style={styles.image}
      >
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
    fontSize: 11,
    lineHeight: 20,
    textAlign: "left",
    zIndex: 2,
    margin: 2,
    fontWeight: "bold",
    
    
  },
  touch: {
    margin: 2,
    alignItems: "center",
    backgroundColor: "#181818",
    width: 100,
    height: 100,
    margin:  3
  },
  container: {
    justifyContent: "flex-end",
    
    
  },
});

export default CardDetail;
