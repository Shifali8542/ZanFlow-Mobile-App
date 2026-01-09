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
  LucideIcon,
  User
} from 'lucide-react-native';
import { styles, DRAWER_WIDTH } from '../styles/HamburgerMenu.style';

interface HamburgerMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navigation: any;
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
  onPress?: () => void;
}

const HamburgerMenuV1: React.FC<HamburgerMenuProps> = ({ isOpen, onClose, navigation }) => {
  const [tasksExpanded, setTasksExpanded] = useState(false);
  const [shouldRender, setShouldRender] = useState(isOpen);

  const handleNavigation = (routeName: string) => {
    onClose();
    navigation.navigate(routeName);
  };

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
            <MenuLink
              icon={LayoutDashboard}
              label="Dashboard"
              onPress={() => handleNavigation('Home')}
            />
            <MenuLink
              icon={FolderKanban}
              label="Projects"
              onPress={() => handleNavigation('Projects')}
            />
            {/* Clickable Accordion Header */}
            <TouchableOpacity
              style={styles.menuRow}
              onPress={() => setTasksExpanded(!tasksExpanded)}
            >
              <View style={styles.rowLead}>
                <View style={styles.iconContainer}>
                  <FolderKanban size={20} color="#64748b" />
                </View>
                <Text style={styles.menuText}>Tasks</Text>
              </View>
              {tasksExpanded ? <ChevronUp size={18} color="#64748b" /> : <ChevronDown size={18} color="#64748b" />}
            </TouchableOpacity>

            {/* Expanded Accordion Content */}
            {tasksExpanded && (
              <View style={styles.nestedContainer}>
                <View style={styles.verticalLine} />
                <View style={styles.nestedList}>
                  <NestedLink
                    icon={CheckSquare}
                    label="All Tasks"
                    onPress={() => handleNavigation('AllTasks')}
                  />
                  <NestedLink
                    icon={CheckSquare}
                    label="Completed Tasks"
                    onPress={() => handleNavigation('CompletedTasks')}
                  />
                  <NestedLink
                    icon={Clock}
                    label="Pending Tasks"
                    onPress={() => handleNavigation('PendingTasks')}
                  />
                  <NestedLink
                    icon={Layers}
                    label="Backlog Tasks"
                    onPress={() => handleNavigation('BacklogTasks')}
                  />
                  <NestedLink
                    icon={PlayCircle}
                    label="In Progress"
                    onPress={() => handleNavigation('InProgressTasks')}
                  />
                  <NestedLink
                    icon={Send}
                    label="Deployed Tasks"
                    onPress={() => handleNavigation('DeployedTasks')}
                  />
                  <NestedLink
                    icon={Clock}
                    label="Deferred Tasks"
                    onPress={() => handleNavigation('DeferredTasks')}
                  />
                  <NestedLink
                    icon={Plus}
                    label="Add Task"
                    onPress={() => handleNavigation('AddNewTask')}
                  />
                </View>
              </View>
            )}

            <MenuLink
              icon={LayoutDashboard}
              label="Documents"
              onPress={() => handleNavigation('Documents')}
            />
            <MenuLink icon={FolderKanban} label="Team Management" />
          </View>
        </ScrollView>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            style={styles.footerRow}
            onPress={() => handleNavigation('Profile')}
          >
            <View style={styles.footerIconContainer}>
              <User size={20} color="#64748b" />
            </View>
            <Text style={styles.menuText}>Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.footerRow}
            onPress={() => handleNavigation('Settings')}
          >
            <View style={styles.footerIconContainer}>
              <Settings size={20} color="#64748b" />
            </View>
            <Text style={styles.menuText}>Settings</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  );
};

const MenuLink: React.FC<MenuLinkProps & { onPress?: () => void }> = ({
  icon: Icon,
  label,
  isSelected,
  onPress
}) => (
  <TouchableOpacity
    style={[styles.menuRow, isSelected && styles.selectedRow]}
    onPress={onPress}
  >
    <View style={styles.rowLead}>
      <View style={styles.iconContainer}>
        <Icon size={20} color={isSelected ? "#3b82f6" : "#64748b"} />
      </View>
      <Text style={[styles.menuText, isSelected && styles.selectedText]}>{label}</Text>
    </View>
  </TouchableOpacity>
);

const NestedLink: React.FC<NestedLinkProps & { onPress?: () => void }> = ({
  icon: Icon,
  label,
  isActive,
  onPress
}) => (
  <TouchableOpacity
    style={[styles.nestedRow, isActive && styles.activeNestedRow]}
    onPress={onPress}
  >
    <View style={styles.nestedIconContainer}>
      <Icon size={16} color={isActive ? "#3b82f6" : "#94a3b8"} />
    </View>
    <Text style={[styles.nestedText, isActive && styles.activeNestedText]}>{label}</Text>
  </TouchableOpacity>
);

export default HamburgerMenuV1;