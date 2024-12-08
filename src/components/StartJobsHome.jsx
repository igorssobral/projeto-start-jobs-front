import React, { useState } from 'react';
import { Home, UserCircle2, UserPlus, Box, Globe, Brain, FileText, Sun, Moon, Clock, X, BarChart2 } from 'lucide-react';
//import logo from '../assets/logo2x.png';
// import Header1 from './Header1';
// import Nav from './Nav';
// import ModeLigthdark from './ModeLightDark';


const StartJobsHome = ()=> {
  const [darkMode, setDarkMode] = useState(false);

  // const login = ()=> {
  //   let [showModal, setShowModal] = useState(false);

  //   let handleShowModal = ()=> {
  //     setShowModal(true);
  //   };

  //   let handleCloseModal = ()=> {
  //     setShowModal(false)
  //   }
  // }

  return (

    <div className="max-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-screen w-64 bg-white shadow-lg flex flex-col">
        {/* Header1 */}
        {/* <Header1/>
        <Nav/>
        <ModeLigthdark/> */}
        <div className="p-6">
          <div className="flex items-center space-x-2">
            <div className="text-blue-500 text-3xl">
            <img src={logo} alt="Logo" width="50" height="50" />
            </div>
            <div className="text-blue-500 font-bold text-xl">Start Jobs</div>
          </div>
        </div>

        {/* Navigation  */}
        <nav className="flex-1 px-4 space-y-1">
          <a href="#" className="flex items-center space-x-3 bg-blue-500 text-white px-4 py-3 rounded-lg">
            <Home size={20} />
            <span>Home</span>
          </a>

                   
            <a href="#" className="flex items-center space-x-3 text-gray-600 px-4 py-3 hover:bg-gray-50 rounded-lg"><UserCircle2 size={20} />
            <span>Login</span>
            </a>
                    

          <a href="#" className="flex items-center space-x-3 text-gray-600 px-4 py-3 hover:bg-gray-50 rounded-lg">
            <UserPlus size={20} />
            <span>Register</span>
          </a>
          <a href="#" className="flex items-center space-x-3 text-gray-600 px-4 py-3 hover:bg-gray-50 rounded-lg">
            <Box size={20} />
            <span>Product Analysis</span>
          </a>
          <a href="#" className="flex items-center space-x-3 text-gray-600 px-4 py-3 hover:bg-gray-50 rounded-lg">
            <Globe size={20} />
            <span>Location Analysis</span>
          </a>
          <a href="#" className="flex items-center space-x-3 text-gray-600 px-4 py-3 hover:bg-gray-50 rounded-lg">
            <Brain size={20} />
            <span>Talent Insights</span>
          </a>
          <a href="#" className="flex items-center space-x-3 text-gray-600 px-4 py-3 hover:bg-gray-50 rounded-lg">
            <FileText size={20} />
            <span>Post Vacancy</span>
          </a>
        </nav>


        {/* Theme Toggle */}
        <div className="p-4">
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="flex items-center space-x-3 text-gray-600 px-4 py-3 hover:bg-gray-50 rounded-lg w-full"
          >
            {darkMode ? <Moon size={20} /> : <Sun size={20} />}
            <span>{darkMode ? 'Dark Mode' : 'Light Mode'}</span>
          </button>
        </div>


        {/* Export Section */}
        <div className="p-4 border-t">
          <div className="text-gray-500 mb-2">Export</div>
          <div className="flex space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded">
              <FileText size={20} className="text-gray-500" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded">
              <BarChart2 size={20} className="text-gray-500" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded">
              <Clock size={20} className="text-gray-500" />
            </button>
          </div>
          <div className="flex space-x-4 mt-2">
            <button className="p-2 hover:bg-gray-100 rounded">
              <Clock size={20} className="text-gray-500" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded">
              <X size={20} className="text-gray-500" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded">
              <BarChart2 size={20} className="text-gray-500" />
            </button>
          </div>
        </div>
      </aside>


      {/* Main Content */}
      <main className="ml-64 p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-medium">Start Jobs</h1>
          <p className="text-gray-500">Gerenciamento de perfis | 2024-2025</p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-3 gap-6">
          {/* Row 1 */}
          <div className="col-span-1 bg-white rounded-lg shadow-sm h-48"></div>
          <div className="col-span-1 bg-white rounded-lg shadow-sm h-48"></div>
          <div className="col-span-1 bg-white rounded-lg shadow-sm h-48"></div>
          
          {/* Row 2 */}
          <div className="col-span-2 bg-white rounded-lg shadow-sm h-48"></div>
          <div className="col-span-1 bg-white rounded-lg shadow-sm h-48"></div>
          
          {/* Row 3 */}
          <div className="col-span-1 bg-white rounded-lg shadow-sm h-48"></div>
          <div className="col-span-2 bg-white rounded-lg shadow-sm h-48"></div>
        </div>
      </main>
    </div>
  );
};

export default StartJobsHome;
