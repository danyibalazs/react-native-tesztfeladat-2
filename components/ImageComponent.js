import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, View, Alert } from 'react-native';

const ImageComponent = (props) => {
  const burgerPath = '../assets/burger.jpg';
  const steakPath = '../assets/steak.jpg';

  const [imageChanged, setImageChanged] = useState(false);

  useEffect(() => { 
      if (props.changeImg) {
        
        let imagePath;
        if (!imageChanged) {
          imagePath = steakPath;
        } else {
          imagePath = burgerPath;
        }

        Alert.alert(
          "The image changed!",
          `New path: ${imagePath}`
        )

        setImageChanged((prevState) => !prevState);  
      }
  }, [props])

  return (
    <View style={styles.container}>
      { imageChanged ? 
        <Image style={styles.image} source={require(steakPath)} resizeMode="contain" /> :
        <Image style={styles.image} source={require(burgerPath)} resizeMode="contain" />
      }  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    
    width: '100%',
  }
});

export default ImageComponent;