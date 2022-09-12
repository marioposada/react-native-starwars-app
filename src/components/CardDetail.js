import { ImageBackground, Text, TouchableOpacity, View } from 'react-native'

const Cardetail = ({url,name}) => {

return (
    <TouchableOpacity>
        <ImageBackground
        source={url}
        style={styles.image}
        >
            <View>
                <Text style={styles.name}>{name}</Text>
                <Text></Text>
            </View>
        </ImageBackground>
    </TouchableOpacity>
)
  
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: "center",
        width: "100%",
        height: "100%",
        justifyContent: "flex-start",
      },
      name: {
        color: "white",
        fontSize: 42,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "left",
        backgroundColor: "#000000c1",
      },
});

export default Cardetail;
