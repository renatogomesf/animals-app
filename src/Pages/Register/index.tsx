import { View, Text, StyleSheet } from "react-native";

export default function Register() {
  return (
    <View style={styles.conteiner}>
      <Text>register</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#fff"
  },
});