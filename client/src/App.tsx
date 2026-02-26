import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [array, setArray] = useState([]);

  const fetchAPI = async () => {
    const response = await axios.get('http://localhost:2222/api');
    setArray(response.data.cat);
  };

  useEffect (() => {
    fetchAPI();
  }, []);

  return (
      <div>
        {array.map((ver, index) => (
          <div key={index}>
            <p className='ver'>{ver}</p>
            <br></br>
          </div>
        ))}
      </div>
  )
}

export default App
