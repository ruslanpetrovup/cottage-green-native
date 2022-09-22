import {
  Text,
  View,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Dimensions,
} from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";
import room from "../assets/images/room.png";
import bed from "../assets/images/bed.png";
import people from "../assets/images/people.png";
import stairs from "../assets/images/stairs.png";
import { useLinkTo } from "@react-navigation/native";

const Houses = () => {
  const [cottages, setData] = useState([]);
  const linkTo = useLinkTo();
  useEffect(() => {
    axios.get("https://cottage-green.herokuapp.com/catalog/get").then((res) => {
      setData(res.data);
    });
  }, []);
  const styles = StyleSheet.create({
    container: {
      maxWidth: Dimensions.get("window").width,
      flex: 1,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      marginHorizontal: "auto",
    },
    housesContent: {
      paddingTop: 20,
    },
    housesListBlock: {
      display: "flex",
      justifyContent: "center",
    },
    housesList: {
      flex: 1,
      flexDirection: "column",
      alignItems: "center",
      marginHorizontal: "auto",
      width: Dimensions.get("window").width - 35,
    },
    housesItem: {
      display: "flex",
      marginBottom: 50,
    },
    housesItemImg: {
      width: Dimensions.get("window").width - 35,
      height: 250,
    },
    housesItemBlock: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: "white",
    },
    housesItemTitle: {
      textAlign: "center",
      borderBottomWidth: 1,
      borderBottomColor: "rgba(0, 0, 0, 0.1)",
      padding: 10,
      backgroundColor: "#094909c7",
      color: "white",
      fontSize: 21,
    },
    housesItemTextList: {
      marginTop: 8,
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      marginBottom: 30,
    },

    housesItemText: {
      display: "flex",
      alignItems: "center",
      fontSize: 23,
      marginRight: 15,
    },
    housesItemTextIcon: {
      width: 25,
      height: 25,
      marginRight: 3,
    },
    housesItemDes: {
      fontSize: 16,
      paddingHorizontal: 20,
      paddingVertical: 19,
      wordBreak: "break-all",
    },
    housesItemPrise: {
      marginTop: "auto",
      fontSize: 22,
      fontWeight: "bold",
      color: "#8eff00",
      textAlign: "left",
      marginLeft: 20,
    },
    housesItemBuy: {
      padding: 10,
      borderWidth: 1,
      borderColor: "#8eff00",
      marginTop: 30,
      textAlign: "center",
      boxSizing: "border-box",
      cursor: "pointer",
    },
    housesItemBuyText: {
      fontSize: 16,
      fontWeight: "bold",
      color: "#8eff00",
      textAlign: "center",
    },
  });
  return (
    <View style={styles.houses}>
      <View style={styles.container}>
        <View style={styles.housesContent}>
          <View style={styles.housesListBlock}>
            {cottages.length === 0 ? null : (
              <FlatList
                data={cottages}
                renderItem={({ item }) => (
                  <View style={styles.housesItem}>
                    <Text style={styles.housesItemTitle}>{item.title}</Text>
                    <Image
                      style={styles.housesItemImg}
                      source={{ uri: item.img }}
                    />

                    <View style={styles.housesItemBlock}>
                      <View style={styles.housesItemTextList}>
                        <Text style={styles.housesItemText}>
                          <Image
                            source={room}
                            style={styles.housesItemTextIcon}
                          />
                          {item.room}
                        </Text>
                        <Text style={styles.housesItemText}>
                          <Image
                            source={bed}
                            style={styles.housesItemTextIcon}
                          />
                          {item.bed}
                        </Text>
                        <Text style={styles.housesItemText}>
                          <Image
                            source={people}
                            style={styles.housesItemTextIcon}
                          />
                          {item.people}
                        </Text>
                        <Text style={styles.housesItemText}>
                          <Image
                            source={stairs}
                            style={styles.housesItemTextIcon}
                          />
                          {item.stairs}
                        </Text>
                      </View>
                      <Text style={styles.housesItemDes}>{item.desc}</Text>
                      <Text style={styles.housesItemPrise}>
                        Ціна: {item.price}грн\ніч
                      </Text>
                      <Pressable
                        onPress={() => linkTo(`/house/${item._id}`)}
                        style={styles.housesItemBuy}
                      >
                        <Text style={styles.housesItemBuyText}>
                          Забронювати
                        </Text>
                      </Pressable>
                    </View>
                  </View>
                )}
                style={styles.housesList}
              />
            )}
          </View>
        </View>
      </View>
    </View>
  );
};
export default Houses;
