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
  title: {
    fontSize: 22,
    fontWeight: '700',
  },
  sub: {
    color: Colors.textSecondary,
    marginTop: 4,
  },
});