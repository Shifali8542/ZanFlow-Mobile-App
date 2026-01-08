import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { styles } from './Layout.style';

interface LayoutWrapperProps {
  children: React.ReactNode;
  navigation: any;
  showHeader?: boolean;
  showFooter?: boolean; // Restored prop
}

const LayoutWrapper: React.FC<LayoutWrapperProps> = ({ 
  children, 
  navigation,
  showHeader = true,
  showFooter = true, // Restored logic
}) => {

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
      {showHeader && (
        <TouchableOpacity 
          style={styles.floatingHamburger}
          onPress={() => navigation.navigate('More')}
        >
          <View style={styles.hamburgerLine} />
          <View style={styles.hamburgerLine} />
          <View style={styles.hamburgerLine} />
        </TouchableOpacity>
      )}

      <View style={styles.content}>
        {children}
      </View>

      {/* RESTORED FOOTER SECTION */}
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