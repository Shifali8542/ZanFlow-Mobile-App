import { StyleSheet } from 'react-native';
import { Colors } from '../theme/colors';

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