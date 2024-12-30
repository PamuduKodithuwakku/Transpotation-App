import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; // For icons

const HomeScreen = ({ route }) => {
  const { username } = route.params;
  const [vehicles, setVehicles] = useState([]);
  const [selectedCount, setSelectedCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    fetch('https://run.mocky.io/v3/a97ded4b-d6da-4453-af1d-0be89c760397')
      .then((response) => response.json())
      .then((data) => {
        setVehicles(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleSelectVehicle = () => {
    setSelectedCount(selectedCount + 1);
  };

  const handleViewDetails = (vehicle) => {
    navigation.navigate('VehicleDetails', { vehicle });
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{item.name}</Text>
        <Text style={styles.cardRoute}>Route: {item.route}</Text>
        <Text style={styles.cardDescription}>{item.description}</Text>
        {/* Conditional styling for availability */}
        <Text
          style={[
            styles.cardAvailability,
            { color: item.availability === 'yes' ? '#1a73e8' : '#ff5252' },
          ]}
        >
          {item.availability === 'yes' ? 'Available' : 'Not Available'}
        </Text>
        <Text style={styles.cardCost}>Cost: ${item.cost} per day</Text>
        <View style={styles.cardActions}>
          <TouchableOpacity style={styles.detailsButton} onPress={() => handleViewDetails(item)}>
            <Ionicons name="information-circle-outline" size={16} color="white" style={styles.icon} />
            <Text style={styles.detailsButtonText}>View Details</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.rentButton,
              item.availability !== 'yes' && styles.rentButtonDisabled, // Disable button style
            ]}
            onPress={handleSelectVehicle}
            disabled={item.availability !== 'yes'} // Disable button if not available
          >
            <Ionicons name="car-outline" size={16} color="white" style={styles.icon} />
            <Text style={styles.rentButtonText}>Rent</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );  

  if (loading) {
    return (
      <View style={[styles.container, styles.center]}>
        <ActivityIndicator size="large" color="#007bff" />
        <Text style={styles.loadingText}>Loading vehicles...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome, {username}!</Text>
      <FlatList
        data={vehicles}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.list}
      />
      <TouchableOpacity style={styles.floatingButton}>
        <Text style={styles.floatingButtonText}>Selected Vehicles</Text>
        {selectedCount > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{selectedCount}</Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafc',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
    marginLeft: 16,
    color: '#4D81DA',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: '#f9f9f9', // Softer background color
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 6,
    marginBottom: 8,
    marginTop: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#e0e0e0', 
  },
  cardImage: {
    width: '100%',
    height: 180,
    resizeMode: 'contain', 
  },
  cardContent: {
    padding: 16,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  cardRoute: {
    fontSize: 16,
    color: '#555', 
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },
  cardAvailability: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1a73e8', 
    marginBottom: 5,
  },
  cardCost: {
    fontSize: 14,
    fontWeight: '600',
    color: '#ff8c00',
    marginBottom: 10,
  },
  cardActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailsButton: {
    backgroundColor: '#1a73e8',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  detailsButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
    marginLeft: 8,
  },
  rentButton: {
    backgroundColor: '#34a853', 
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  rentButtonDisabled: {
    backgroundColor: '#bdbdbd', // Gray color to indicate disabled state
  },
  rentButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
    marginLeft: 8,
  },
  icon: {
    marginRight: 8,
  },
  floatingButton: {
    position: 'absolute',
    bottom: 30,
    right: 20,
    backgroundColor: '#007bff',
    width: 100,
    height: 60,
    borderRadius: 30,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
  },
  floatingButtonText: {
    fontWeight: 'bold',
    color: 'white',
  },
  badge: {
    position: 'absolute',
    top: -4,
    right: -4,
    backgroundColor: '#ff5252',
    borderRadius: 10,
    width: 21,
    height: 21,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: '#666',
  },
});

export default HomeScreen;