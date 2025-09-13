import { View, Text, StyleSheet } from "react-native";

export default function Profile() {
  return (
    <View style={styles.conteiner}>
      <Text>perfil</Text>
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