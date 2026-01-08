import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';
import {
  LayoutDashboard,
  FolderKanban,
  CheckSquare,
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
  Columns2,
  X,
  LucideIcon
} from 'lucide-react-native';
import { styles, DRAWER_WIDTH } from '../styles/HamburgerMenu.style';

interface HamburgerMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

interface MenuLinkProps {
  icon: LucideIcon;
  label: string;
  isSelected?: boolean;
}

interface NestedLinkProps {
  icon: LucideIcon;
  label: string;
  isActive?: boolean;
}

const HamburgerMenuV1: React.FC<HamburgerMenuProps> = ({ isOpen, onClose }) => {
  const [tasksExpanded, setTasksExpanded] = useState(true);
  const [shouldRender, setShouldRender] = useState(isOpen);

  const slideAnim = useRef(new Animated.Value(-DRAWER_WIDTH)).current;
  const overlayAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(overlayAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: -DRAWER_WIDTH,
          duration: 250,
          useNativeDriver: true,
        }),
        Animated.timing(overlayAnim, {
          toValue: 0,
          duration: 250,
          useNativeDriver: true,
        }),
      ]).start(() => setShouldRender(false));
    }
  }, [isOpen]);

  if (!shouldRender) return null;

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onClose}>
        <Animated.View style={[styles.overlay, { opacity: overlayAnim }]} />
      </TouchableWithoutFeedback>

      <Animated.View style={[styles.drawer, { transform: [{ translateX: slideAnim }] }]}>
        <View style={styles.header}>
          <Text style={styles.brandText}>ZanFlow</Text>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <X size={24} color="#64748b" />
          </TouchableOpacity>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContentContainer}>
          <View style={styles.section}>
            <Text style={styles.sectionLabel}>MAIN</Text>
            <MenuLink icon={LayoutDashboard} label="Dashboard" />
            <MenuLink icon={FolderKanban} label="Projects" />
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionLabel}>TASKS</Text>
            <TouchableOpacity
              style={[styles.menuRow, styles.activeRow]}
              onPress={() => setTasksExpanded(!tasksExpanded)}
            >
              <View style={styles.rowLead}>
                <View style={styles.iconContainer}>
                  <CheckSquare size={20} color="#3b82f6" />
                </View>
                <Text style={styles.activeText}>My Tasks</Text>
              </View>
              {tasksExpanded ? <ChevronUp size={18} color="#3b82f6" /> : <ChevronDown size={18} color="#3b82f6" />}
            </TouchableOpacity>

            {tasksExpanded && (
              <View style={styles.nestedContainer}>
                <View style={styles.verticalLine} />
                {/* FIXED: Replaced <div> with <View> */}
                <View style={{ flex: 1 }}>
                  <View style={styles.nestedItems}>
                    <NestedLink icon={CheckSquare} label="All Tasks" isActive={true} />
                    <NestedLink icon={Clock} label="Pending Tasks" />
                    <NestedLink icon={PlayCircle} label="In Progress" />
                    <NestedLink icon={Plus} label="Add New Task" />
                  </View>
                </View>
              </View>
            )}
          </View>
        </ScrollView>
      </Animated.View>
    </View>
  );
};

const MenuLink: React.FC<MenuLinkProps> = ({ icon: Icon, label, isSelected }) => (
  <TouchableOpacity style={[styles.menuRow, isSelected && styles.selectedRow]}>
    <View style={styles.rowLead}>
      <View style={styles.iconContainer}>
        <Icon size={20} color={isSelected ? "#3b82f6" : "#64748b"} />
      </View>
      <Text style={[styles.menuText, isSelected && styles.selectedText]}>{label}</Text>
    </View>
  </TouchableOpacity>
);

const NestedLink: React.FC<NestedLinkProps> = ({ icon: Icon, label, isActive }) => (
  <TouchableOpacity style={[styles.nestedRow, isActive && styles.activeNestedRow]}>
    <View style={styles.nestedIconContainer}>
      <Icon size={16} color={isActive ? "#3b82f6" : "#94a3b8"} />
    </View>
    <Text style={[styles.nestedText, isActive && styles.activeNestedText]}>{label}</Text>
  </TouchableOpacity>
);

export default HamburgerMenuV1;