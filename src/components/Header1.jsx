
import React from "react";
import Logo from '../assets/logo2x.png';

export default function Header1() {
  return(
    <Header1>
      <div className="p-6">
          <div className="flex items-center space-x-2">
            <div className="text-blue-500 text-3xl">
              <img src={Logo} alt="Logo" width="50" height="50" />
            </div>
            <div className="text-blue-500 font-bold text-xl">Start Jobs</div>
          </div>
        </div>
    </Header1>
  )
}

        
