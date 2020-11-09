import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

const TextComponent = (props) => {

  const onTextPress = () => {
    Actions.image({changeImg: true});
  }
 
  return (
    <View style={styles.container}>
      {props.changedText ?
        <TouchableOpacity activeOpacity={0.8} onPress={onTextPress}>
          <Text style={{fontSize: 18}}>Click here to change the image!</Text>
        </TouchableOpacity> 
        :
        <Text style={{fontSize: 18}}>Click the Button to change me!</Text>
      }   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 18
  }
});

export default TextComponent;