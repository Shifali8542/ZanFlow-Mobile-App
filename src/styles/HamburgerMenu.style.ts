import { StyleSheet, Dimensions, Platform, ViewStyle, TextStyle } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
export const DRAWER_WIDTH = SCREEN_WIDTH * 0.7;

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 9999,
  } as ViewStyle,
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  } as ViewStyle,
  drawer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: DRAWER_WIDTH,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 16,
  } as ViewStyle,
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 20,
    paddingTop: Platform.OS === 'ios' ? 50 : 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
  } as ViewStyle,
  brandText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0f172a',
    letterSpacing: -0.5,
  } as TextStyle,
  closeButton: {
    padding: 4,
  } as ViewStyle,
  scrollContent: {
    flex: 1,
  } as ViewStyle,
  scrollContentContainer: {
    paddingBottom: 20,
  } as ViewStyle,
  section: {
    marginTop: 24,
  } as ViewStyle,
  sectionLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: '#94a3b8',
    letterSpacing: 1.2,
    paddingHorizontal: 20,
    marginBottom: 8,
  } as TextStyle,
  menuRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
    paddingHorizontal: 20,
    marginHorizontal: 12,
    borderRadius: 10,
  } as ViewStyle,
  selectedRow: {
    backgroundColor: '#eff6ff',
  } as ViewStyle,
  activeRow: {
    backgroundColor: '#eff6ff',
  } as ViewStyle,
  rowLead: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  } as ViewStyle,
  iconContainer: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle,
  menuText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#475569',
    marginLeft: 12,
  } as TextStyle,
  selectedText: {
    color: '#3b82f6',
    fontWeight: '600',
  } as TextStyle,
  activeText: {
    color: '#3b82f6',
    fontWeight: '600',
  } as TextStyle,
  nestedContainer: {
    flexDirection: 'row',
    marginLeft: 44,
    marginTop: 4,
  } as ViewStyle,
  verticalLine: {
    width: 2,
    backgroundColor: '#e2e8f0',
    marginLeft: 4,
  } as ViewStyle,
  nestedItems: {
    flex: 1,
    paddingLeft: 16,
  } as ViewStyle,
  nestedList: {
    flex: 1,
    paddingLeft: 8,
  } as ViewStyle,
  nestedRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingRight: 20,
    borderRadius: 8,
  } as ViewStyle,
  activeNestedRow: {
    backgroundColor: '#f8fafc',
  } as ViewStyle,
  nestedIconContainer: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle,
  nestedText: {
    fontSize: 14,
    color: '#64748b',
    marginLeft: 10,
  } as TextStyle,
  activeNestedText: {
    color: '#3b82f6',
    fontWeight: '600',
  } as TextStyle,
  footer: {
    paddingVertical: 12,
    paddingBottom: Platform.OS === 'ios' ? 24 : 12,
    borderTopWidth: 1,
    borderTopColor: '#f1f5f9',
  } as ViewStyle,
  settingsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
  } as ViewStyle,
  footerContainer: {
    marginTop: 'auto', // Pushes the footer to the bottom
    borderTopWidth: 1,
    borderTopColor: '#f1f5f9',
    paddingVertical: 12,
    paddingBottom: Platform.OS === 'ios' ? 30 : 16, 
  } as ViewStyle,
  footerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginHorizontal: 12,
    borderRadius: 10,
  } as ViewStyle,
  footerIconContainer: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8fafc',
    borderRadius: 8,
  } as ViewStyle,
});