import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Modal } from 'react-native';
import { Colors } from '../theme/colors';

const HomeScreen = ({ navigation }: any) => {
  const [menuVisible, setMenuVisible] = React.useState(false);
  const menuItems = [
    { id: 1, title: 'Profile', screen: 'Profile', icon: '👤' },
    { id: 2, title: 'Team Management', screen: 'TeamManagement', icon: '👥' },
    { id: 3, title: 'Settings', screen: 'Settings', icon: '⚙️' },
    { id: 4, title: 'Logout', screen: null, icon: '🚪' },
  ];

  const handleMenuItemPress = (item: any) => {
    setMenuVisible(false);
    if (item.title === 'Logout') {
      console.log('Logout pressed');
    } else if (item.screen) {
      navigation.navigate(item.screen);
    }
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

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backText}>← Back</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setMenuVisible(true)} style={styles.hamburgerButton}>
          <View style={styles.hamburgerLine} />
          <View style={styles.hamburgerLine} />
          <View style={styles.hamburgerLine} />
        </TouchableOpacity>
      </View>

      {/* Header Section */}
      <View style={styles.welcomeSection}>
        <View style={styles.welcomeTop}>
          <View>
            <Text style={styles.welcome}>Hi, Harshit 👋</Text>
            <Text style={styles.subtitle}>Here's what's happening today</Text>
          </View>
          <View style={styles.profileCircle}>
            <Text style={styles.profileText}>H</Text>
          </View>
        </View>
      </View>

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
              <Text style={styles.activitySub}>MockFlow — Project Plan Draft</Text>
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

      {/* Hamburger Menu Modal - Side Drawer */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={menuVisible}
        onRequestClose={() => setMenuVisible(false)}
      >
        <View style={styles.drawerContainer}>
          <TouchableOpacity
            style={styles.drawerOverlay}
            activeOpacity={1}
            onPress={() => setMenuVisible(false)}
          />
          <View style={styles.drawerContent}>
            <View style={styles.drawerHeader}>
              <Text style={styles.drawerTitle}>Menu</Text>
              <TouchableOpacity onPress={() => setMenuVisible(false)}>
                <Text style={styles.closeButton}>✕</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.drawerMenuItems}>
              {menuItems.map((item) => (
                <TouchableOpacity
                  key={item.id}
                  style={styles.drawerMenuItem}
                  onPress={() => handleMenuItemPress(item)}
                  activeOpacity={0.7}
                >
                  <View style={styles.menuItemContainer}>
                    <View style={styles.menuIconContainer}>
                      <Text style={styles.menuIcon}>{item.icon}</Text>
                    </View>
                    <Text style={styles.drawerMenuItemText}>
                      {item.title}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </Modal>

      <View style={{ height: 32 }} />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backButton: {
    paddingVertical: 8,
  },
  backText: {
    fontSize: 15,
    color: Colors.textPrimary,
    fontWeight: '500',
  },
  welcomeSection: {
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 24,
  },
  welcomeTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 32,
    fontWeight: '700',
    color: Colors.textPrimary,
    marginBottom: 4,
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.textSecondary,
    marginTop: 4,
  },
  profileCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: Colors.textPrimary,
    opacity: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileText: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.textPrimary,
    opacity: 10,
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

  hamburgerButton: {
    padding: 8,
    justifyContent: 'center',
  },
  hamburgerLine: {
    width: 24,
    height: 2.5,
    backgroundColor: Colors.textPrimary,
    marginVertical: 3,
    borderRadius: 2,
  },
  drawerContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  drawerOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  drawerContent: {
    width: 280,
    backgroundColor: Colors.cardBackground,
    height: '100%',
    shadowColor: '#000',
    shadowOffset: { width: -2, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8,
  },
  drawerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 24,
    paddingTop: 60,
    borderBottomWidth: 1,
    borderBottomColor: Colors.textSecondary + '1A',
  },
  drawerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.textPrimary,
  },
  closeButton: {
    fontSize: 24,
    color: Colors.textSecondary,
    fontWeight: '400',
  },
  drawerMenuItems: {
    paddingTop: 8,
  },
  drawerMenuItem: {
    paddingVertical: 18,
    paddingHorizontal: 24,
  },
  menuItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIconContainer: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  menuIcon: {
    fontSize: 20,
    opacity: 0.8,
  },
  drawerMenuItemText: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.textPrimary,
  },
});