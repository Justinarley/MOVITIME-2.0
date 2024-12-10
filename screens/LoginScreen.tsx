import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
};

type LoginScreenNavigationProp = StackNavigationProp<AuthStackParamList, 'Login'>;

const LoginScreen: React.FC = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // Simulación de la autenticación
    if (username === 'usuario' && password === 'contraseña') {
      // Si la autenticación es exitosa, guardamos un token
      await AsyncStorage.setItem('authToken', 'some_token');
      navigation.navigate('Home');  // Navega a Home o a la pantalla principal
    } else {
      // Si las credenciales no son correctas
      alert('Credenciales incorrectas');
    }
  };

  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/images/LOGO-MOVITIME.png')} 
        style={styles.logo} 
        resizeMode="contain" 
      />
      <Text style={styles.title}>MOVITIME</Text>
      <TextInput
        value={username}
        onChangeText={setUsername}
        placeholder="Usuario"
        placeholderTextColor="#AAA"
        style={styles.input}
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Contraseña"
        secureTextEntry
        placeholderTextColor="#AAA"
        style={styles.input}
      />
      <Text style={styles.registerText}>
        ¿No tienes una cuenta?{' '}
        <Text 
          style={styles.registerLink} 
          onPress={() => navigation.navigate('Register')}
        >
          Regístrate
        </Text>
      </Text>
      <TouchableOpacity 
        style={styles.button} 
        onPress={handleLogin}  // Usamos handleLogin para verificar las credenciales
      >
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 36,
    color: '#FFF',
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#333',
    borderRadius: 12,
    padding: 15,
    color: '#FFF',
    marginBottom: 20,
    width: '80%',
  },
  registerText: {
    color: '#FFF',
    fontSize: 14,
    marginTop: 20,
    textAlign: 'center',
  },
  registerLink: {
    color: '#FF5733',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  button: {
    backgroundColor: '#E50914',
    borderRadius: 10,
    width: '40%',
    padding: 15,
    alignItems: 'center',
    marginTop: 30,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
