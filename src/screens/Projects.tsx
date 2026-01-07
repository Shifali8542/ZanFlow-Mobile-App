import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    SafeAreaView
} from 'react-native';
import { Folder, FileText, Users, Plus } from 'lucide-react-native';
import LayoutWrapper from '../components/LayoutWrapper';
import { styles } from '../styles/Projects.styles';

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

export default ProjectsPage;