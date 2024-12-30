import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Alert,
  Text,
  TextInput,
  ImageBackground,
  Image
} from 'react-native';
import Button from '../components/Button';

const validUsers = [
  { user: 'Pamudu', email: 'pamudupankaja2002@gmail.com', password: '123456' },
  { user: 'Manuli', email: 'manulihansana@gmail.com', password: '654321' },
];

const LoginScreen = ({ navigation }) => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const handleChange = (field, value) => {
    setValues((prev) => ({ ...prev, [field]: value }));
  };

  const validate = () => {
    const newErrors = { email: '', password: '' };

    if (!values.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!values.password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return !newErrors.email && !newErrors.password;
  };

  const handleLogin = () => {
    const isValid = validate();

    if (isValid) {
      const user = validUsers.find(
        (user) => user.email === values.email && user.password === values.password
      );

      if (user) {
        Alert.alert('Login Successful', `Welcome ${user.user}!`);
        const username = user.user;
        navigation.navigate('Home', { username});
      } else {
        Alert.alert('Login Failed', 'Invalid email or password');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/login.png')} style={styles.image}/>
      <View style={styles.card}>
        <Text style={styles.title}>Welcome back!</Text>

        {/* Email Input */}
        <Text style={styles.errorText}>{errors.email}</Text>
        <TextInput
          placeholder="Email"
          placeholderTextColor="#ffffffcc"
          style={[styles.input, errors.email && { borderColor: 'red', borderWidth: 1 }]}
          value={values.email}
          onChangeText={(value) => handleChange('email', value)}
        />

        <Text style={styles.errorText}>{errors.password}</Text>
        <TextInput
          placeholder="Password"
          placeholderTextColor="#ffffffcc"
          style={[styles.input, errors.password && { borderColor: 'red', borderWidth: 1 }]}
          secureTextEntry
          value={values.password}
          onChangeText={(value) => handleChange('password', value)}
        />

        <Button title="Login" onPress={handleLogin} />

        <Text style={styles.footerText}>
          Don't have an account?{' '}
          <Text
            style={styles.footerLink}
            onPress={() => navigation.navigate('Register')}
          >
            Sign Up
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  image: {
    width: '60%',
    height: 250,
    alignSelf: 'center',
    marginBottom: 20,
    resizeMode: 'contain', // Ensures image scales well
  },
  card: {
    width: '90%',
    maxWidth: 400,
    padding: 20,
    borderRadius: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Transparent card
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#4D81DA',
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: 'rgba(130, 122, 122, 0.5)', // Slight transparency
    color: 'white',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'rgba(70, 67, 67, 0.2)',
  },
  footerText: {
    color: '#000',
    marginTop: 16,
    textAlign: 'center',
  },
  footerLink: {
    color: '#4D81DA',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  errorText: {
    color: 'red',
    alignSelf: 'flex-start',
    marginBottom: 5,
  },
});

export default LoginScreen;