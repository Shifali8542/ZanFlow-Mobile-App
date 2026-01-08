import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { styles } from './Layout.style';
// Import your fixed menu component
import HamburgerMenuV1 from '../screens/HamburgerMenu'; 

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
  showFooter = true,
}) => {
  // 1. Add state to control the menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleFooterAction = (action: string) => {
    switch (action) {
      case 'createTask':
        navigation.navigate('Create');
        break;
      case 'upload':
        // Handle upload logic
        break;
      case 'documents':
        navigation.navigate('Documents');
        break;
    }
  };

  return (
    <View style={styles.container}>
      {/* 2. Pass state to the Menu component */}
      <HamburgerMenuV1 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
      />

      {showHeader && (
        <TouchableOpacity 
          style={styles.floatingHamburger}
          // 3. Change navigation.navigate to toggle the state
          onPress={() => setIsMenuOpen(true)}
        >
          <View style={styles.hamburgerLine} />
          <View style={styles.hamburgerLine} />
          <View style={styles.hamburgerLine} />
        </TouchableOpacity>
      )}

      <View style={styles.content}>
        {children}
      </View>

      {showFooter && (
        <View style={styles.footer}>
          <TouchableOpacity 
            style={styles.footerButton}
            onPress={() => handleFooterAction('createTask')}
          >
            <Text style={styles.footerButtonText}>Create Task</Text>
          </TouchableOpacity>
          
          <View style={styles.footerDivider} />
          
          <TouchableOpacity 
            style={styles.footerButton}
            onPress={() => handleFooterAction('upload')}
          >
            <Text style={styles.footerButtonText}>Upload</Text>
          </TouchableOpacity>
          
          <View style={styles.footerDivider} />
          
          <TouchableOpacity 
            style={styles.footerButton}
            onPress={() => handleFooterAction('documents')}
          >
            <Text style={styles.footerButtonText}>Docs</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default LayoutWrapper;