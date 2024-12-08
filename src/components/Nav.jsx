import React from "react";
import { Home, UserCircle2, UserPlus, Box, Globe, Brain, FileText, Sun, Moon, Clock, X, BarChart2 } from 'lucide-react';

export default function Navigation() {

  return(

    <Navigation>
    {/* Navigation */}
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
    </Navigation>
  )
}

