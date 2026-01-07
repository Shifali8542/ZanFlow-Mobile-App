import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/TaskScreen.styles';
import LayoutWrapper from '../components/LayoutWrapper';

const TasksScreen = ({ navigation }: any) => {
  return (
    <LayoutWrapper navigation={navigation} showHeader={true} showFooter={true}>
      <View style={styles.header}>
        <View style={styles.leftHeader}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Text style={styles.backText}>←</Text>
          </TouchableOpacity>
          <Text style={styles.welcome}>Tasks</Text>
        </View>

        {/* Hamburger is handled by Layout wrapper */}
        <View style={styles.hamburgerPlaceholder} />
      </View>
      <View style={styles.container}>
        <Text style={styles.sub}>8 tasks pending</Text>
      </View>
    </LayoutWrapper>
  );
};

export default TasksScreen;


