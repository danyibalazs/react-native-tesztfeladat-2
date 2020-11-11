import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import ListItemComponent from './ListItemComponent';

const ListComponent = () => {

  const [cities, setCities] = useState([]);
  const [cityState, setCityState] = useState();

  const onSelectCity = (stateId) => {
    setCityState(stateId);
  }

  useEffect(() => {
    fetch('http://majorbence.hu/GmEn2AZwoD/?cities=true')
      .then(response => response.json())
      .then((json) => {
        setCities(json);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])

  return (
    <View style={styles.container}>
      {cities ?  
        <FlatList
          data={cities}
          renderItem={itemData =>
          <ListItemComponent 
            data={itemData.item} 
            onSelectCity={onSelectCity} 
            selectedState={cityState} 
          />}
        /> :
        null
      } 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30
  }
});

export default ListComponent;