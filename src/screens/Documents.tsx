import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator
} from 'react-native';
import { Search, Filter, FileText, Plus, MoreVertical } from 'lucide-react-native';
import { Colors } from '../theme/colors';
import LayoutWrapper from '../components/LayoutWrapper';
import { styles } from '../styles/Documents.styles'
import { documentsApi } from '../api/documentsApi';

const DocumentsPage = ({ navigation }: any) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [stats, setStats] = useState<any[]>([]);
  const [documents, setDocuments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const loadDocuments = async () => {
    try {
      setLoading(true);

      const docsResponse = await documentsApi.list();

      setDocuments(docsResponse.results || []);   

    } catch (err) {
      console.log('Error loading documents:', err);
    } finally {
      setLoading(false);
    }
  };



  // ---- RUN ON SCREEN LOAD ----
  useEffect(() => {
    loadDocuments();
  }, []);

  // ---- OPTIONAL PULL REFRESH HANDLER ----
  const onRefresh = async () => {
    setRefreshing(true);
    await loadDocuments();
    setRefreshing(false);
  };



  const getTypeColor = (type: string) => {
    switch (type) {
      case 'pdf': return '#DC2626';
      case 'document': return '#3B82F6';
      case 'image': return '#10B981';
      default: return Colors.textSecondary;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'draft': return '#F59E0B';
      case 'review': return '#3B82F6';
      case 'approved': return '#10B981';
      default: return Colors.textSecondary;
    }
  };
  if (loading) {
    return (
      <LayoutWrapper navigation={navigation} showHeader={true} showFooter={true}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color={Colors.textPrimary} />
          <Text style={{ marginTop: 10, color: Colors.textSecondary }}>Loading documents...</Text>
        </View>
      </LayoutWrapper>
    );
  }


  return (
    <LayoutWrapper navigation={navigation} showHeader={true} showFooter={true}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.leftHeader}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Text style={styles.backText}>←</Text>
          </TouchableOpacity>
          <Text style={styles.welcome}>Documents</Text>
        </View>

        {/* Hamburger is handled by Layout wrapper */}
        <View style={styles.hamburgerPlaceholder} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Search and Filter */}
        <View style={styles.searchRow}>
          <View style={[styles.searchContainer, { backgroundColor: Colors.cardBackground, borderColor: Colors.inputBorder }]}>
            <Search size={18} color={Colors.textSecondary} />
            <TextInput
              style={styles.input}
              placeholder="Search documents..."
              value={searchQuery}
              onChangeText={setSearchQuery}
              placeholderTextColor={Colors.textSecondary}
            />
          </View>
          <TouchableOpacity style={[styles.filterButton, { backgroundColor: Colors.cardBackground, borderColor: Colors.inputBorder }]}>
            <Filter size={18} color={Colors.textPrimary} />
            <Text style={[styles.filterText, { color: Colors.textPrimary }]}>Filters</Text>
          </TouchableOpacity>
        </View>

        {/* Stats Cards (Grid Implementation) */}
        <View style={styles.statsGrid}>
          {stats.map((stat, index) => (
            <View key={index} style={[styles.statCard, { backgroundColor: Colors.cardBackground, borderColor: Colors.inputBorder }]}>
              <Text style={[styles.statCount, { color: stat.color }]}>{stat.count}</Text>
              <Text style={[styles.statLabel, { color: Colors.textSecondary }]}>{stat.label}</Text>
            </View>
          ))}
        </View>

        {/* Documents List */}
        <View style={styles.listContainer}>
          {documents.map((doc) => (
            <View key={doc.id} style={[styles.docCard, { backgroundColor: Colors.cardBackground, borderColor: Colors.inputBorder }]}>
              <View style={styles.docRow}>
                <View style={[styles.iconContainer, { backgroundColor: Colors.background }]}>
                  <FileText size={20} color={getTypeColor(doc.file_type)} />
                  <Text style={[styles.metaText, { color: getTypeColor(doc.file_type) }]}>
                    {doc.file_type} 
                  </Text>
                </View>

                <View style={styles.docInfo}>
                  <Text style={styles.metaTextH}>Project: {doc.project} </Text>
                  <Text style={styles.docName}> {doc.name} </Text>

                  {/* <View style={styles.metaRow}>
                    <Text style={styles.metaText}>
                      {new Date(doc.updated_at).toDateString()}
                    </Text>
                  </View> */}

                  <View style={styles.statusRow}>
                    <View style={[styles.statusBadge, { backgroundColor: `${getStatusColor(doc.status)}15` }]}>
                      <Text style={[styles.statusText, { color: getStatusColor(doc.status) }]}>{doc.status}</Text>
                    </View>
                    <Text style={styles.uploaderText}>by {doc.created_by.username}</Text>
                  </View>
                </View>

                <TouchableOpacity>
                  <MoreVertical size={20} color={Colors.textSecondary} />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </LayoutWrapper>
  );
};

export default DocumentsPage;