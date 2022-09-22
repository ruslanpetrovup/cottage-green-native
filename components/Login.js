import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Pressable,
  ScrollView,
  Animated,
} from "react-native";
import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setToken, setData } from "../redux/userData";
import { setReg } from "../redux/regData";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const [dataLogin, setDataLogin] = useState({
    email: "",
    password: "",
  });
  const [isActiveError, setIsActiveError] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    if (isActiveError) {
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
  }, [isActiveError]);
  const userData = useSelector((state) => state.userData);
  const regData = useSelector((state) => state.regData.user);
  const linkTo = useNavigation().navigate;
  const dispatch = useDispatch();

  const emailInput = useRef(null);
  const passwordInput = useRef(null);
  useEffect(() => {
    console.dir("ok");
    if (Object.keys(regData).length !== 0) {
      axios
        .post("https://cottage-green.herokuapp.com/user/login", {
          email: regData.email,
          password: regData.password,
        })
        .then(({ data }) => {
          dispatch(setToken(data.data.token));
          dispatch(setReg({}));
        });
    }
  }, [regData]);

  useEffect(() => {
    const token = userData.user.token;
    if (token) {
      axios
        .get("https://cottage-green.herokuapp.com/auth/verify", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          dispatch(setData(res.data.data.total));
          linkTo("home");
        });
    } else {
      // setLoginOn(false);
      // setInfoUser({});
    }
  }, [useSelector((state) => state.userData.user.token)]);

  const loginUser = async () => {
    axios
      .post("https://cottage-green.herokuapp.com/user/login", {
        email: dataLogin.email,
        password: dataLogin.password,
      })
      .then((total) => {
        dispatch(setToken(total.data.data.token));
        emailInput.current.clear();
        passwordInput.current.clear();
        setDataLogin({});
      })
      .catch((resE) => {
        if (resE.response.status === 400) {
          setIsActiveError(true);
          setTimeout(() => {
            setIsActiveError(false);
          }, 2000);
          return;
        }
      });
  };

  const styles = StyleSheet.create({
    login: {
      padding: 10,
    },
    content: {
      paddingHorizontal: 40,
    },
    emailBlock: {
      marginBottom: 20,
      maxWidth: 300,
      width: "100%",
      marginHorizontal: "auto",
    },
    passwordBlock: {
      maxWidth: 300,
      width: "100%",
      marginHorizontal: "auto",
    },
    emailInput: {
      borderColor: "black",
      borderWidth: 1,
      paddingHorizontal: 5,
      paddingVertical: 5,
      marginTop: 5,
      width: "100%",
    },
    passwordInput: {
      borderColor: "black",
      borderWidth: 1,
      paddingHorizontal: 5,
      paddingVertical: 5,
      marginTop: 5,
      width: "100%",
    },
    loginButtonBlock: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginHorizontal: "auto",
    },
    loginButton: {
      maxWidth: 190,
      width: "100%",
      marginTop: 30,
      borderColor: "blue",
      borderWidth: 2,
      borderRadius: 10,
      paddingHorizontal: 10,
      paddingVertical: 8,
    },
    loginButtonText: {
      textAlign: "center",
      width: "100%",
      fontSize: 18,
      fontWeight: "bold",
    },
  });
  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <View style={styles.login}>
        <View style={styles.container}>
          <View style={styles.content}>
            <Animated.Text style={{ color: "red", opacity: fadeAnim }}>
              Ви ввели неправильно пошту або пароль
            </Animated.Text>
            <View style={styles.emailBlock}>
              <Text>Email</Text>
              <TextInput
                style={styles.emailInput}
                ref={emailInput}
                onChangeText={(value) =>
                  setDataLogin({
                    email: value,
                    password: dataLogin.password,
                  })
                }
              />
            </View>
            <View style={styles.passwordBlock}>
              <Text>Password</Text>
              <TextInput
                style={styles.passwordInput}
                ref={passwordInput}
                onChangeText={(value) =>
                  setDataLogin({
                    email: dataLogin.email,
                    password: value,
                  })
                }
              />
            </View>
            <View style={styles.loginButtonBlock}>
              <Pressable style={styles.loginButton} onPressIn={loginUser}>
                <Text style={styles.loginButtonText}>Login</Text>
              </Pressable>

              <Pressable
                style={styles.loginButton}
                onPress={() => linkTo("registration")}
              >
                <Text style={styles.loginButtonText}>Registration to</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default Login;
