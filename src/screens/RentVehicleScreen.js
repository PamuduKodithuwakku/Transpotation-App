import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const RentVehicleScreen = ({ route, navigation }) => {
  const { vehicle } = route.params; // Get vehicle details
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showStartPicker, setShowStartPicker] = useState(false);
  const [showEndPicker, setShowEndPicker] = useState(false);

  const costPerDay = vehicle.cost; // Correct cost value
  const rentalDuration = Math.max(1, Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24))); // Duration in days
  const totalCost = rentalDuration * costPerDay; // Total cost calculation

  const handleConfirmRental = () => {
    // Handle rental confirmation
    alert(`Rental confirmed for ${name}! Total cost: $${totalCost}`);
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: vehicle.image }} style={styles.image} />
      <View style={styles.header}>
        <Text style={styles.vehicleName}>{vehicle.name}</Text>
        <Text style={styles.route}>Route: {vehicle.route}</Text>
        <Text style={styles.cost}>Cost per day: ${costPerDay}</Text>
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.label}>Your Name:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.label}>Contact Number:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your contact number"
          keyboardType="phone-pad"
          value={contact}
          onChangeText={setContact}
        />

        <Text style={styles.label}>Start Date:</Text>
        <TouchableOpacity onPress={() => setShowStartPicker(true)} style={styles.dateInput}>
          <Text style={styles.dateText}>{startDate.toDateString()}</Text>
        </TouchableOpacity>
        {showStartPicker && (
          <DateTimePicker
            value={startDate}
            mode="date"
            display="default"
            onChange={(event, date) => {
              setShowStartPicker(false);
              if (date) setStartDate(date);
            }}
          />
        )}

        <Text style={styles.label}>End Date:</Text>
        <TouchableOpacity onPress={() => setShowEndPicker(true)} style={styles.dateInput}>
          <Text style={styles.dateText}>{endDate.toDateString()}</Text>
        </TouchableOpacity>
        {showEndPicker && (
          <DateTimePicker
            value={endDate}
            mode="date"
            display="default"
            onChange={(event, date) => {
              setShowEndPicker(false);
              if (date) setEndDate(date);
            }}
          />
        )}

        <Text style={styles.summaryText}>
          Rental Duration: {rentalDuration} day(s) | Total Cost: ${totalCost}
        </Text>

        <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmRental}>
          <Text style={styles.buttonText}>Confirm Rental</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    marginTop: 5
    //marginBottom: 16
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 10,
    marginBottom: 16,
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginHorizontal: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  vehicleName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  route: {
    fontSize: 16,
    color: '#555',
    marginBottom: 4,
  },
  cost: {
    fontSize: 16,
    color: '#28a745',
    fontWeight: 'bold',
  },
  formContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#f1f1f1',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  dateInput: {
    backgroundColor: '#f1f1f1',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  dateText: {
    fontSize: 16,
    color: '#333',
  },
  summaryText: {
    fontSize: 16,
    color: '#555',
    fontWeight: '600',
    marginBottom: 16,
  },
  confirmButton: {
    backgroundColor: '#007bff',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 12,
  },
  cancelButton: {
    backgroundColor: '#dc3545',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default RentVehicleScreen;
