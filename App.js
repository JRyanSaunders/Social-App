import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "react-navigation-stack";
import LoadingScreen from "./screens/LoadingScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";
import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDVNGw60MMj5GTPNmRdL7I9YFXwm4xQsqY",
  authDomain: "bbapp-99e2d.firebaseapp.com",
  databaseURL: "https://bbapp-99e2d.firebaseio.com",
  projectId: "bbapp-99e2d",
  storageBucket: "bbapp-99e2d.appspot.com",
  messagingSenderId: "768032550357",
  appId: "1:768032550357:web:f6305fb44e36a8f5e1a15c",
};

firebase.initializeApp(firebaseConfig);

const Stack = createStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="Loading"
      screenOptions={{ gestureEnabled: false }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Home" }}
      />
      <Stack.Screen
        name="Loading"
        component={RegisterScreen}
        initialParams={{ title: "Loading" }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        initialParams={{ title: "Login" }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        initialParams={{ title: "Register" }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? (
          <>
            <Stack.Screen name="Loading" component={LoadingScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
          </>
        ) : (
          <Stack.Screen name="Login" component={LoginScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/* const AppStack = createStackNavigator({
  Home: HomeScreen,
});

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen,
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: "Loading",
    }
  )
);
*/
