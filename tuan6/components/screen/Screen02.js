import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Alert,FlatList } from 'react-native';

const Screen02 = () => {
  const [selectedColor, setSelectedColor] = useState(null);

  const colors = [
    { id: 1, color: '#B3E5FC' }, 
    { id: 2, color: '#F44336' }, 
    { id: 3, color: '#000000' },
    { id: 4, color: '#1E3A73' }, 
  ];

  const onPressDone = () => {
    if (selectedColor) {
      Alert.alert('Selected Color', `You selected color: ${selectedColor}`);
    } else {
      Alert.alert('No Color Selected', 'Please select a color.');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/vs_blue.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>Điện Thoại Vsmart Joy 3{'\n'}Hàng chính hãng</Text>

      <View style={styles.colorSelectorContainer}>
        <Text style={styles.colorSelectorText}>Chọn một màu bên dưới:</Text>
        {colors.map(({ id, color }) => (
          <TouchableOpacity
            key={id}
            style={[
              styles.colorBox,
              { backgroundColor: color },
              selectedColor === color && styles.selectedColorBox,
            ]}
            onPress={() => setSelectedColor(color)}
          />
        ))}
      </View>

      <TouchableOpacity style={styles.doneButton} onPress={onPressDone}>
        <Text style={styles.doneButtonText}>XONG</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#D3D3D3',
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: 120,
    height: 160,
    marginBottom: 10,
  },
  title: {
    fontSize: 14,
    textAlign: 'center',

  },
  colorSelectorContainer: {
    backgroundColor: '#A9A9A9',
    padding: 15,
    width: '80%',
    alignItems: 'center',
    marginBottom: 20,
  },
  colorSelectorText: {
    fontSize: 16,
    alignSelf: 'flex-start',
  },
  colorBox: {
    width: 80,
    height: 60,
    marginVertical: 2,
  },
  selectedColorBox: {
    borderWidth: 3,
    borderColor: '#FF4081',
  },
  doneButton: {
    backgroundColor: '#5867A3',
    borderRadius: 15,
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#d9a9c6',
  },
  doneButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default Screen02;
