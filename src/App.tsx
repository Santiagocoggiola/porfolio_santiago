import React from 'react';
import './App.css';
import Profile from "./components/profile/Profile";
import Content from "./components/content/Content";
import DarkThemeSwitch from "./components/DarkTheme/DarkThemeSwitch";

function App() {
  return (
      <div className="App dark:bg-gray-800">
          <div className="flex justify-center items-center p-8">
              <div className="grid grid-cols-12 gap-4 w-11/12">
                  <Profile/>
                  <Content/>
                  <DarkThemeSwitch className="fixed bottom-4 right-4" />
              </div>
          </div>

      </div>
  );
}

export default App;
