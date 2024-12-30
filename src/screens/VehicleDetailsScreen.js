import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const VehicleDetailsScreen = ({ route }) => {
  const { vehicle } = route.params; // Retrieve the vehicle data passed from HomeScreen
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: vehicle.image }} style={styles.image} />
      
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{vehicle.name}</Text>
        <Text style={styles.route}>Route: {vehicle.route}</Text>
        <Text style={styles.description}>{vehicle.description}</Text>

        {/* Additional Vehicle Attributes */}
        <View style={styles.attributeContainer}>
          <Text style={styles.attribute}>
            <Text style={styles.attributeLabel}>Model: </Text>
            {vehicle.model}
          </Text>
          <Text style={styles.attribute}>
            <Text style={styles.attributeLabel}>A/C: </Text>
            {vehicle["A/C"] === "Yes" ? "Available" : "Not Available"}
          </Text>
          <Text style={styles.attribute}>
            <Text style={styles.attributeLabel}>Seat Capacity: </Text>
            {vehicle.seatingCapacity}
          </Text>
        </View>

        {/* Action Buttons */}
        <TouchableOpacity
          style={styles.rentButton}
          onPress={() => navigation.navigate('RentVehicle', { vehicle })}
        >
          <Text style={styles.buttonText}>Rent Vehicle</Text>
        </TouchableOpacity>
     
        <TouchableOpacity
          style={styles.contactButton}
          onPress={() => navigation.navigate('ContactOwner', { owner: vehicle.owner })}
        >
          <Text style={styles.buttonText}>Contact Owner</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  image: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  detailsContainer: {
    marginTop: 16,
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  route: {
    fontSize: 18,
    color: '#007bff',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: '#666',
    lineHeight: 22,
    marginBottom: 20,
  },
  attributeContainer: {
    marginBottom: 20,
  },
  attribute: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
  attributeLabel: {
    fontWeight: 'bold',
    color: '#555',
  },
  rentButton: {
    backgroundColor: '#28a745',
    paddingVertical: 14,
    borderRadius: 8,
    marginBottom: 16,
    alignItems: 'center',
    elevation: 5,
  },
  contactButton: {
    backgroundColor: '#007bff',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default VehicleDetailsScreen;