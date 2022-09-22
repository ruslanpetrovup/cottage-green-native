import Header from "../components/Header";
import Houses from "../components/Houses";
import Footer from "../components/Footer";
import { FlatList } from "react-native";
import Menu from "../components/Menu";

const Contacts = () => {
  const data = [<Header />, <Houses />, <Footer />];
  return (
    <>
      <FlatList data={data} renderItem={({ item }) => item} />
      <Menu />
    </>
  );
};
export default Contacts;
