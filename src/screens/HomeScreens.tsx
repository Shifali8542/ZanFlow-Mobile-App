import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Colors } from '../theme/colors';
import LayoutWrapper from '../components/LayoutWrapper';

const HomeScreen = ({ navigation }: any) => {
  return (
    <LayoutWrapper navigation={navigation} showHeader={true} showFooter={true}>
       <View style={styles.header}>
          <View style={styles.leftHeader}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
              <Text style={styles.backText}>←</Text>
            </TouchableOpacity>
            <Text style={styles.welcome}>Hi, Harshit 👋</Text>
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
            onPress={() => navigation.navigate('Tasks')}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  backButton: {
    paddingVertical: 8,
    paddingRight: 12,
  },
  backText: {
    fontSize: 20,
    color: Colors.textPrimary,
    fontWeight: '500',
  },
  welcome: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.textPrimary,
    letterSpacing: -0.5,
  },
  hamburgerPlaceholder: {
    width: 40,
    height: 40,
  },
  statsBar: {
    flexDirection: 'row',
    backgroundColor: Colors.cardBackground,
    marginHorizontal: 24,
    borderRadius: 16,
    padding: 20,
    marginBottom: 28,
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.textPrimary,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: Colors.textSecondary,
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  statDivider: {
    width: 1,
    backgroundColor: Colors.textSecondary,
    opacity: 0.15,
  },
  sectionHeader: {
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.textPrimary,
    letterSpacing: -0.3,
  },
  cardList: {
    paddingHorizontal: 24,
    marginBottom: 32,
  },
  card: {
    backgroundColor: Colors.cardBackground,
    borderRadius: 14,
    marginBottom: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: Colors.textSecondary,
    opacity: 0.95,
  },
  cardContent: {
    padding: 20,
  },
  cardTitle: {
    color: Colors.textSecondary,
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 8,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  cardValue: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.textPrimary,
  },
  cardAccent: {
    height: 3,
    backgroundColor: Colors.textPrimary,
    opacity: 0.2,
  },
  activityList: {
    paddingHorizontal: 24,
  },
  activityCard: {
    marginBottom: 20,
  },
  activityLeft: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  activityIndicator: {
    marginRight: 16,
    marginTop: 2,
  },
  activityDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  activityTitle: {
    fontWeight: '600',
    fontSize: 16,
    color: Colors.textPrimary,
    marginBottom: 4,
  },
  activitySub: {
    color: Colors.textSecondary,
    fontSize: 14,
    marginBottom: 6,
  },
  activityTime: {
    color: Colors.textSecondary,
    fontSize: 12,
    marginTop: 4,
    opacity: 0.7,
  },
  activityBadge: {
    backgroundColor: Colors.textSecondary,
    opacity: 0.15,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginTop: 6,
  },
  badgeText: {
    fontSize: 10,
    fontWeight: '700',
    color: Colors.textPrimary,
    letterSpacing: 0.5,
  },
});