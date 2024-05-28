import React from 'react';
import './App.css';
import NavBar from "./components/nav-bar/NavBar";
import Profile from "./components/profile/Profile";
import Content from "./components/content/Content";

function App() {
  return (
      <div className="App">
          <div className="mb-4">
              <NavBar/>
          </div>
          <div className="flex justify-center items-center">
              <div className="grid grid-cols-12 gap-4 w-11/12">
                  <Profile/>
                  <Content/>
              </div>
          </div>
      </div>
  );
}

export default App;
