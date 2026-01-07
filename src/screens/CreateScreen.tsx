import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/CreateScreen.styles';
import LayoutWrapper from '../components/LayoutWrapper';

const CreateScreen = ({ navigation }: any) => {
  return (
    <LayoutWrapper navigation={navigation} showHeader={true} showFooter={true}>
    <View style={styles.container}>
      <Text style={styles.title}>Create</Text>

      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardTitle}>New Project</Text>
        <Text style={styles.cardSub}>Start a new project</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardTitle}>New Task</Text>
        <Text style={styles.cardSub}>Assign or track work</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardTitle}>Upload Document</Text>
        <Text style={styles.cardSub}>Add files to projects</Text>
      </TouchableOpacity>
    </View>
    </LayoutWrapper>
  );
};

export default CreateScreen;

