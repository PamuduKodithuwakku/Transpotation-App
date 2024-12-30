import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground } from 'react-native';

const ContactOwnerScreen = ({ route, navigation }) => {
  const { owner } = route.params;

  return (
    <ImageBackground
      source={{ uri: 'https://via.placeholder.com/800x600.png?text=Background+Image' }} // Replace with an actual background image URL
      style={styles.background}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.header}>Contact Owner</Text>

          <View style={styles.infoContainer}>
            <Text style={styles.label}>Owner Name:</Text>
            <Text style={styles.value}>{owner.name}</Text>
          </View>

          <View style={styles.infoContainer}>
            <Text style={styles.label}>Phone Number:</Text>
            <Text style={styles.value}>{owner.phone}</Text>
          </View>

          <Text style={styles.label}>Message:</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Write your message here..."
            multiline
            numberOfLines={4}
            placeholderTextColor="#888"
          />

          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.buttonText}>Send Message</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 20,
    borderRadius: 16,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 10,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  infoContainer: {
    marginBottom: 16,
    backgroundColor: '#f7f7f7',
    padding: 12,
    borderRadius: 8,
  },
  label: {
    fontSize: 16,
    color: '#555',
    marginBottom: 4,
  },
  value: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  textInput: {
    height: 120,
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    textAlignVertical: 'top',
    marginBottom: 20,
    color: '#333',
  },
  submitButton: {
    backgroundColor: '#007bff',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ContactOwnerScreen;