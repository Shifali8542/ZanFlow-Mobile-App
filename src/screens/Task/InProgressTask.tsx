import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from '../../styles/TaskDetail.styles';
import LayoutWrapper from '../../components/LayoutWrapper';

const InProgressTasks = ({ navigation }: any) => {
  const inProgressTasks = [
    { id: 1, title: 'Dashboard Development', progress: 65, assignee: 'John Doe' },
    { id: 2, title: 'Mobile App Features', progress: 40, assignee: 'Jane Smith' },
    { id: 3, title: 'Backend Optimization', progress: 80, assignee: 'Mike Johnson' },
  ];

  return (
    <LayoutWrapper navigation={navigation} showHeader={true} showFooter={true}>
      <View style={styles.header}>
        <View style={styles.leftHeader}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Text style={styles.backText}>←</Text>
          </TouchableOpacity>
          <Text style={styles.welcome}>In Progress</Text>
        </View>
        <View style={styles.hamburgerPlaceholder} />
      </View>

      <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
        <Text style={styles.subtitle}>{inProgressTasks.length} tasks in progress</Text>

        {inProgressTasks.map((task) => (
          <View key={task.id} style={styles.taskCard}>
            <View style={styles.taskHeader}>
              <Text style={styles.progressIcon}>◐</Text>
              <View style={styles.taskInfo}>
                <Text style={styles.taskTitle}>{task.title}</Text>
                <Text style={styles.taskAssignee}>Assigned to: {task.assignee}</Text>
                <View style={styles.progressContainer}>
                  <View style={styles.progressBar}>
                    <View style={[styles.progressFill, { width: `${task.progress}%` }]} />
                  </View>
                  <Text style={styles.progressText}>{task.progress}%</Text>
                </View>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </LayoutWrapper>
  );
};

export default InProgressTasks;