import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Menu from '../components/Menu';

// Tipos del stack de navegación
type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
  Cartelera: undefined;
  Profile: undefined;
};

type ProfileScreenNavigationProp = StackNavigationProp<AuthStackParamList, 'Profile'>;

const ProfileScreen: React.FC = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  return (
    <View style={styles.container}>

       <Menu />
       
      <Text style={styles.text}>¡Bienvenido a tu perfil!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
  },
  text: {
    color: '#FFF',
    fontSize: 18,
  },
});

export default ProfileScreen;
