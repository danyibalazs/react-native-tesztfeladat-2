import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const ListItemComponent = props => {
  return (
    <TouchableOpacity activeOpacity={0.5}>
      <View style={styles.listItem} >
        <Text style={styles.text}>{props.name}</Text>
      </View>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#fbfbfb',
    borderColor: '#e0e0e0',
    borderWidth: 1,
    borderRadius: 10
  },
  text: {
    textAlign: 'center'
  }
})

export default ListItemComponent;