import { useEffect } from "react";
import { Dimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import Home from "./pages/home";
import Rent from "./pages/rent";
import Comments from "./pages/comments";
import Login from "./pages/login";
import Registration from "./pages/registration";

export default function App() {
  const Stack = createNativeStackNavigator();

  useEffect(() => {
    const onChange = () => {
      const windowWidth = Dimensions.get("window").width;
    };

    const desc = Dimensions.addEventListener("change", onChange);
    return () => {
      desc?.remove();
    };
  }, []);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="home"
            options={{
              headerShown: false,
            }}
            component={Home}
          />

          <Stack.Screen
            name="rent"
            options={{
              headerShown: false,
            }}
            component={Rent}
          />
          <Stack.Screen
            name="comments"
            options={{
              headerShown: false,
            }}
            component={Comments}
          />
          <Stack.Screen
            name="login"
            options={{
              headerShown: false,
            }}
            component={Login}
          />
          <Stack.Screen
            name="registration"
            options={{
              headerShown: false,
            }}
            component={Registration}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
