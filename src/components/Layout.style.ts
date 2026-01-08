import { StyleSheet } from 'react-native';
import { Colors } from '../theme/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    flex: 1,
  },
  // Floating Hamburger Button (Triggers navigation to HamburgerMenu)
  floatingHamburger: {
    position: 'absolute',
    top: 16,
    right: 24,
    padding: 8,
    justifyContent: 'center',
    zIndex: 1000,
  },
  hamburgerLine: {
    width: 24,
    height: 2.5,
    backgroundColor: Colors.textPrimary,
    marginVertical: 3,
    borderRadius: 2,
  },
  // Main Footer Section
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    backgroundColor: Colors.cardBackground,
    borderTopWidth: 1,
    borderTopColor: Colors.textSecondary + '20',
    paddingVertical: 8,
    paddingHorizontal: 16,
    paddingBottom: 24, // Extra padding for safe area/home indicator
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 10,
  },
  footerButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerButtonText: {
    fontSize: 13,
    fontWeight: '600',
    color: Colors.textPrimary,
  },
  footerDivider: {
    width: 1,
    backgroundColor: Colors.textSecondary,
    opacity: 0.15,
    marginHorizontal: 8,
  },
});