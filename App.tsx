import { SafeAreaView } from "react-native-safe-area-context";
import Tabs from "./src/Tabs";
import { View, StyleSheet, StatusBar } from "react-native";

export default function MyTabs() {
  return (
    <SafeAreaView style={styles.conteiner}>
      <View style={styles.conteiner}>
        <Tabs />
      </View>
      <StatusBar backgroundColor={"#fff"} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
  },
});
