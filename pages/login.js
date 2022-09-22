import Header from "../components/Header";
import Footer from "../components/Footer";
import { FlatList } from "react-native";
import Menu from "../components/Menu";
import LoginPage from "../components/Login";

const Login = () => {
  const data = [<Header />, <LoginPage />, <Footer />];
  return (
    <>
      <FlatList data={data} renderItem={({ item }) => item} />
      <Menu />
    </>
  );
};
export default Login;
