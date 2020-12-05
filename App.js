import React from 'react';
import * as eva from '@eva-design/eva';
import 'react-native-gesture-handler';
import Navigation from './src/Navigations/navigation'
import { default as theme } from './theme.json'
import { ApplicationProvider,IconRegistry} from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { Provider } from 'react-redux'
import createStore from './src/Store/configureStore'
import { StatusBar} from "react-native";
import Store from './src/Store/configureStore'
import { PersistGate } from 'redux-persist/integration/react'
import {persistStore} from 'redux-persist';
const persistor = persistStore(Store);
const App: () => React$Node = () => {
  return (
    <Provider store={createStore} >
    

      <PersistGate loading={null} persistor={persistor}>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
          
          <StatusBar backgroundColor="#C72740" />
          
          <Navigation/>
      
        </ApplicationProvider>
      </PersistGate>
   
      </Provider>
  );
};

export default App;
