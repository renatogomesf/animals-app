import { View, Text, StyleSheet, FlatList, TextInput } from "react-native";
import Feather from "@expo/vector-icons/Feather";

const animais = [
  { img: "img", nome: "Onça-Parda" },
  { img: "img", nome: "Jaguatirica" },
  { img: "img", nome: "Macaco-Prego" },
  { img: "img", nome: "Jiboia" },
  { img: "img", nome: "Urubu-Rei" },
  { img: "img", nome: "Tamanduá" },
  { img: "img", nome: "Tamanduá" },
  { img: "img", nome: "Tamanduá" },
  { img: "img", nome: "Tamanduá" },
  { img: "img", nome: "Tamanduá" },
  { img: "img", nome: "Tamanduá" },
  { img: "img", nome: "Tamanduá" },
  { img: "img", nome: "Tamanduá" },
];

export default function Home() {
  return (
    <View style={styles.conteiner}>
      <View style={styles.top}>
        <View style={styles.imgItem}>
          <Text>SP</Text>
        </View>
        <Text>Sargento prata</Text>
      </View>
      <TextInput style={styles.searchInput} placeholder="Pesquise aqui..." />
      <FlatList
        style={styles.flatList}
        data={animais}
        renderItem={({ item }) => {
          return (
            <View style={styles.itemList}>
              <View style={styles.infoItem}>
                <View style={styles.imgItem}>
                  <Text>
                    {item.nome[0]}
                    {item.nome[1]}
                  </Text>
                </View>
                <Text style={styles.nameItem}>{item.nome}</Text>
              </View>
              <Feather name="arrow-up-right" size={24} color="black" />
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    // backgroundColor: "#966464",
  },
  top:{
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    width: "90%",
    margin: "auto",
    marginTop: 10
  },
  searchInput: {
    borderWidth: 1,
    width: "90%",
    margin: "auto",
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    zIndex: 10,
    backgroundColor: "#fff",
    padding: 10,
  },
  flatList: {
    marginBottom: 10,
  },
  itemList: {
    width: "90%",
    // height: 70,
    margin: "auto",
    flexDirection: "row",
    borderWidth: 1,
    padding: 10,
    paddingRight: 20,
    marginTop: 10,
    boxShadow: "0px 0px 10px #00000050",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  imgItem: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  nameItem: {
    flexDirection: "row",
  },
});
