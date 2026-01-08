import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from '../../styles/TaskDetail.styles';
import LayoutWrapper from '../../components/LayoutWrapper';

const DeployedTasks = ({ navigation }: any) => {
  const deployedTasks = [
    { id: 1, title: 'Payment Gateway', deployDate: '2024-01-06', version: 'v2.1.0', environment: 'Production' },
    { id: 2, title: 'Notification System', deployDate: '2024-01-05', version: 'v1.5.2', environment: 'Production' },
  ];

  return (
    <LayoutWrapper navigation={navigation} showHeader={true} showFooter={true}>
      <View style={styles.header}>
        <View style={styles.leftHeader}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Text style={styles.backText}>←</Text>
          </TouchableOpacity>
          <Text style={styles.welcome}>Deployed</Text>
        </View>
        <View style={styles.hamburgerPlaceholder} />
      </View>

      <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
        <Text style={styles.subtitle}>{deployedTasks.length} tasks deployed</Text>

        {deployedTasks.map((task) => (
          <View key={task.id} style={styles.taskCard}>
            <View style={styles.taskHeader}>
              <Text style={styles.deployedIcon}>✓</Text>
              <View style={styles.taskInfo}>
                <Text style={styles.taskTitle}>{task.title}</Text>
                <View style={styles.deployInfo}>
                  <View style={styles.versionBadge}>
                    <Text style={styles.versionText}>{task.version}</Text>
                  </View>
                  <View style={styles.envBadge}>
                    <Text style={styles.envText}>{task.environment}</Text>
                  </View>
                </View>
                <Text style={styles.taskDate}>Deployed: {task.deployDate}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </LayoutWrapper>
  );
};

export default DeployedTasks;