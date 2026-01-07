import { StyleSheet } from 'react-native';
import { Colors } from '../theme/colors';

 export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: Colors.textPrimary,
    marginBottom: 16,
  },
  row: {
    backgroundColor: Colors.cardBackground,
    paddingVertical: 16,
    paddingHorizontal: 18,
    borderRadius: 12,
    marginBottom: 10,
  },
  rowText: {
    fontSize: 16,
    color: Colors.textPrimary,
    fontWeight: '500',
  },
});