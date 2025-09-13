import Tabs from "./src/Tabs";
import { View, StyleSheet } from "react-native";

export default function MyTabs() {
  return (
    <View style={styles.conteiner}>
      <Tabs />
    </View>
  );
}

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
  },
});