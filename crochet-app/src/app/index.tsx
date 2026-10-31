import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { Image } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View>
          <Text>Home</Text>
          <Image
            style={styles.image}
            source={{uri: 'https://picsum.photos/64'}}
          />
      </View>
      <Text style={styles.text}>Hello world!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF1F5',
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: '#4D4F69',
    // backgroundColor: 'yellow',
  },
  image: {
    // flex: 1,
    width: '64px',
    height: '64px',
  },
});
