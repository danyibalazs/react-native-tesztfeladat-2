import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

const ButtonComponent = () => {

  const onPressBtn = () => {
    Actions.text({changedText: 'Click here to change the image!'});
  }

  return (
    <View style={styles.container}>
      <Button title="Click me!" onPress={onPressBtn}></Button>
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

export default ButtonComponent;