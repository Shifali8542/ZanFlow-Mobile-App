import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Search, Filter, FileText, Plus, MoreVertical } from 'lucide-react-native';
import { Colors } from '../theme/colors';
import LayoutWrapper from '../components/LayoutWrapper';
import { styles } from '../styles/Documents.styles'

const DocumentsPage = ({ navigation }: any) => {
  const [searchQuery, setSearchQuery] = useState('value');

  // Data from original source
  const stats = [
    { label: 'Total', count: 20, color: Colors.textPrimary },
    { label: 'Draft', count: 20, color: '#F59E0B' },
    { label: 'In Review', count: 0, color: '#3B82F6' },
    { label: 'Approved', count: 0, color: '#10B981' },
  ];

  const documents = [
    { id: 1, name: 'ZanFlow_Product_Documentation.pdf', project: 'Project 27', type: 'pdf', status: 'draft', updated: '1h ago', uploader: 'harshit' },
    { id: 2, name: 'AI-powered task creation for Zanflow project management.pdf', project: 'Project 27', type: 'pdf', status: 'draft', updated: '1h ago', uploader: 'harshit' },
    { id: 3, name: 'MockFlow - Project Plan Draft (1).pdf', project: 'Project 26', type: 'pdf', status: 'draft', updated: '5d ago', uploader: 'harshit' },
    { id: 4, name: 'document.pdf', project: 'Project 22', type: 'pdf', status: 'draft', updated: '6d ago', uploader: 'harshit' },
  ];

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
                    <FileText size={20} color={getTypeColor(doc.type)} />
                  </View>

                  <View style={styles.docInfo}>
                    <Text style={[styles.docName, { color: Colors.textPrimary }]} numberOfLines={2}>
                      {doc.name}
                    </Text>

                    <View style={styles.metaRow}>
                      <Text style={styles.metaText}>{doc.project}  •  </Text>
                      <Text style={[styles.metaText, { color: getTypeColor(doc.type), fontWeight: '600' }]}>{doc.type}  •  </Text>
                      <Text style={styles.metaText}>{doc.updated}</Text>
                    </View>

                    <View style={styles.statusRow}>
                      <View style={[styles.statusBadge, { backgroundColor: `${getStatusColor(doc.status)}15` }]}>
                        <Text style={[styles.statusText, { color: getStatusColor(doc.status) }]}>{doc.status}</Text>
                      </View>
                      <Text style={[styles.uploaderText, { color: Colors.textSecondary }]}>by {doc.uploader}</Text>
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