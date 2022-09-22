import Header from "../components/Header";
import Footer from "../components/Footer";
import { FlatList } from "react-native";
import Menu from "../components/Menu";
import RegistrationPage from "../components/Registration";

const Registration = () => {
  const data = [<Header />, <RegistrationPage />, <Footer />];
  return (
    <>
      <FlatList data={data} renderItem={({ item }) => item} />
      <Menu />
    </>
  );
};
export default Registration;
