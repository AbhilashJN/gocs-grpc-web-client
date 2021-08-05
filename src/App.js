import React from 'react';
import './App.css';
import {Home} from 'gocs-ui-core'
import FilePicker from './components/FilePicker'
import getPlayersListApi from './services/players_list/api'
import getDeathPositionsForPlayerApi from './services/heatmap/api'
import getStatsForPlayerApi from './services/stats_summary/api'

function App() {
  return (
    <div className="App">
        <Home 
          getPlayersListApi={getPlayersListApi} 
          getStatsForPlayerApi={getStatsForPlayerApi} 
          getDeathPositionsForPlayerApi={getDeathPositionsForPlayerApi}
          FilePicker={FilePicker}
        />
    </div>
  );
}

export default App;
