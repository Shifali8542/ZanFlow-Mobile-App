import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Platform,
} from 'react-native';
import { X, User, Mail, Lock, Crown } from 'lucide-react-native';
import { styles } from '../../styles/Role.style';

interface RoleProps {
  navigation: any;
}

const Role: React.FC<RoleProps> = ({ navigation }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'viewer',
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  const handleCreateUser = () => {
    // Add validation logic here
    console.log('Create user:', formData);
    // After successful creation, navigate back
    // navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Add New User</Text>
        <TouchableOpacity onPress={handleCancel} style={styles.closeButton}>
          <X size={24} color="#0f172a" strokeWidth={2.5} />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.formContainer}>
          {/* First Name */}
          <View style={styles.inputGroup}>
            <View style={styles.labelContainer}>
              <User size={16} color="#64748b" strokeWidth={2} />
              <Text style={styles.label}>First Name</Text>
            </View>
            <TextInput
              style={styles.input}
              placeholder="Subhang"
              placeholderTextColor="#94a3b8"
              value={formData.firstName}
              onChangeText={(value) => handleInputChange('firstName', value)}
            />
          </View>

          {/* Last Name */}
          <View style={styles.inputGroup}>
            <View style={styles.labelContainer}>
              <User size={16} color="#64748b" strokeWidth={2} />
              <Text style={styles.label}>Last Name</Text>
            </View>
            <TextInput
              style={styles.input}
              placeholder="Tripathi"
              placeholderTextColor="#94a3b8"
              value={formData.lastName}
              onChangeText={(value) => handleInputChange('lastName', value)}
            />
          </View>

          {/* Username */}
          <View style={styles.inputGroup}>
            <View style={styles.labelContainer}>
              <User size={16} color="#64748b" strokeWidth={2} />
              <Text style={styles.label}>Username</Text>
            </View>
            <TextInput
              style={styles.input}
              placeholder="unique_username"
              placeholderTextColor="#94a3b8"
              value={formData.username}
              onChangeText={(value) => handleInputChange('username', value)}
              autoCapitalize="none"
            />
          </View>

          {/* Email */}
          <View style={styles.inputGroup}>
            <View style={styles.labelContainer}>
              <Mail size={16} color="#64748b" strokeWidth={2} />
              <Text style={styles.label}>Email</Text>
            </View>
            <TextInput
              style={styles.input}
              placeholder="user@example.com"
              placeholderTextColor="#94a3b8"
              value={formData.email}
              onChangeText={(value) => handleInputChange('email', value)}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          {/* Role */}
          <View style={styles.inputGroup}>
            <View style={styles.labelContainer}>
              <Crown size={16} color="#64748b" strokeWidth={2} />
              <Text style={styles.label}>Role</Text>
            </View>
            <View style={styles.roleContainer}>
              <TouchableOpacity
                style={[
                  styles.roleOption,
                  formData.role === 'viewer' && styles.roleOptionSelected,
                ]}
                onPress={() => handleInputChange('role', 'viewer')}
              >
                <View style={styles.radioOuter}>
                  {formData.role === 'viewer' && <View style={styles.radioInner} />}
                </View>
                <Text
                  style={[
                    styles.roleText,
                    formData.role === 'viewer' && styles.roleTextSelected,
                  ]}
                >
                  Viewer
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.roleOption,
                  formData.role === 'admin' && styles.roleOptionSelected,
                ]}
                onPress={() => handleInputChange('role', 'admin')}
              >
                <View style={styles.radioOuter}>
                  {formData.role === 'admin' && <View style={styles.radioInner} />}
                </View>
                <Text
                  style={[
                    styles.roleText,
                    formData.role === 'admin' && styles.roleTextSelected,
                  ]}
                >
                  Admin
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Password */}
          <View style={styles.inputGroup}>
            <View style={styles.labelContainer}>
              <Lock size={16} color="#64748b" strokeWidth={2} />
              <Text style={styles.label}>Password</Text>
            </View>
            <TextInput
              style={styles.input}
              placeholder="••••••••"
              placeholderTextColor="#94a3b8"
              value={formData.password}
              onChangeText={(value) => handleInputChange('password', value)}
              secureTextEntry
            />
          </View>

          {/* Confirm Password */}
          <View style={styles.inputGroup}>
            <View style={styles.labelContainer}>
              <Lock size={16} color="#64748b" strokeWidth={2} />
              <Text style={styles.label}>Confirm Password</Text>
            </View>
            <TextInput
              style={styles.input}
              placeholder="••••••••"
              placeholderTextColor="#94a3b8"
              value={formData.confirmPassword}
              onChangeText={(value) => handleInputChange('confirmPassword', value)}
              secureTextEntry
            />
          </View>
        </View>
      </ScrollView>

      {/* Footer Buttons */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.createButton} onPress={handleCreateUser}>
          <Text style={styles.createButtonText}>Create User</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Role;