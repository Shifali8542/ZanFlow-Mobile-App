import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
    ActivityIndicator,
    RefreshControl
} from 'react-native';
import { Folder, FileText, Users } from 'lucide-react-native';
import LayoutWrapper from '../components/LayoutWrapper';
import { styles } from '../styles/Projects.styles';
import { projectsApi, ProjectMinimal } from '../api/projectsApi'; // Adjust path as needed
import { Colors } from '../theme/colors';

const ProjectsPage = ({ navigation }: any) => {
    const [projects, setProjects] = useState<ProjectMinimal[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isRefreshing, setIsRefreshing] = useState(false);

    const fetchProjects = async () => {
        try {
            const data = await projectsApi.list();
            setProjects(data.results);
        } catch (error) {
            console.error("Failed to fetch projects:", error);
        } finally {
            setIsLoading(false);
            setIsRefreshing(false);
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    const onRefresh = () => {
        setIsRefreshing(true);
        fetchProjects();
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
                        <Text style={styles.welcome}>Projects</Text>
                    </View>
                </View>

                {isLoading ? (
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <ActivityIndicator size="large" color={Colors.textPrimary} />
                    </View>
                ) : (
                    <ScrollView 
                        contentContainerStyle={styles.listContainer}
                        refreshControl={
                            <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
                        }
                    >
                        {projects.map((project) => (
                            <TouchableOpacity
                                key={project.id}
                                activeOpacity={0.7}
                                style={[styles.card, { backgroundColor: Colors.cardBackground, borderColor: Colors.inputBorder }]}
                                onPress={() => navigation.navigate('ProjectDetail', { id: project.id })}
                            >
                                <View style={styles.cardHeader}>
                                    <View style={[styles.iconBox, { backgroundColor: Colors.background }]}>
                                        <Folder size={22} color={Colors.textSecondary} />
                                    </View>

                                    <View style={styles.headerText}>
                                        <Text style={[styles.projectName, { color: Colors.textPrimary }]}>
                                            {project.name}
                                        </Text>
                                        <Text style={[styles.projectName, { color: Colors.textSecondary }]}>
                                            {project.task_type}
                                        </Text>
                                    </View>
                                </View>

                                <View style={styles.footer}>
                                    <View style={styles.statsRow}>
                                        <View style={styles.statItem}>
                                            {/* <Users size={16} color={Colors.textSecondary} /> */}
                                            {/* <Text style={[styles.statText, { color: Colors.textSecondary }]}>
                                                ID: {project.id}
                                            </Text>
                                            <Text style={[styles.statText, { color: Colors.textSecondary }]}>
                                                {project.is_active ? 'Active' : 'Inactive'}
                                            </Text> */}
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                )}
            </SafeAreaView>
        </LayoutWrapper>
    );
};

export default ProjectsPage;