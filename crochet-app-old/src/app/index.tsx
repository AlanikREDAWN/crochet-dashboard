import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { Image } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.nav}>
          <Text>Home</Text>
          <Image

            source={{uri: 'https://picsum.photos/64'}}
            style={{ width: '64', height: '64' }}
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
  nav: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 100,
    backgroundColor: 'yellow',
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
