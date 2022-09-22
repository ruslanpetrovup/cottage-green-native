import logo from "../assets/images/logo-test.png";
import {
  Text,
  View,
  Image,
  Pressable,
  StyleSheet,
  FlatList,
} from "react-native";
import { useLinkTo } from "@react-navigation/native";
import { useState } from "react";

const Header = () => {
  const linkTo = useLinkTo();
  const [isOpen, setIsOpen] = useState(100);
  const [menu, setMenu] = useState([
    {
      id: 1,
      title: "Головна",
      path: "/home",
    },
    {
      id: 2,
      title: "Забронювати",
      path: "/rent",
    },
    {
      id: 3,
      title: "Відгуки",
      path: "/comments",
    },
    {
      id: 4,
      title: "Контакти",
      path: "/contacts",
    },
  ]);
  return (
    <>
      <View style={styles.header}>
        <View style={styles.container}>
          <View style={styles.headerContent}>
            <View style={styles.headerLogo}>
              <Pressable
                style={styles.headerLogoLink}
                onPress={() => linkTo("/home")}
              >
                <Image style={styles.headerLogoImg} source={logo} />
                <Text style={styles.headerLogoTitle}>
                  Cottage<Text style={styles.headerLogoTitleSpan}>Green</Text>
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: "auto",
    marginRight: "auto",
    marginVertical: 0,
    paddingVertical: 0,
    paddingHorizontal: 15,
    maxWidth: 480,
  },
  header: {
    paddingVertical: 20,
    paddingHorizontal: 0,
    paddingTop: 50,
    background: "#90937e30",
    position: "relative",
  },

  headerContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    boxSizing: "border-box",
  },

  headerLogoLink: {
    display: "flex",
    alignItems: "center",
  },

  headerLogoImg: {
    maxWidth: 40,
    maxHeight: 40,
    marginRight: 5,
  },

  headerLogoTitle: {
    color: "#4a3a2b",
    fontSize: 30,
    marginLeft: 5,
  },

  headerLogoTitleSpan: {
    color: "#375215",
    fontWeight: "bold",
  },

  rightDoor: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: "0%",
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    zIndex: 6,
  },

  rightDoorRed: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "50%",
    left: 0,
    backgroundColor: "red",
    width: 30,
    height: 140,
    marginLeft: "auto",
    marginRight: "auto",
    marginVertical: 0,
  },

  rightDoorRedText: {
    transform: [{ rotate: "-90deg" }],
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    width: 80,
    textAlign: "center",
  },

  rightDoorClose: {
    position: "absolute",
    top: 40,
    left: 10,
    width: 100,
    height: 40,
  },

  rightDoorCloseText: {
    fontSize: 18,
    color: "white",
    backgroundColor: "red",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },

  rightDoorList: {
    marginTop: 50,
  },

  rightDoorListButton: {
    marginBottom: 50,
  },

  rightDoorListButtonText: {
    fontSize: 30,
  },
});
export default Header;
