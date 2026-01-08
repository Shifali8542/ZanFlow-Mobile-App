import { StyleSheet } from 'react-native';
import { Colors } from '../theme/colors';

export const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fff' },
  container: { flex: 1, backgroundColor: '#fff' },
  header: { padding: 20, borderBottomWidth: 1, borderBottomColor: '#f1f5f9' },
  brandText: { fontSize: 22, fontWeight: '700', color: '#0f172a', letterSpacing: -0.5 },
  scrollContent: { flex: 1, paddingVertical: 10 },
  menuRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  selectedRow: { backgroundColor: '#e2e8f0', marginHorizontal: 12, borderRadius: 8, paddingHorizontal: 12 },

  selectedText: {
    color: "#1e293b", // Example: Match the selected icon color for consistency
  },
  rowLead: { flexDirection: 'row', alignItems: 'center' },
  menuText: { fontSize: 16, fontWeight: '500', color: '#475569', marginLeft: 12 },
  activeRow: { backgroundColor: '#0f172a', marginHorizontal: 12, borderRadius: 8, paddingHorizontal: 12 },
  activeText: { color: '#fff' },
  nestedContainer: { flexDirection: 'row', marginLeft: 35 },
  verticalLine: { width: 1, backgroundColor: '#e2e8f0', marginVertical: 5 },
  nestedItems: { flex: 1 },
  nestedRow: { flexDirection: 'row', alignItems: 'center', paddingVertical: 10, paddingLeft: 20, marginHorizontal: 12 },
  activeNestedRow: { backgroundColor: '#cbd5e1', borderRadius: 8 },
  nestedText: { fontSize: 15, color: '#64748b', marginLeft: 12 },
  activeNestedText: { color: '#fff', fontWeight: '600' },
  footer: { paddingVertical: 10, borderTopWidth: 1, borderTopColor: '#f1f5f9' },
});