import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ImageComponent = () => {
  return (
    <View style={styles.container}>
      <Text>Image Component</Text>
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

export default ImageComponent;