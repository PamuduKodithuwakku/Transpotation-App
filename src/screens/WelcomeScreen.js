import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import Button from '../components/Button';

const WelcomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={{ uri: 'https://images.pexels.com/photos/1173777/pexels-photo-1173777.jpeg?cs=srgb&dl=pexels-darshan394-1173777.jpg&fm=jpg' }} 
      style={styles.background}
    >
      <View style={styles.container}>
        {/* Icon */}
        <Image 
          source={require('../../assets/icon1.png')} 
          style={styles.icon} 
        />
        {/* Welcome Text */}
        <Text style={styles.welcomeText}>
          Welcome to VeloxRide – Your Go-To Transport Solution!
        </Text>

        {/* Description Text */}
        <Text style={styles.descriptionText}>
          Whether you're looking to rent a vehicle for your next trip or need a quick ride around the city, we’ve got you covered. 
          Our app connects you with reliable transportation options to make your journeys more convenient and affordable. 
          Start your adventure with just a few taps!
        </Text>

        {/* Button */}
        <View style={styles.buttonContainer}>
          <Button
            title="Get Started!"
            onPress={() => navigation.navigate('Login')} 
          />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Semi-transparent background for better readability
    margin: 16,  // Added margin to avoid crowding at the edges
  },
  icon: {
    width: 150,  // Icon size
    height: 100,  // Icon size
    marginBottom: 20,  // Added margin below icon for spacing
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 20,
    color: 'white',
    textAlign: 'center',
    paddingHorizontal: 20,  // Added horizontal padding for better text alignment
    textShadowColor: 'rgba(0, 0, 0, 0.7)', // Text shadow for better contrast
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
  },
  descriptionText: {
    fontSize: 16,
    color: '#808080',  // Light gray
    textAlign: 'center',
    marginBottom: 40,
    paddingHorizontal: 25,  // Added padding to the sides
    lineHeight: 24,  // Improved line height for better readability
    textShadowColor: 'rgba(0, 0, 0, 0.7)', // Added text shadow for better contrast
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
  },
  buttonContainer: {
    width: '60%',  // Reduced width to make the button appear more centered and proportional
    marginTop: 20,
  },
});

export default WelcomeScreen;