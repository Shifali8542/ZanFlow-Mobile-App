import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
    StatusBar,
    Modal,
    TouchableWithoutFeedback,
} from 'react-native';
import { Users, UserPlus, Crown, Eye, Trash2, ArrowLeft, MoreVertical } from 'lucide-react-native';
import { styles } from '../../styles/TeamManagement.style';
import LayoutWrapper from '../../components/LayoutWrapper';
import { Colors } from '../../theme/colors';

interface User {
    id: string;
    name: string;
    email: string;
    role: 'Admin' | 'Viewer';
    joinedDate: string;
    initial: string;
}

interface TeamManagementProps {
    navigation: any;
}

const TeamManagement: React.FC<TeamManagementProps> = ({ navigation }) => {
    const [users] = useState<User[]>([
        {
            id: '1',
            name: 'Shifali',
            email: 'shifaligupta@lensvox.com',
            role: 'Admin',
            joinedDate: 'Dec 2, 2025',
            initial: 'S',
        },
        {
            id: '2',
            name: 'dipti12',
            email: 'dipti@gmail.com',
            role: 'Viewer',
            joinedDate: 'Dec 2, 2025',
            initial: 'D',
        },
        {
            id: '3',
            name: 'harshit',
            email: 'harshitshukla@lensvox.com',
            role: 'Admin',
            joinedDate: 'Dec 2, 2025',
            initial: 'H',
        },
        {
            id: '4',
            name: 'jyoti12',
            email: 'jyoti@gmail.com',
            role: 'Viewer',
            joinedDate: 'Dec 3, 2025',
            initial: 'J',
        },
    ]);

    const [menuVisible, setMenuVisible] = useState<string | null>(null);

    const handleAddUser = () => {
        navigation.navigate('Role');
    };

    const handleChangeRole = (userId: string) => {
        setMenuVisible(null);
        console.log('Change role for user:', userId);
    };

    const handleDeleteUser = (userId: string) => {
        setMenuVisible(null);
        console.log('Delete user:', userId);
    };

    const toggleMenu = (userId: string) => {
        setMenuVisible(menuVisible === userId ? null : userId);
    };

    const closeMenu = () => {
        setMenuVisible(null);
    };

    return (
        <LayoutWrapper navigation={navigation} showHeader={true} showFooter={true}>
            <SafeAreaView style={[styles.container, { backgroundColor: Colors.background }]}>
                {/* Header */}
                <View style={styles.header}>
                    <View style={styles.leftHeader}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                            <Text style={styles.backText}>←</Text>
                        </TouchableOpacity>
                        <Text style={styles.welcome}>Team Management</Text>
                    </View>
                </View>

                <ScrollView
                    style={styles.scrollView}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.scrollContent}
                >
                    {/* Section Header with Add Button */}
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>System Users ({users.length})</Text>
                        <TouchableOpacity style={styles.addButton} onPress={handleAddUser}>
                            <UserPlus size={18} color="#FFFFFF" strokeWidth={2.5} />
                            <Text style={styles.addButtonText}>Add User</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Users List */}
                    <View style={styles.usersList}>
                        {users.map((user, index) => (
                            <View
                                key={user.id}
                                style={[
                                    styles.userCard,
                                    index !== users.length - 1 && styles.userCardMargin
                                ]}
                            >
                                <View style={styles.userContent}>
                                    {/* Avatar */}
                                    <View style={styles.avatar}>
                                        <Text style={styles.avatarText}>{user.initial}</Text>
                                    </View>

                                    {/* User Details */}
                                    <View style={styles.userDetails}>
                                        <View style={styles.userNameRow}>
                                            <Text style={styles.userName}>{user.name}</Text>
                                        </View>

                                        <View style={[
                                            styles.roleBadge,
                                            user.role === 'Admin' ? styles.adminBadge : styles.viewerBadge
                                        ]}>
                                            {user.role === 'Admin' ? (
                                                <Crown size={11} color="#d97706" strokeWidth={2.5} />
                                            ) : (
                                                <Eye size={11} color="#64748b" strokeWidth={2.5} />
                                            )}
                                            <Text style={[
                                                styles.roleText,
                                                user.role === 'Admin' ? styles.adminText : styles.viewerText
                                            ]}>
                                                {user.role}
                                            </Text>
                                        </View>

                                        <Text style={styles.userEmail}>{user.email}</Text>
                                        <Text style={styles.userJoined}>Joined: {user.joinedDate}</Text>
                                    </View>

                                    {/* Three Dot Menu Button */}
                                    <TouchableOpacity
                                        style={styles.menuButton}
                                        onPress={() => toggleMenu(user.id)}
                                    >
                                        <MoreVertical size={20} color="#64748b" strokeWidth={2} />
                                    </TouchableOpacity>
                                </View>

                                {/* Dropdown Menu */}
                                {menuVisible === user.id && (
                                    <View style={styles.dropdown}>
                                        <TouchableOpacity
                                            style={styles.dropdownItem}
                                            onPress={() => handleChangeRole(user.id)}
                                        >
                                            <Crown size={16} color="#475569" strokeWidth={2} />
                                            <Text style={styles.dropdownText}>Change Role</Text>
                                        </TouchableOpacity>

                                        <View style={styles.dropdownDivider} />

                                        <TouchableOpacity
                                            style={styles.dropdownItem}
                                            onPress={() => handleDeleteUser(user.id)}
                                        >
                                            <Trash2 size={16} color="#ef4444" strokeWidth={2} />
                                            <Text style={[styles.dropdownText, styles.deleteText]}>Delete</Text>
                                        </TouchableOpacity>
                                    </View>
                                )}
                            </View>
                        ))}
                    </View>
                </ScrollView>

                {/* Overlay to close menu */}
                {menuVisible && (
                    <Modal
                        transparent
                        visible={menuVisible !== null}
                        animationType="none"
                        onRequestClose={closeMenu}
                    >
                        <TouchableWithoutFeedback onPress={closeMenu}>
                            <View style={styles.modalOverlay} />
                        </TouchableWithoutFeedback>
                    </Modal>
                )}
            </SafeAreaView>
        </LayoutWrapper>
    );
};

export default TeamManagement;