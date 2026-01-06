import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Colors } from '../theme/colors';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <Text style={styles.welcome}>Hi, Harshit 👋</Text>
      <Text style={styles.subtitle}>Here’s what’s happening today</Text>

      {/* Cards */}
      <View style={styles.cardGrid}>
        <DashboardCard title="My Tasks" value="8 pending" />
        <DashboardCard title="Projects" value="3 active" />
        <DashboardCard title="Documents" value="19 files" />
        <DashboardCard title="Test Runs" value="2 running" />
      </View>

      {/* My Work */}
      <Text style={styles.sectionTitle}>My Work</Text>

      <View style={styles.workCard}>
        <Text style={styles.workTitle}>In Progress</Text>
        <Text style={styles.workSub}>No active tasks right now</Text>
      </View>

      <View style={styles.workCard}>
        <Text style={styles.workTitle}>Recent Document</Text>
        <Text style={styles.workSub}>MockFlow – Project Plan Draft</Text>
      </View>

      <View style={styles.workCard}>
        <Text style={styles.workTitle}>Recent Project</Text>
        <Text style={styles.workSub}>MockFlow</Text>
      </View>
    </ScrollView>
  );
};

const DashboardCard = ({ title, value }: { title: string; value: string }) => (
  <TouchableOpacity style={styles.card}>
    <Text style={styles.cardTitle}>{title}</Text>
    <Text style={styles.cardValue}>{value}</Text>
  </TouchableOpacity>
);

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 16,
  },
  welcome: {
    fontSize: 22,
    fontWeight: '700',
    color: Colors.textPrimary,
  },
  subtitle: {
    color: Colors.textSecondary,
    marginBottom: 16,
  },
  cardGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    backgroundColor: Colors.cardBackground,
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  cardTitle: {
    color: Colors.textSecondary,
    fontSize: 14,
  },
  cardValue: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.textPrimary,
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 16,
  },
  workCard: {
    backgroundColor: Colors.cardBackground,
    padding: 14,
    borderRadius: 10,
    marginBottom: 10,
  },
  workTitle: {
    fontWeight: '600',
    color: Colors.textPrimary,
  },
  workSub: {
    color: Colors.textSecondary,
    marginTop: 4,
  },
});
