import { StyleSheet  } from 'react-native';
import { Colors } from '../theme/colors';

export const styles = StyleSheet.create({
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
