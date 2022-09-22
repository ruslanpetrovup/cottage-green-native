import {
  Text,
  FlatList,
  View,
  Pressable,
  StyleSheet,
  Image,
  Animated,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState, useRef } from "react";
import menu from "../assets/images/menu.png";
import login from "../assets/images/login.png";
import phone from "../assets/images/phone.png";

const Menu = () => {
  const DATA = [
    {
      id: 1,
      title: "Головна",
      path: "home",
    },
    {
      id: 2,
      title: "Забронювати",
      path: "rent",
    },
    {
      id: 3,
      title: "Відгуки",
      path: "comments",
    },
    {
      id: 4,
      title: "Контакти",
      path: "contacts",
    },
  ];
  const [isActiveMenu, setIsActiveMenu] = useState(false);
  useEffect(() => {
    if (isActiveMenu) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 250,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      }).start();
    }
  }, [isActiveMenu]);
  const closeMenu = () => {
    setIsActiveMenu(false);
  };
  const linkTo = useNavigation().navigate;

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const [widthMenu, setWidthMenu] = useState({});
  const [widthMenu2, setWidthMenu2] = useState({});
  const test = (e) => {
    if (e.nativeEvent.layout.width === 0) return;
    if (Object.keys(widthMenu).length !== 0) {
      // console.dir(widthMenu);
      return;
    }
    setWidthMenu(e.nativeEvent.layout);
  };
  const test2 = (e) => {
    if (e.nativeEvent.layout.width === 0) return;
    if (Object.keys(widthMenu2).length !== 0) {
      return;
    }
    setWidthMenu2(e.nativeEvent.layout);
  };

  const suka = () => {
    let result = 0;
    if (
      Object.keys(widthMenu).length !== 0 &&
      Object.keys(widthMenu2).length !== 0
    ) {
      result = widthMenu.width / 2 - widthMenu2.width / 2;
    } else {
      result = 50;
    }
    return result;
  };
  const styles = StyleSheet.create({
    menu: {
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      backgroundColor: "black",
      paddingVertical: 5,
      paddingBottom: 30,
    },
    menuContent: {
      flex: 1,
      justifyContent: "space-around",
      alignItems: "center",
      flexDirection: "row",
    },
    menuButtonOne: {
      position: "relative",
      paddingVertical: 5,
      paddingHorizontal: 15,
    },
    menuListBlock: {
      borderRadius: 5,
      width: 220,
      position: "absolute",
      pointerEvents: isActiveMenu ? "auto" : "none",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      bottom:
        Object.keys(widthMenu).length === 0 ? "100%" : widthMenu.height + 2,

      backgroundColor: "black",
      left: suka(),
    },

    menuListItemText: {
      fontSize: 30,
      color: "pink",
    },
  });

  return (
    <View style={styles.menu}>
      <View style={styles.menuContent}>
        <Pressable style={styles.menuButton} onPress={() => linkTo("login")}>
          <Image
            source={login}
            style={{
              maxWidth: 35,
              maxHeight: 35,
              width: 35,
              height: 35,
              margin: 0,
              padding: 0,
            }}
          />
        </Pressable>

        <Pressable
          style={styles.menuButtonOne}
          onLayout={test}
          onPress={() => {
            setIsActiveMenu(!isActiveMenu);
          }}
        >
          <Animated.View
            style={[styles.menuListBlock, { opacity: fadeAnim }]}
            onLayout={test2}
          >
            <FlatList
              data={DATA}
              contentContainerStyle={{
                flexGrow: 1,
                justifyContent: "center",
                alignItems: "center",
                padding: 10,
              }}
              renderItem={({ item }) => (
                <Pressable
                  onPress={() => {
                    linkTo(item.path), closeMenu();
                  }}
                  style={styles.menuListItem}
                >
                  <Text style={styles.menuListItemText}>{item.title}</Text>
                </Pressable>
              )}
            />
          </Animated.View>

          <Image
            source={menu}
            style={{
              maxWidth: 40,
              maxHeight: 40,
              width: 40,
              height: 40,
              margin: 0,
              padding: 0,
            }}
          />
        </Pressable>
        <Pressable style={styles.menuButton}>
          <Image
            source={phone}
            style={{
              maxWidth: 40,
              maxHeight: 40,
              width: 40,
              height: 40,
              margin: 0,
              padding: 0,
            }}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default Menu;
