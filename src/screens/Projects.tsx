import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
    SafeAreaView
} from 'react-native';
import { Folder, FileText, Users, Plus } from 'lucide-react-native';
import LayoutWrapper from '../components/LayoutWrapper';

const Colors = {
    background: '#F8F9FA',
    cardBackground: '#FFFFFF',
    textPrimary: '#000000',
    textSecondary: '#6C757D',
    inputBorder: '#DEE2E6',
    buttonPrimary: '#0D1117',
    buttonText: '#FFFFFF',
};

const ProjectsPage = ({ navigation }: any) => {
    const projects = [
        { id: 1, name: 'Zanflow Backend', tag: 'internal', tagColor: '#E5E7EB', description: 'Create a backend in django and use s3 as a database.', docs: 2, members: 4, updated: '1h ago' },
        { id: 2, name: 'Mockflow', tag: 'internal', tagColor: '#E5E7EB', description: 'MockFlow aims to be a comprehensive platform designed to streamline the development lifecycle by integrating API...', docs: 1, members: 2, updated: '5d ago' },
        { id: 3, name: 'Yeses', tag: 'client', tagColor: '#DBEAFE', description: 'devaef', docs: 9, members: 3, updated: '6d ago' },
        { id: 4, name: 'ZanFlow', tag: 'content creation', tagColor: '#FEF3C7', description: '', docs: 9, members: 2, updated: 'Dec 16, 2025' },
    ];

    return (
        <LayoutWrapper navigation={navigation} showHeader={true} showFooter={true}>
            <SafeAreaView style={[styles.container, { backgroundColor: Colors.background }]}>
                {/* Header */}
                <View style={styles.header}>
                    <View style={styles.leftHeader}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                            <Text style={styles.backText}>←</Text>
                        </TouchableOpacity>
                        <Text style={styles.welcome}>Projects</Text>
                    </View>

                    {/* Hamburger is handled by Layout wrapper */}
                    <View style={styles.hamburgerPlaceholder} />
                </View>

                {/* Projects List */}
                <ScrollView contentContainerStyle={styles.listContainer}>
                    {projects.map((project) => (
                        <TouchableOpacity
                            key={project.id}
                            activeOpacity={0.7}
                            style={[styles.card, { backgroundColor: Colors.cardBackground, borderColor: Colors.inputBorder }]}
                        >
                            {/* Project Header */}
                            <View style={styles.cardHeader}>
                                <View style={[styles.iconBox, { backgroundColor: Colors.background }]}>
                                    <Folder size={22} color={Colors.textSecondary} />
                                </View>

                                <View style={styles.headerText}>
                                    <Text style={[styles.projectName, { color: Colors.textPrimary }]}>
                                        {project.name}
                                    </Text>
                                    <View style={[styles.tag, { backgroundColor: project.tagColor }]}>
                                        <Text style={[styles.tagText, { color: Colors.textPrimary }]}>
                                            {project.tag}
                                        </Text>
                                    </View>
                                </View>
                            </View>

                            {/* Project Description */}
                            {project.description ? (
                                <Text style={[styles.description, { color: Colors.textSecondary }]}>
                                    {project.description}
                                </Text>
                            ) : null}

                            {/* Project Stats */}
                            <View style={styles.footer}>
                                <View style={styles.statsRow}>
                                    <View style={styles.statItem}>
                                        <FileText size={16} color={Colors.textSecondary} />
                                        <Text style={[styles.statText, { color: Colors.textSecondary }]}>
                                            {project.docs} docs
                                        </Text>
                                    </View>

                                    <View style={styles.statItem}>
                                        <Users size={16} color={Colors.textSecondary} />
                                        <Text style={[styles.statText, { color: Colors.textSecondary }]}>
                                            {project.members} members
                                        </Text>
                                    </View>
                                </View>

                                <Text style={[styles.updatedText, { color: Colors.textSecondary }]}>
                                    Updated {project.updated}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </SafeAreaView>
        </LayoutWrapper>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1 },
    header: {
        flexDirection: 'row',         // Align title and hamburger horizontally
        alignItems: 'center',         // Center items vertically
        justifyContent: 'space-between', 
        paddingHorizontal: 24,
        paddingTop: 20,               // Adjusted for better status bar clearance
        paddingBottom: 8,
    },
    leftHeader: {
        flexDirection: 'row',
        alignItems: 'center',         // Align arrow and "Projects" text
    },
    backButton: {
        marginRight: 8,               // Space between arrow and title
    },
    backText: {
        fontSize: 24,                 // Increased size to match title scale
        color: Colors.textPrimary,
        fontWeight: '400',
    },
    welcome: {
        fontSize: 24,
        fontWeight: '700',
        color: Colors.textPrimary,
        letterSpacing: -0.5,
    },
    hamburgerPlaceholder: {
        width: 40,
        height: 40,
        // The actual icon is handled by LayoutWrapper, 
        // this keeps the space balanced.
    },
    listContainer: { 
        padding: 16, 
        gap: 16 
    },
    headerTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 },
    title: { fontSize: 24, fontWeight: '700' },
    subtitle: { fontSize: 14 },
    addButton: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 12, paddingVertical: 8, borderRadius: 8, gap: 6 },
    addButtonText: { fontSize: 14, fontWeight: '600' },
    card: { padding: 16, borderRadius: 12, borderWidth: 1 },
    cardHeader: { flexDirection: 'row', gap: 12, marginBottom: 12 },
    iconBox: { width: 44, height: 44, borderRadius: 10, alignItems: 'center', justifyContent: 'center' },
    headerText: { flex: 1 },
    projectName: { fontSize: 16, fontWeight: '600', marginBottom: 6 },
    tag: { alignSelf: 'flex-start', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 6 },
    tagText: { fontSize: 12, fontWeight: '500' },
    description: { fontSize: 14, lineHeight: 20, marginBottom: 12 },
    footer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    statsRow: { flexDirection: 'row', gap: 16 },
    statItem: { flexDirection: 'row', alignItems: 'center', gap: 6 },
    statText: { fontSize: 13 },
    updatedText: { fontSize: 12 },
});

export default ProjectsPage;