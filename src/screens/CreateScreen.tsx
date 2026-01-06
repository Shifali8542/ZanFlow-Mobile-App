import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from '../theme/colors';

const CreateScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create</Text>

      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardTitle}>New Project</Text>
        <Text style={styles.cardSub}>Start a new project</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardTitle}>New Task</Text>
        <Text style={styles.cardSub}>Assign or track work</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardTitle}>Upload Document</Text>
        <Text style={styles.cardSub}>Add files to projects</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateScreen;

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
    marginBottom: 20,
  },
  card: {
    backgroundColor: Colors.cardBackground,
    padding: 18,
    borderRadius: 14,
    marginBottom: 14,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.textPrimary,
  },
  cardSub: {
    marginTop: 6,
    fontSize: 14,
    color: Colors.textSecondary,
  },
});
