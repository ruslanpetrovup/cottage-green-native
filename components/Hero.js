import {
  Text,
  View,
  Pressable,
  ImageBackground,
  StyleSheet,
} from "react-native";

import { useLinkTo } from "@react-navigation/native";
import image from "../assets/images/hero.jpg";

const Hero = () => {
  const linkTo = useLinkTo();
  return (
    <View style={styles.hero}>
      <View style={styles.container}>
        <ImageBackground
          source={image}
          resizeMode="cover"
          style={styles.heroContent}
        >
          <View style={styles.heroBlock}>
            <Text style={styles.heroTitle}>
              Cottage<Text style={styles.heroTitleSpan}>Green</Text>
            </Text>
            <Text style={styles.heroText}>
              <Text style={styles.heroTextSpan1}>Cottage</Text>
              <Text style={styles.heroTextSpan2}>Green</Text> - це відмінний
              варіант для відпочинку всією родиною або компанією друзів. Чудовий
              сервіс, дружній персонал. Наші співробітники завжди прийдуть на
              допомогу. Тут ви зможете возз'єднатися з природою. Бронюйте прямо
              зараз.
            </Text>
            <Pressable
              onPress={() => linkTo("/rent")}
              style={styles.heroButton}
            >
              <View style={styles.heroButtonThoomb}></View>
              <Text style={styles.heroButtonText}>Забронювати</Text>
            </Pressable>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  heroContent: {
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top",
    height: 300,
  },
  heroBlock: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    height: 300,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  heroTitle: { fontSize: 35, color: "white", marginBottom: 15 },
  heroTitleSpan: { color: "#8eff00" },
  heroText: {
    fontSize: 15,
    color: "#fefefedb",
    textAlign: "justify",
    lineHeight: 21,
    maxWidth: 560,
    marginLeft: "auto",
    marginRight: "auto",
    marginVertical: 0,
    marginBottom: 10,
    paddingVertical: 0,
    paddingHorizontal: 20,
  },
  heroTextSpan1: { color: "white", fontSize: 15 },
  heroTextSpan2: { color: "#8eff00", fontSize: 15, marginLeft: 5 },
  heroButton: {
    position: "relative",
    borderWidth: 1,
    borderColor: "#8eff00",
    paddingVertical: 5,
    paddingHorizontal: 15,
    display: "flex",
    alignItems: "center",
    transition: "all 250ms linear",
    cursor: "pointer",
    borderRadius: 5,
  },
  heroButtonText: {
    color: "white",
    fontSize: 27,
    fontWeight: "bold",
    zIndex: 1,
  },
});
export default Hero;
