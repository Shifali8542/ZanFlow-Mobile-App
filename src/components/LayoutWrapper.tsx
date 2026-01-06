import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Modal } from 'react-native';
import { PlusSquare, Upload, FileText } from 'lucide-react-native';
import { Colors } from '../theme/colors';

interface LayoutWrapperProps {
  children: React.ReactNode;
  navigation: any;
  showHeader?: boolean;
  showFooter?: boolean;
}

const LayoutWrapper: React.FC<LayoutWrapperProps> = ({ 
  children, 
  navigation,
  showHeader = true,
  showFooter = true 
}) => {
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
      // Handle logout
      navigation.navigate('Login');
    } else if (item.screen) {
      navigation.navigate(item.screen);
    }
  };

  const handleFooterAction = (action: string) => {
    switch (action) {
      case 'createTask':
        navigation.navigate('CreateTask');
        break;
      case 'uploadDocument':
        navigation.navigate('UploadDocument');
        break;
      case 'notes':
        navigation.navigate('Notes');
        break;
    }
  };

  return (
    <View style={styles.container}>
      {/* Main Content */}
      <View style={styles.content}>
        {children}
      </View>

      {/* Global Hamburger Menu - Floating */}
      {showHeader && (
        <TouchableOpacity 
          style={styles.floatingHamburger}
          onPress={() => setMenuVisible(true)}
          activeOpacity={0.8}
        >
          <View style={styles.hamburgerLine} />
          <View style={styles.hamburgerLine} />
          <View style={styles.hamburgerLine} />
        </TouchableOpacity>
      )}

      {/* Global Footer - Compact without icons */}
       {showFooter && (
        <View style={styles.footer}>
          <TouchableOpacity 
            style={styles.footerButton}
            onPress={() => handleFooterAction('createTask')}
          >
            <PlusSquare size={18} color={Colors.textPrimary} strokeWidth={2.5} />
            <Text style={styles.footerText}>Task</Text>
          </TouchableOpacity>

          <View style={styles.footerDivider} />

          <TouchableOpacity 
            style={styles.footerButton}
            onPress={() => handleFooterAction('uploadDocument')}
          >
            <Upload size={18} color={Colors.textPrimary} strokeWidth={2.5} />
            <Text style={styles.footerText}>Upload</Text>
          </TouchableOpacity>

          <View style={styles.footerDivider} />

          <TouchableOpacity 
            style={styles.footerButton}
            onPress={() => handleFooterAction('notes')}
          >
            <FileText size={18} color={Colors.textPrimary} strokeWidth={2.5} />
            <Text style={styles.footerText}>Notes</Text>
          </TouchableOpacity>
        </View>
      )}

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
    </View>
  );
};

export default LayoutWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    flex: 1,
  },
  // Floating Hamburger Button
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
  // Compact Footer Styles - No Icons
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
    paddingBottom: 24,
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
    gap: 4,
  },
  footerText: {
    fontSize: 10,
    fontWeight: '600',
    color: Colors.textPrimary,
  },
  footerDivider: {
    width: 1,
    backgroundColor: Colors.textSecondary,
    opacity: 0.15,
    marginHorizontal: 8,
  },
  // Drawer Styles
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