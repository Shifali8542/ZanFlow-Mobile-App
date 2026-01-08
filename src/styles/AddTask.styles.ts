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
  formGroup: {
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.textPrimary,
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E5EA',
    borderRadius: 10,
    padding: 14,
    fontSize: 16,
    color: Colors.textPrimary,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  priorityContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  priorityButton: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#E5E5EA',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  priorityButtonActive: {
    borderColor: Colors.textPrimary || '#007AFF',
    backgroundColor: Colors.textPrimary || '#007AFF',
  },
  priorityButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.textPrimary,
  },
  priorityButtonTextActive: {
    color: '#FFFFFF',
  },
  submitButton: {
    backgroundColor: Colors.textPrimary || '#007AFF',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 12,
    shadowColor: Colors.textPrimary || '#007AFF',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});