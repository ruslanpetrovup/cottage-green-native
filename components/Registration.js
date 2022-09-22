import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Pressable,
  ScrollView,
} from "react-native";
import { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setReg } from "../redux/regData";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const Registration = () => {
  const dispatch = useDispatch();
  const linkTo = useNavigation().navigate;
  const emailInput = useRef(null);
  const nameInput = useRef(null);
  const secondnameInput = useRef(null);
  const passwordInput = useRef(null);
  const [dataRegistration, setDataRegistration] = useState({
    email: "",
    name: "",
    secondname: "",
    password: "",
  });
  const registerUser = () => {
    axios
      .post(
        "https://cottage-green.herokuapp.com/user/registration",
        {
          email: dataRegistration.email,
          name: dataRegistration.name,
          secondname: dataRegistration.secondname,
          password: dataRegistration.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((res) => {
        if (res.data._id === "") return;
        dispatch(
          setReg({
            email: dataRegistration.email,
            password: dataRegistration.password,
          })
        );
        setDataRegistration({});
        emailInput.current.clear();
        nameInput.current.clear();
        secondnameInput.current.clear();
        passwordInput.current.clear();
        linkTo("login");
      });
  };
  const styles = StyleSheet.create({
    registration: {
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
    nameBlock: {
      marginBottom: 20,
      maxWidth: 300,
      width: "100%",
      marginHorizontal: "auto",
    },
    secondNameBlock: {
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

    nameInput: {
      borderColor: "black",
      borderWidth: 1,
      paddingHorizontal: 5,
      paddingVertical: 5,
      marginTop: 5,
      width: "100%",
    },
    secondNameInput: {
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
    registrationButtonBlock: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginHorizontal: "auto",
    },
    registrationButton: {
      maxWidth: 190,
      marginHorizontal: "auto",
      width: "100%",
      marginTop: 30,
      borderColor: "blue",
      borderWidth: 2,
      borderRadius: 10,
      paddingHorizontal: 10,
      paddingVertical: 8,
    },
    registrationButtonText: {
      textAlign: "center",
      width: "100%",
      fontSize: 18,
      fontWeight: "bold",
    },
  });
  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <View style={styles.registration}>
        <View style={styles.container}>
          <View style={styles.content}>
            <View style={styles.emailBlock}>
              <Text>Email</Text>
              <TextInput
                ref={emailInput}
                style={styles.emailInput}
                onChangeText={(value) =>
                  setDataRegistration({
                    email: value,
                    name: dataRegistration.name,
                    secondname: dataRegistration.secondname,
                    password: dataRegistration.password,
                  })
                }
              />
            </View>
            <View style={styles.nameBlock}>
              <Text>Name</Text>
              <TextInput
                ref={nameInput}
                style={styles.nameInput}
                onChangeText={(value) =>
                  setDataRegistration({
                    email: dataRegistration.email,
                    name: value,
                    secondname: dataRegistration.secondname,
                    password: dataRegistration.password,
                  })
                }
              />
            </View>
            <View style={styles.secondNameBlock}>
              <Text>Secondname</Text>
              <TextInput
                ref={secondnameInput}
                style={styles.secondNameInput}
                onChangeText={(value) =>
                  setDataRegistration({
                    email: dataRegistration.email,
                    name: dataRegistration.name,
                    secondname: value,
                    password: dataRegistration.password,
                  })
                }
              />
            </View>
            <View style={styles.passwordBlock}>
              <Text>Password</Text>
              <TextInput
                ref={passwordInput}
                style={styles.passwordInput}
                onChangeText={(value) =>
                  setDataRegistration({
                    email: dataRegistration.email,
                    name: dataRegistration.name,
                    secondname: dataRegistration.secondname,
                    password: value,
                  })
                }
              />
            </View>
            <View style={styles.registrationButtonBlock}>
              <Pressable
                style={styles.registrationButton}
                onPress={registerUser}
              >
                <Text style={styles.registrationButtonText}>Registration</Text>
              </Pressable>
              <Pressable
                style={styles.registrationButton}
                onPress={() => linkTo("login")}
              >
                <Text style={styles.registrationButtonText}>Login Back</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Registration;
