import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, View, Alert } from 'react-native';

const ImageComponent = (props) => {
  const buildingImgPath = '../assets/building.jpg';
  const bridgeImgPath = '../assets/bridge.jpg';

  const [imageChanged, setImageChanged] = useState(false);

  useEffect(() => { 
      if (props.changeImg) {
        
        let imagePath;
        if (!imageChanged) {
          imagePath = buildingImgPath;
        } else {
          imagePath = bridgeImgPath;
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
        <Image style={styles.image} source={require(buildingImgPath)} resizeMode='cover' /> :
        <Image style={styles.image} source={require(bridgeImgPath)} resizeMode='cover' />
      }  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  image: {
    width: '100%',  
  }
});

export default ImageComponent;