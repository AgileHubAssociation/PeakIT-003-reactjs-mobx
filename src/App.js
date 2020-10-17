import React from 'react';
import { Provider } from "mobx-react";
import Market from './components/Market/Market';
import MarketStore from './stores/MarketStore';
import './App.css';

function App() {
  return (
    <div className="App">
      <Provider MarketStore={MarketStore}>
        <Market />
      </Provider>
    </div>
  );
}

export default App;
