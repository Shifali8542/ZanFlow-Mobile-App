import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from '../theme/colors';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: Colors.textPrimary,
    marginBottom: 16,
  },
  row: {
    backgroundColor: Colors.cardBackground,
    paddingVertical: 16,
    paddingHorizontal: 18,
    borderRadius: 12,
    marginBottom: 10,
  },
  rowText: {
    fontSize: 16,
    color: Colors.textPrimary,
    fontWeight: '500',
  },
});
