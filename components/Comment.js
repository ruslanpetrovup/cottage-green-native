import {
  Text,
  FlatList,
  View,
  Pressable,
  Image,
  StyleSheet,
  TextInput,
  Animated,
} from "react-native";
import axios from "axios";
import { useSelector } from "react-redux";
import { useState, useEffect, useRef } from "react";

const Comment = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [comment, setComment] = useState([]);
  const [isOpenError, setIsOpenError] = useState(false);
  const [textComment, setTextComment] = useState("");
  const textInput = useRef(null);
  const user = useSelector((state) => state.userData.user.data);
  useEffect(() => {
    axios.get("https://cottage-green.herokuapp.com/comment/get").then((res) => {
      setComment(res.data);
    });
  }, []);

  useEffect(() => {
    if (isOpenError) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 750,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 750,
        useNativeDriver: true,
      }).start();
    }
  }, [isOpenError]);
  const addComment = async () => {
    if (Object.keys(user).length === 0) {
      setIsOpenError(true);
      setTimeout(() => {
        setIsOpenError(false);
      }, 4000);
      return;
    }
    if (textComment.length < 2) return;
    const result = await axios.post(
      "https://cottage-green.herokuapp.com/comment/add",
      {
        avatar: user.avatar,
        name: user.name,
        secondname: user.secondname,
        comment: textComment,
      }
    );
    textInput.current.clear();
    setTextComment("");
    setComment([...comment, result.data]);
  };

  const ListComponent = ({ arr }) => {
    return (
      <View style={{ flex: 1, flexDirection: "column-reverse" }}>
        {arr.map((item, index) => (
          <View style={styles.commentItem} key={index}>
            <View style={styles.commentItemProfile}>
              <Image
                style={styles.commentItemProfileImg}
                source={{ uri: item.avatar }}
              />
              <Text style={styles.commentItemProfileName}>{item.name}</Text>
              <Text style={styles.commentItemProfileSecondname}>
                {item.secondname}
              </Text>
            </View>
            <View style={styles.commentItemText}>
              <Text style={styles.commentItemTextCom}>{item.comment}</Text>
            </View>
          </View>
        ))}
      </View>
    );
  };
  const styles = StyleSheet.create({
    comment: {
      paddingHorizontal: 10,
    },
    commentItemProfileImg: {
      width: 30,
      height: 30,
      maxHeight: 30,
      maxWidth: 30,
    },

    commentTitle: {
      fontSize: 25,
      fontWeight: "bold",
      marginTop: 30,
      textAlign: "center",
    },
    commentDesc: {
      textAlign: "center",
      marginTop: 10,
    },
    commentSubmit: {
      marginTop: 20,
    },
    commentSumbitForm: {
      display: "flex",
      width: "100%",
      flexDirection: "column",
      boxSizing: "border-box",
    },
    commentSubmitFormInput: {
      minHeight: 100,
      resize: "none",
      boxSizing: "border-box",
      borderWidth: 1,
      bordeColor: "green",
      fontSize: 18,
      paddingHorizontal: 20,
      paddingVertical: 10,
    },
    commentSubmitButtonBlock: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      marginTop: 10,
    },

    commentSubmitButtonMessage: {
      pointerEvents: "none",
      fontSize: 16,
      fontWeight: "bold",
      color: "red",
    },
    commentSumbitButton: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: 80,
      paddingVertical: 15,
      backgroundColor: "transparent",
      borderWidth: 1,
      bordeColor: "green",
      color: "green",
      fontSize: 16,
      fontWeight: "bold",
    },
    commentList: {
      paddingTop: 10,
      paddingBottom: 30,
      marginTop: 30,
      borderTopColor: "green",
      borderTopWidth: 1,
      flex: 1,
      flexDirection: "column-reverse",
    },
    commentItem: {
      display: "flex",
      flexDirection: "row",
      paddingBottom: 20,
      borderBottomColor: "green",
      borderBottomWidth: 1,
    },
    commentItemProfile: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: "20%",
      paddingTop: 10,
    },

    commentItemText: {
      width: "80%",
      paddingTop: 10,
    },
  });
  return (
    <View style={styles.comment}>
      <View style={styles.commentBlock}>
        <View style={styles.commentSubmit}>
          <View style={styles.commentSumbitForm}>
            <TextInput
              ref={textInput}
              onChangeText={setTextComment}
              style={styles.commentSubmitFormInput}
            />
            <View style={styles.commentSubmitButtonBlock}>
              <Animated.Text
                style={[
                  styles.commentSubmitButtonMessage,
                  { opacity: fadeAnim },
                ]}
              >
                Для написання повідомлення вам потрібно зареєструватися або
                увійти до свого облікового запису
              </Animated.Text>
              <Pressable
                onPress={addComment}
                style={styles.commentSumbitButton}
              >
                <Text>Надіслати</Text>
              </Pressable>
            </View>
          </View>
        </View>
        <View>
          {comment.length === 0 ? null : <ListComponent arr={comment} />}
        </View>
      </View>
    </View>
  );
};

export default Comment;
