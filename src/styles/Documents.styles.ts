import { StyleSheet, Dimensions  } from 'react-native';
import { Colors } from '../theme/colors';

const { width } = Dimensions.get('window');
const CARD_WIDTH = (width - 44) / 2;

export const styles = StyleSheet.create({
  container: { flex: 1 },
    header: {
        flexDirection: 'row',        
        alignItems: 'center',       
        justifyContent: 'space-between', 
        paddingHorizontal: 24,
        paddingTop: 20,               
        paddingBottom: 8,
    },
    leftHeader: {
        flexDirection: 'row',
        alignItems: 'center',         
    },
    backButton: {
        marginRight: 8,              
    },
    backText: {
        fontSize: 24,                  
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

  scrollContent: {
    padding: 16,
  },

  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },

  title: {
    fontSize: 24,
    fontWeight: '700',
  },

  subtitle: {
    fontSize: 14,
  },

  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
    gap: 6,
  },

  addButtonText: {
    color: '#FFF',
    fontWeight: '600',
    fontSize: 14,
  },

  searchRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
  },

  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 44,
  },

  input: {
    flex: 1,
    marginLeft: 8,
    fontSize: 14,
  },

  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    gap: 6,
  },

  filterText: {
    fontSize: 14,
    fontWeight: '500',
  },

  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
    gap: 12,
  },

  statCard: {
    width: CARD_WIDTH,
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
  },

  statCount: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 4,
  },

  statLabel: {
    fontSize: 13,
    fontWeight: '500',
  },
  docCard: {
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
  },

  docRow: {
    flexDirection: 'row',
    gap: 12,
  },

  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },

  docInfo: {
    flex: 1,
  },

  docName: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 6,
    lineHeight: 20,
  },

  metaRow: {
    flexDirection: 'row',
    marginBottom: 8,
  },

  metaText: {
    fontSize: 12,
    color: '#6B7280',
  },

  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },

  statusText: {
    fontSize: 11,
    fontWeight: '600',
    textTransform: 'capitalize',
  },

  uploaderText: {
    fontSize: 12,
  },
});