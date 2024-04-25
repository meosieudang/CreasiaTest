import AppContainer from '@/AppContainer';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { persister, store } from '@/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';


const App = () => {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
        <SafeAreaProvider>
          <AppContainer />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
