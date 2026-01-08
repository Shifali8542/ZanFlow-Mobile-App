import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from '../../styles/MyTask.styles';
import LayoutWrapper from '../../components/LayoutWrapper';

interface TaskCard {
  id: string;
  title: string;
  icon: string;
  route: string;
  count?: number;
}

const MyTasks = ({ navigation }: any) => {
  const taskCards: TaskCard[] = [
    { id: '1', title: 'All Tasks', icon: '☰', route: 'AllTasks', count: 12 },
    { id: '2', title: 'Completed Tasks', icon: '✓', route: 'CompletedTasks', count: 4 },
    { id: '3', title: 'Pending Tasks', icon: '○', route: 'PendingTasks', count: 8 },
    { id: '4', title: 'In Progress Tasks', icon: '◐', route: 'InProgressTasks', count: 3 },
    { id: '5', title: 'Backlog Tasks', icon: '≡', route: 'BacklogTasks', count: 5 },
    { id: '6', title: 'Deployed Tasks', icon: '✓', route: 'DeployedTasks', count: 2 },
    { id: '7', title: 'Deferred Tasks', icon: '⏸', route: 'DeferredTasks', count: 1 },
    { id: '8', title: 'Add New Task', icon: '+', route: 'AddNewTask' },
  ];

  const handleCardPress = (route: string) => {
    navigation.navigate(route);
  };

  return (
    <LayoutWrapper navigation={navigation} showHeader={true} showFooter={true}>
      <View style={styles.header}>
        <View style={styles.leftHeader}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Text style={styles.backText}>←</Text>
          </TouchableOpacity>
          <Text style={styles.welcome}>Tasks</Text>
        </View>
        <View style={styles.hamburgerPlaceholder} />
      </View>

      <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
        <Text style={styles.sub}>8 tasks pending</Text>

        <View style={styles.cardsContainer}>
          {taskCards.map((card) => (
            <TouchableOpacity
              key={card.id}
              style={styles.card}
              onPress={() => handleCardPress(card.route)}
              activeOpacity={0.7}
            >
              <Text style={styles.cardIcon}>{card.icon}</Text>
              <Text style={styles.cardTitle}>{card.title}</Text>
              {card.count !== undefined && (
                <View style={styles.countBadge}>
                  <Text style={styles.countText}>{card.count}</Text>
                </View>
              )}
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </LayoutWrapper>
  );
};

export default MyTasks;