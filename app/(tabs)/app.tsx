import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import AuthNavigator from "@/navigation/AuthNavigator";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const token = await AsyncStorage.getItem("authToken");
      if (token) {
        setIsAuthenticated(true);
      }
    };
    checkAuth();
  }, []);

  return (
    <NavigationContainer>
      <AuthNavigator isAuthenticated={isAuthenticated} />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
