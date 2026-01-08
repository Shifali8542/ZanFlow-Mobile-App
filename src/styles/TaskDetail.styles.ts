import { StyleSheet } from 'react-native';
import { Colors } from '../theme/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 8,
  },
  leftHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 8,
  },
  backText: {
    fontSize: 24,
    color: Colors.textPrimary,
    fontWeight: '400',
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
  subtitle: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginBottom: 20,
  },
  taskCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  taskHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  checkmark: {
    fontSize: 20,
    color: '#34C759',
    marginRight: 12,
    marginTop: 2,
  },
  pendingIcon: {
    fontSize: 20,
    color: '#FF9500',
    marginRight: 12,
    marginTop: 2,
  },
  progressIcon: {
    fontSize: 20,
    color: '#007AFF',
    marginRight: 12,
    marginTop: 2,
  },
  backlogIcon: {
    fontSize: 20,
    color: '#8E8E93',
    marginRight: 12,
    marginTop: 2,
  },
  deployedIcon: {
    fontSize: 20,
    color: '#5856D6',
    marginRight: 12,
    marginTop: 2,
  },
  deferredIcon: {
    fontSize: 20,
    color: '#FF3B30',
    marginRight: 12,
    marginTop: 2,
  },
  taskInfo: {
    flex: 1,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.textPrimary,
    marginBottom: 6,
  },
  taskDate: {
    fontSize: 13,
    color: Colors.textSecondary,
    marginTop: 4,
  },
  taskAssignee: {
    fontSize: 13,
    color: Colors.textSecondary,
    marginBottom: 8,
  },
  taskMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 8,
  },
  priorityBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  priorityText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '700',
  },
  categoryBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    backgroundColor: '#E5E5EA',
  },
  categoryText: {
    color: '#1C1C1E',
    fontSize: 11,
    fontWeight: '600',
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  statusText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '700',
  },
  priorityLabel: {
    fontSize: 13,
    color: Colors.textSecondary,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  progressBar: {
    flex: 1,
    height: 8,
    backgroundColor: '#E5E5EA',
    borderRadius: 4,
    overflow: 'hidden',
    marginRight: 8,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#007AFF',
    borderRadius: 4,
  },
  progressText: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.textPrimary,
    width: 40,
  },
  deployInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 4,
  },
  versionBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    backgroundColor: '#5856D6',
  },
  versionText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '700',
  },
  envBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    backgroundColor: '#34C759',
  },
  envText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '700',
  },
  deferredReason: {
    fontSize: 13,
    color: Colors.textSecondary,
    fontStyle: 'italic',
    marginBottom: 4,
  },
});