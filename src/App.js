import React from 'react';
import './App.css';
import Title from './components/Title';
import Detail from './components/Detail';
import Name from './components/Name';

function App() {
  return (
    <div className="App">
      <div className='wrapper'>
        <Title />
        <Detail />
        <Name />
      </div>
    </div>
  );
}

export default App;
