import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; 
import Button from '../components/Button';

const RegistrationScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [errors, setErrors] = useState({ email: '', username: '', password: '', confirmPassword: '' });

  const handleRegister = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let valid = true;

    // Check for empty fields
    if (!email) {
      setErrors((prev) => ({ ...prev, email: 'Email is required' }));
      valid = false;
    } else if (!emailRegex.test(email)) {
      setErrors((prev) => ({ ...prev, email: 'Invalid email address' }));
      valid = false;
    } else {
      setErrors((prev) => ({ ...prev, email: '' }));
    }

    if (!username) {
      setErrors((prev) => ({ ...prev, username: 'Username is required' }));
      valid = false;
    } else if (username.length < 8) {
      setErrors((prev) => ({ ...prev, username: 'Username must be at least 8 characters' }));
      valid = false;
    } else {
      setErrors((prev) => ({ ...prev, username: '' }));
    }

    if (!password) {
      setErrors((prev) => ({ ...prev, password: 'Password is required' }));
      valid = false;
    } else {
      setErrors((prev) => ({ ...prev, password: '' }));
    }

    if (!confirmPassword) {
      setErrors((prev) => ({ ...prev, confirmPassword: 'Confirm Password is required' }));
      valid = false;
    } else if (password !== confirmPassword) {
      setErrors((prev) => ({ ...prev, confirmPassword: 'Passwords should match' }));
      valid = false;
    } else {
      setErrors((prev) => ({ ...prev, confirmPassword: '' }));
    }

    if (!valid) return;

    Alert.alert('Success', 'Registration successful!');
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Image 
        source={require('../../assets/registration.png')} 
        style={styles.image} 
        resizeMode="contain" 
      />
      <Text style={styles.title}>Create an Account</Text>
      <TextInput
        placeholder="Email"
        placeholderTextColor="#ffffffcc"
        style={[styles.input, errors.email && { borderColor: 'red', borderWidth: 1 }]}
        value={email}
        onChangeText={setEmail}
      />
      {errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}

      <TextInput
        placeholder="Username"
        placeholderTextColor="#ffffffcc"
        style={[styles.input, errors.username && { borderColor: 'red', borderWidth: 1 }]}
        value={username}
        onChangeText={setUsername}
      />
      {errors.username ? <Text style={styles.errorText}>{errors.username}</Text> : null}

      <TextInput
        placeholder="Password"
        placeholderTextColor="#ffffffcc"
        secureTextEntry
        style={[styles.input, errors.password && { borderColor: 'red', borderWidth: 1 }]}
        value={password}
        onChangeText={setPassword}
      />
      {errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null}

      <TextInput
        placeholder="Confirm Password"
        placeholderTextColor="#ffffffcc"
        secureTextEntry
        style={[styles.input, errors.confirmPassword && { borderColor: 'red', borderWidth: 1 }]}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      {errors.confirmPassword ? <Text style={styles.errorText}>{errors.confirmPassword}</Text> : null}

      <Button title="Register" onPress={handleRegister} />

      <Text style={styles.footerText}>
          Already have an account?{' '}
          <Text
            style={styles.footerLink}
            onPress={() => navigation.navigate('Login')}
          >
            Login
          </Text>
        </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: { 
    flex: 1, 
    justifyContent: 'center',
    padding: 30
  },
  image: {
    width: '80%', 
    height: 200, 
    alignSelf: 'center', 
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
    marginTop: 20,
    color: '#000',
    textAlign: 'center',
  },
  footerLink: {
    color: '#4D81DA',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  errorText: {
    color: 'red',
    marginTop: -15,
    marginBottom: 10,
  },
});

export default RegistrationScreen;