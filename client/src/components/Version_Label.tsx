import { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';

export function Version_Label() {
  const [array, setArray] = useState([]);

  const fetchAPI = async () => {
    const response = await axios.get('http://localhost:2222/api');
    setArray(response.data.cat);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <div>
      {array?.map((ver, index) => (
        <p className='ver' key={index}>{ver}</p>
      ))}
    </div>
  )
}