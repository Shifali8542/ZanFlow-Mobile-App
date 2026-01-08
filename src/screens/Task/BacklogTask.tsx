import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from '../../styles/TaskDetail.styles';
import LayoutWrapper from '../../components/LayoutWrapper';

const BacklogTasks = ({ navigation }: any) => {
  const backlogTasks = [
    { id: 1, title: 'Implement Dark Mode', category: 'Feature', createdDate: '2024-01-01' },
    { id: 2, title: 'Add Export Functionality', category: 'Feature', createdDate: '2023-12-28' },
    { id: 3, title: 'Improve Search Algorithm', category: 'Enhancement', createdDate: '2023-12-25' },
    { id: 4, title: 'Multi-language Support', category: 'Feature', createdDate: '2023-12-20' },
    { id: 5, title: 'Refactor Legacy Code', category: 'Technical Debt', createdDate: '2023-12-15' },
  ];

  return (
    <LayoutWrapper navigation={navigation} showHeader={true} showFooter={true}>
      <View style={styles.header}>
        <View style={styles.leftHeader}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Text style={styles.backText}>←</Text>
          </TouchableOpacity>
          <Text style={styles.welcome}>Backlog</Text>
        </View>
        <View style={styles.hamburgerPlaceholder} />
      </View>

      <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
        <Text style={styles.subtitle}>{backlogTasks.length} tasks in backlog</Text>

        {backlogTasks.map((task) => (
          <View key={task.id} style={styles.taskCard}>
            <View style={styles.taskHeader}>
              <Text style={styles.backlogIcon}>≡</Text>
              <View style={styles.taskInfo}>
                <Text style={styles.taskTitle}>{task.title}</Text>
                <View style={styles.taskMeta}>
                  <View style={styles.categoryBadge}>
                    <Text style={styles.categoryText}>{task.category}</Text>
                  </View>
                  <Text style={styles.taskDate}>Created: {task.createdDate}</Text>
                </View>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </LayoutWrapper>
  );
};

export default BacklogTasks;