import React from 'react';
import { useState } from 'react';
import { Sun, Moon, Clock, X, BarChart2 } from 'lucide-react';

export default function ModeLigthdark(props) {

  const [darkMode, setDarkMode] = useState(false);


  // const ModeLD = () => {
  //     const [ligthMode, setLigthMode] = useState(true);
  //     const [darkMode, setDarkMode] = useState(false);

      return (
      
        <div className="p-4">
          <button 
            onClick={()=> setDarkMode(!darkMode)}
            className="flex items-center space-x-3 text-gray-600 px-4 py-3 hover:bg-gray-50 rounded-lg w-full">
            {darkMode ? <Moon size={20} /> : <Sun size={20} />}
            <span>{darkMode ? 'Dark Mode' : 'Light Mode'}</span>
          </button>
        </div>
     
    )
}