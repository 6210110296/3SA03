import React, { useState } from 'react';
import WordCard from './WordCard';
import './App.css';
const word = "hello"

function App() {
  return (
    <div>
      {
        <WordCard value="hello" />
      }

    </div>
  );
}

export default App;
