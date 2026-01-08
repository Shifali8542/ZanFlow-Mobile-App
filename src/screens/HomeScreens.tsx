import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import LayoutWrapper from '../components/LayoutWrapper';
import { styles } from '../styles/HomeScreen.styles';

const HomeScreen = ({ navigation }: any) => {
  return (
    <LayoutWrapper navigation={navigation} showHeader={true} showFooter={true}>
       <View style={styles.header}>
          <View style={styles.leftHeader}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
              <Text style={styles.backText}>←</Text>
            </TouchableOpacity>
            <Text style={styles.welcome}>Hi, ShifMeg 👋</Text>
          </View>
          
          {/* Hamburger is handled by Layout wrapper */}
          <View style={styles.hamburgerPlaceholder} />
        </View>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Quick Stats Bar */}
        <View style={styles.statsBar}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>8</Text>
            <Text style={styles.statLabel}>Pending</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statValue}>3</Text>
            <Text style={styles.statLabel}>Active</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statValue}>19</Text>
            <Text style={styles.statLabel}>Files</Text>
          </View>
        </View>

        {/* Dashboard Cards */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Overview</Text>
        </View>

        <View style={styles.cardList}>
          <DashboardCard
            title="My Tasks"
            value="8 pending tasks"
            onPress={() => navigation.navigate('PendingTasks')}
          />

          <DashboardCard
            title="Projects"
            value="3 active projects"
            onPress={() => navigation.navigate('Projects')}
          />

          <DashboardCard
            title="Documents"
            value="19 files uploaded"
            onPress={() => navigation.navigate('Documents')}
          />
        </View>

        {/* My Work Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recent Activity</Text>
        </View>

        <View style={styles.activityList}>
          <View style={styles.activityCard}>
            <View style={styles.activityLeft}>
              <View style={styles.activityIndicator}>
                <View style={[styles.activityDot, { backgroundColor: '#FFC107' }]} />
              </View>
              <View>
                <Text style={styles.activityTitle}>In Progress</Text>
                <Text style={styles.activitySub}>No active tasks right now</Text>
                <View style={styles.activityBadge}>
                  <Text style={styles.badgeText}>IDLE</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.activityCard}>
            <View style={styles.activityLeft}>
              <View style={styles.activityIndicator}>
                <View style={[styles.activityDot, { backgroundColor: '#2196F3' }]} />
              </View>
              <View>
                <Text style={styles.activityTitle}>Recent Document</Text>
                <Text style={styles.activitySub}>MockFlow – Project Plan Draft</Text>
                <Text style={styles.activityTime}>Updated 2 hours ago</Text>
              </View>
            </View>
          </View>

          <View style={styles.activityCard}>
            <View style={styles.activityLeft}>
              <View style={styles.activityIndicator}>
                <View style={[styles.activityDot, { backgroundColor: '#4CAF50' }]} />
              </View>
              <View>
                <Text style={styles.activityTitle}>Recent Project</Text>
                <Text style={styles.activitySub}>MockFlow</Text>
                <Text style={styles.activityTime}>Last active today</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Bottom padding for footer */}
        <View style={{ height: 80 }} />
      </ScrollView>
    </LayoutWrapper>
  );
};

const DashboardCard = ({
  title,
  value,
  onPress,
}: {
  title: string;
  value: string;
  onPress: () => void;
}) => (
  <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.7}>
    <View style={styles.cardContent}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardValue}>{value}</Text>
    </View>
    <View style={styles.cardAccent} />
  </TouchableOpacity>
);

export default HomeScreen;

