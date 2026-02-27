import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import './scripts/AboutBlank.ts';
import './components/Credits_label.tsx';
import './components/Version_Label.tsx';
import { Version_Label } from './components/Version_Label.tsx';

function App() {
  return (
    <Version_Label />
  );
}

export default App
