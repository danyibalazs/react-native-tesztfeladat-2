import React from 'react';
import { Stack, Router, Scene, Tabs } from 'react-native-router-flux';

import ButtonComponent from './components/ButtonComponent';
import ImageComponent from './components/ImageComponent';
import ListComponent from './components/ListComponent';
import TextComponent from './components/TextComponent';

export default function App() {
  return (
    <Router>
      <Stack key="root">
        <Tabs
          hideNavBar
          tabBarStyle={{ backgroundColor: '#fbfbfb'}}
          labelStyle={{fontSize: 18, padding: 10}} 
          wrap={false}    
        >
          <Scene key="text" title="Text"  component={TextComponent} initial />
          <Scene key="image" title="Image"  component={ImageComponent} />
          <Scene key="button" title="Button"  component={ButtonComponent} />    
          <Scene key="list" title="List"  component={ListComponent} />       
        </Tabs>
      </Stack>
    </Router>
  );
}

