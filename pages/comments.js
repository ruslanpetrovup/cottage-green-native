import Header from "../components/Header";
import Menu from "../components/Menu";
import Comment from "../components/Comment";
import Footer from "../components/Footer";
import { FlatList } from "react-native";

const Comments = () => {
  const data = [<Header />, <Comment />, <Footer />];

  return (
    <>
      <FlatList data={data} renderItem={({ item }) => item} />
      <Menu />
    </>
  );
};

export default Comments;
