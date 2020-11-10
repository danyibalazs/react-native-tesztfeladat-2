import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import ListItemComponent from './ListItemComponent';

const ListComponent = () => {

  const [isLoading, setLoading] = useState(true);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetch('http://majorbence.hu/GmEn2AZwoD/?cities=true')
      .then(response => response.json())
      .then((json) => {
        setCities(json);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false))
  }, [])


  return (
    <View style={styles.container}>
      {isLoading ? null : 
          <FlatList
            data={cities}
            renderItem={itemData =>
            <ListItemComponent name={itemData.item.vnev} />}
          >
          </FlatList>
      } 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
  }
  
});

export default ListComponent;