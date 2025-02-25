import React from 'react';
import './App.css';
import Counter from './Counter';
import FetchApiData from './FetchApiData';

function App() {

  // State to manage active tab. 'counter' is the default view since it is the first task.
  const [activeTab, setActiveTab] = React.useState('counter');

  // Function handling switching tabs
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="App">
      <nav style={{ marginBottom: '20px' }}>
        <button onClick={() => handleTabChange('counter')}>
          Task 1: Counter
        </button>
        <button onClick={() => handleTabChange('fetch')}>
          Task 2: Fetch API Data
        </button>
      </nav>
      <div>
        {activeTab === 'counter' && <Counter />}
        {activeTab === 'fetch' && <FetchApiData />}
      </div>
    </div>
  );
}

export default App;
