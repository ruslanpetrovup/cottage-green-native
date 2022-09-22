import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { FlatList } from "react-native";
import Menu from "../components/Menu";
const Home = () => {
  const data = [<Header />, <Hero />, <Footer />];
  return (
    <>
      <FlatList data={data} renderItem={({ item }) => item} />
      <Menu />
    </>
  );
};
export default Home;
