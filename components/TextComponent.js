import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const TextComponent = (props) => {

  return (
    <View style={styles.container}>
      <Text>{props.changedText ? props.changedText : 'Original Text'}</Text>
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

export default TextComponent;