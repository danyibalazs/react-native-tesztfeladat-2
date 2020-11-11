import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ListItemComponent = props => {
  
  const getBorderColor = () => {
    if (props.selectedState === props.data.megyeid) {
      return 'green'
    } else {
      return '#e0e0e0'
    }
  }

  return ( 
    <TouchableOpacity activeOpacity={0.5} onPress={() => props.onSelectCity(props.data.megyeid)}>
      <View style={[styles.listItem, {borderColor: getBorderColor()}]} >
        <Text style={styles.text}>{props.data.vnev}</Text>
      </View>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 30,
    backgroundColor: '#fbfbfb',
    borderWidth: 1,
    borderRadius: 10
  },
  text: {
    textAlign: 'center',
    fontSize: 14
  }
})

export default ListItemComponent;