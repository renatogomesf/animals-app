import { View, Text, StatusBar, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={style.container}>
      <Text>teste</Text>
      <StatusBar backgroundColor={"#fff"} />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  }
})