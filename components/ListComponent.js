import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ListComponent = () => {
  return (
    <View style={styles.container}>
      <Text>List Component</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default ListComponent;