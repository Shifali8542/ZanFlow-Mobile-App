import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from '../../styles/TaskDetail.styles';
import LayoutWrapper from '../../components/LayoutWrapper';

const PendingTasks = ({ navigation }: any) => {
  const pendingTasks = [
    { id: 1, title: 'Write Documentation', priority: 'High', dueDate: '2024-01-10' },
    { id: 2, title: 'Code Review', priority: 'Medium', dueDate: '2024-01-12' },
    { id: 3, title: 'Testing Module', priority: 'High', dueDate: '2024-01-09' },
    { id: 4, title: 'Update Dependencies', priority: 'Low', dueDate: '2024-01-15' },
    { id: 5, title: 'Bug Fixes', priority: 'High', dueDate: '2024-01-08' },
    { id: 6, title: 'Performance Optimization', priority: 'Medium', dueDate: '2024-01-11' },
    { id: 7, title: 'UI Improvements', priority: 'Low', dueDate: '2024-01-14' },
    { id: 8, title: 'Security Audit', priority: 'High', dueDate: '2024-01-09' },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return '#FF3B30';
      case 'Medium': return '#FF9500';
      case 'Low': return '#34C759';
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
          <Text style={styles.welcome}>Pending Tasks</Text>
        </View>
        <View style={styles.hamburgerPlaceholder} />
      </View>

      <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
        <Text style={styles.subtitle}>{pendingTasks.length} tasks pending</Text>

        {pendingTasks.map((task) => (
          <View key={task.id} style={styles.taskCard}>
            <View style={styles.taskHeader}>
              <Text style={styles.pendingIcon}>○</Text>
              <View style={styles.taskInfo}>
                <Text style={styles.taskTitle}>{task.title}</Text>
                <View style={styles.taskMeta}>
                  <View style={[styles.priorityBadge, { backgroundColor: getPriorityColor(task.priority) }]}>
                    <Text style={styles.priorityText}>{task.priority}</Text>
                  </View>
                  <Text style={styles.taskDate}>Due: {task.dueDate}</Text>
                </View>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </LayoutWrapper>
  );
};

export default PendingTasks;