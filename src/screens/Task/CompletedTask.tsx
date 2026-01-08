import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from '../../styles/TaskDetail.styles';
import LayoutWrapper from '../../components/LayoutWrapper';

const CompletedTasks = ({ navigation }: any) => {
  const completedTasks = [
    { id: 1, title: 'Design Homepage', completedDate: '2024-01-05' },
    { id: 2, title: 'API Integration', completedDate: '2024-01-04' },
    { id: 3, title: 'User Authentication', completedDate: '2024-01-03' },
    { id: 4, title: 'Database Setup', completedDate: '2024-01-02' },
  ];

  return (
    <LayoutWrapper navigation={navigation} showHeader={true} showFooter={true}>
      <View style={styles.header}>
        <View style={styles.leftHeader}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Text style={styles.backText}>←</Text>
          </TouchableOpacity>
          <Text style={styles.welcome}>Completed Tasks</Text>
        </View>
        <View style={styles.hamburgerPlaceholder} />
      </View>

      <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
        <Text style={styles.subtitle}>{completedTasks.length} tasks completed</Text>

        {completedTasks.map((task) => (
          <View key={task.id} style={styles.taskCard}>
            <View style={styles.taskHeader}>
              <Text style={styles.checkmark}>✓</Text>
              <View style={styles.taskInfo}>
                <Text style={styles.taskTitle}>{task.title}</Text>
                <Text style={styles.taskDate}>Completed: {task.completedDate}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </LayoutWrapper>
  );
};

export default CompletedTasks;