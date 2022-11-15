import './App.css';
import {AppProviders} from './providers/App-Providers'
import MuiMode from './components/mui/Mui-Mode'

function App() {
  return (
    <AppProviders>
      <div className="App">
        <MuiMode/>
      </div>
    </AppProviders>
  );
}

export default App;
