import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import HomeScreen from "../screens/HomeScreen";
import CarteleraScreen from "../screens/CarteleraScreen";
import ProfileScreen from "../screens/ProfileScreen";

type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
  Cartelera: undefined;
  Profile: undefined;
};

type AuthNavigatorProps = {
  isAuthenticated: boolean;
};

const AuthStack = createStackNavigator<AuthStackParamList>();

export default function AuthNavigator({ isAuthenticated }: AuthNavigatorProps) {
  return (
    <AuthStack.Navigator
      initialRouteName={isAuthenticated ? "Home" : "Login"}
      screenOptions={{
        headerShown: false,
      }}
    >
      {isAuthenticated ? (
        <>
          <AuthStack.Screen name="Home" component={HomeScreen} />
          <AuthStack.Screen name="Cartelera" component={CarteleraScreen} />
          <AuthStack.Screen name="Profile" component={ProfileScreen} />
        </>
      ) : (
        <>
          <AuthStack.Screen name="Login" component={LoginScreen} />
          <AuthStack.Screen name="Register" component={RegisterScreen} />
        </>
      )}
    </AuthStack.Navigator>
  );
}
