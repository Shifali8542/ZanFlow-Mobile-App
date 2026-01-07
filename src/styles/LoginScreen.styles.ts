
import { StyleSheet } from 'react-native';
import { Colors } from '../theme/colors';

    export const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: Colors.background,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      },
      card: {
        backgroundColor: Colors.cardBackground,
        width: '100%',
        maxWidth: 400,
        padding: 30,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#E9ECEF',
        // Shadow for iOS/Android
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 3,
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: Colors.textPrimary,
        marginBottom: 8,
      },
      subtitle: {
        fontSize: 14,
        textAlign: 'center',
        color: Colors.textSecondary,
        marginBottom: 32,
      },
      inputGroup: {
        marginBottom: 20,
      },
      label: {
        fontSize: 14,
        fontWeight: '600',
        marginBottom: 8,
        color: Colors.textPrimary,
      },
      input: {
        height: 48,
        borderWidth: 1,
        borderColor: Colors.inputBorder,
        borderRadius: 6,
        paddingHorizontal: 12,
        fontSize: 14,
        color: '#000',
      },
      button: {
        backgroundColor: Colors.buttonPrimary,
        height: 48,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
      },
      buttonText: {
        color: Colors.buttonText,
        fontSize: 16,
        fontWeight: '600',
      },
    });