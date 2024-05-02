import CompA from './components/CompA';
import './App.css';
import { DataProvider } from './contexts/dataContext';

function App() {
  return (
    <DataProvider>

      <div className="App">
     
      <CompA /> 
      </div>
    </DataProvider>
    
  );
}

export default App;
