import React, { useEffect } from 'react';
// import ReactDOM from 'react-dom';
import './App.css';
import SortVisualizer from './SortVisualizer';

function App() {
  useEffect(() => {
    document.title = 'Sorting Visualizer';
  }, []);
  return (
    <div className="App">
      <SortVisualizer />
    </div>
  );
}

export default App;
