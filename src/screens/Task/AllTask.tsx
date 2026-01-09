import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from '../../styles/TaskDetail.styles';
import LayoutWrapper from '../../components/LayoutWrapper';

const AllTasks = ({ navigation }: any) => {
  const allTasks = [
    { id: 1, title: 'Write Documentation', status: 'Pending', priority: 'High' },
    { id: 2, title: 'Dashboard Development', status: 'In Progress', priority: 'High' },
    { id: 3, title: 'Design Homepage', status: 'Completed', priority: 'Medium' },
    { id: 4, title: 'Payment Gateway', status: 'Deployed', priority: 'High' },
    { id: 5, title: 'Code Review', status: 'Pending', priority: 'Medium' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return '#34C759';
      case 'In Progress': return '#007AFF';
      case 'Pending': return '#FF9500';
      case 'Deployed': return '#5856D6';
      case 'Backlog': return '#8E8E93';
      case 'Deferred': return '#FF3B30';
      default: return '#8E8E93';
    }
  };

  return (
    <LayoutWrapper navigation={navigation} showHeader={true} showFooter={true}>
      <View style={styles.header}>
        <View style={styles.leftHeader}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Text style={styles.backText}>←</Text>
          </TouchableOpacity>
          <Text style={styles.welcome}>All Tasks</Text>
        </View>
        <View style={styles.hamburgerPlaceholder} />
      </View>

      <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
        <Text style={styles.subtitle}>{allTasks.length} total tasks</Text>

        {allTasks.map((task) => (
          <View key={task.id} style={styles.taskCard}>
            <View style={styles.taskHeader}>
              <View style={styles.taskInfo}>
                <Text style={styles.taskTitle}>{task.title}</Text>
                <View style={styles.taskMeta}>
                  <View style={[styles.statusBadge, { backgroundColor: getStatusColor(task.status) }]}>
                    <Text style={styles.statusText}>{task.status}</Text>
                  </View>
                  <Text style={styles.priorityLabel}>Priority: {task.priority}</Text>
                </View>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </LayoutWrapper>
  );
};

export default AllTasks;