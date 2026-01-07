import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/MoreScreen.styles';

const menuItems = [
  'Documents',
  'Test Runs',
  'Tools',
  'Team Management',
  'Settings',
  'Logout',
];

const MoreScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>More</Text>

      {menuItems.map(item => (
        <TouchableOpacity key={item} style={styles.row}>
          <Text style={styles.rowText}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default MoreScreen;
