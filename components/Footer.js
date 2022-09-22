import { useLinkTo } from "@react-navigation/native";
import {
  Text,
  View,
  Pressable,
  Image,
  FlatList,
  StyleSheet,
} from "react-native";
import logo from "../assets/images/logo-test.png";

const Footer = () => {
  const linkTo = useLinkTo();
  const DATA = [
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
  ];
  return (
    <View style={styles.footer}>
      <View style={styles.footerBlock}>
        <View style={styles.footerAuthor}>
          <Text style={styles.footerAuthorOwn}>
            Ⓒ Company property Cottage
            <Text style={styles.footerAuthorOwnSpan}> Green</Text>
          </Text>
          <Text style={styles.footerAuthorYear}>2022 - 2023</Text>
        </View>
      </View>
    </View>
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
  footer: { background: "#90937e30", paddingBottom: 50 },
  footerBlock: {
    flex: 1,
    width: "100%",
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  footerContent: { flex: 1, width: "100%" },
  footerLogoLink: { flex: 1, alignItems: "center", maxHeight: 100 },
  footerLogoImg: { maxWidth: 40, maxHeight: 40, marginRight: 5 },
  footerLogoTitle: { color: "#4a3a2b", fontSize: 30, marginLeft: 5 },
  footerLogoTitleSpan: { color: "#375215", fontWeight: "bold" },
  footerMenu: { flex: 1, flexDirection: "column" },
  footerItem: { marginBottom: 10 },
  footerItemLink: {
    position: "relative",
    color: "#375215",
    fontSize: 19,
    fontWeight: "bold",
    cursor: "pointer",
    paddingBottom: 2,
  },

  footerAuthor: {
    paddingVertical: 20,
    paddingHorizontal: 0,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: "auto",
    marginVertical: 0,
    width: "100%",
  },
  footerAuthorOwn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginHorizontal: "auto",
    marginVertical: 0,
    width: "100%",
  },
  footerAuthorOwnSpan: { color: "#375215", fontWeight: "bold" },
});
export default Footer;
