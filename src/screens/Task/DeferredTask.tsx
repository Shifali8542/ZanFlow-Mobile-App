import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from '../../styles/TaskDetail.styles';
import LayoutWrapper from '../../components/LayoutWrapper';

const DeferredTasks = ({ navigation }: any) => {
  const deferredTasks = [
    { id: 1, title: 'Analytics Dashboard', reason: 'Low priority', deferredDate: '2024-01-03', deferredUntil: '2024-02-01' },
  ];

  return (
    <LayoutWrapper navigation={navigation} showHeader={true} showFooter={true}>
      <View style={styles.header}>
        <View style={styles.leftHeader}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Text style={styles.backText}>←</Text>
          </TouchableOpacity>
          <Text style={styles.welcome}>Deferred</Text>
        </View>
        <View style={styles.hamburgerPlaceholder} />
      </View>

      <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
        <Text style={styles.subtitle}>{deferredTasks.length} tasks deferred</Text>

        {deferredTasks.map((task) => (
          <View key={task.id} style={styles.taskCard}>
            <View style={styles.taskHeader}>
              <Text style={styles.deferredIcon}>⏸</Text>
              <View style={styles.taskInfo}>
                <Text style={styles.taskTitle}>{task.title}</Text>
                <Text style={styles.deferredReason}>Reason: {task.reason}</Text>
                <Text style={styles.taskDate}>Deferred until: {task.deferredUntil}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </LayoutWrapper>
  );
};

export default DeferredTasks;