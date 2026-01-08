import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import {
  LayoutDashboard,
  FolderKanban,
  CheckSquare,
  ListTodo,
  Clock,
  Layers,
  PlayCircle,
  Send,
  Plus,
  FileText,
  FlaskConical,
  Settings,
  ChevronDown,
  ChevronUp,
  Columns2
} from 'lucide-react-native';
import {styles } from '../styles/HamburgerMenu.style';

const HamburgerMenu = () => {
  const [tasksExpanded, setTasksExpanded] = useState(true);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.brandText}>ZanFlow</Text>
        </View>

        <ScrollView style={styles.scrollContent} showsVerticalScrollIndicator={false}>
          {/* Main Navigation */}
          <MenuLink icon={LayoutDashboard} label="Dashboard" />
          <MenuLink icon={FolderKanban} label="Projects" isSelected={false} />

          {/* Expandable Section: My Tasks */}
          <TouchableOpacity 
            style={[styles.menuRow, styles.activeRow]} 
            onPress={() => setTasksExpanded(!tasksExpanded)}
          >
            <View style={styles.rowLead}>
              <CheckSquare size={20} color="#FFFFFF" strokeWidth={2} />
              <Text style={[styles.menuText, styles.activeText]}>My Tasks</Text>
            </View>
            {tasksExpanded ? <ChevronUp size={18} color="#FFFFFF" /> : <ChevronDown size={18} color="#FFFFFF" />}
          </TouchableOpacity>

          {tasksExpanded && (
            <View style={styles.nestedContainer}>
              <View style={styles.verticalLine} />
              <View style={styles.nestedItems}>
                <NestedLink icon={CheckSquare} label="All Tasks" isActive={true} />
                <NestedLink icon={CheckSquare} label="Completed Tasks" />
                <NestedLink icon={Clock} label="Pending Tasks" />
                <NestedLink icon={Columns2} label="Backlog Tasks" />
                <NestedLink icon={PlayCircle} label="In Progress Tasks" />
                <NestedLink icon={Send} label="Deployed Tasks" />
                <NestedLink icon={Layers} label="Deferred Tasks" />
                <NestedLink icon={Plus} label="Add New Task" />
              </View>
            </View>
          )}

          <MenuLink icon={FileText} label="Documents" />
          <MenuLink icon={FlaskConical} label="Test Runs" />
          
          <ExpandablePlaceholder icon={Settings} label="Tools" />
          <ExpandablePlaceholder icon={Settings} label="Team Management" />
        </ScrollView>

        {/* Fixed Bottom Settings */}
        <View style={styles.footer}>
          <TouchableOpacity style={styles.menuRow}>
            <Settings size={20} color="#64748b" strokeWidth={1.5} />
            <Text style={styles.menuText}>Settings</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

// --- Sub-Components ---

const MenuLink = ({ icon: Icon, label, isSelected = false }: { icon: any; label: string; isSelected?: boolean }) => (
  <TouchableOpacity style={[styles.menuRow, isSelected && styles.selectedRow]}>
    <Icon size={20} color={isSelected ? "#1e293b" : "#64748b"} strokeWidth={1.5} />
    <Text style={[styles.menuText, isSelected && styles.selectedText]}>{label}</Text>
  </TouchableOpacity>
);

const NestedLink = ({ icon: Icon, label, isActive = false }: { icon: any; label: string; isActive?: boolean }) => (
  <TouchableOpacity style={[styles.nestedRow, isActive && styles.activeNestedRow]}>
    <Icon size={18} color={isActive ? "#FFFFFF" : "#64748b"} strokeWidth={1.5} />
    <Text style={[styles.nestedText, isActive && styles.activeNestedText]}>{label}</Text>
  </TouchableOpacity>
);

const ExpandablePlaceholder = ({ icon: Icon, label }: { icon: any; label: string }) => (
  <TouchableOpacity style={styles.menuRow}>
    <View style={styles.rowLead}>
      <Icon size={20} color="#64748b" strokeWidth={1.5} />
      <Text style={styles.menuText}>{label}</Text>
    </View>
    <ChevronDown size={18} color="#64748b" />
  </TouchableOpacity>
);
export default HamburgerMenu;