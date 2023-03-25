// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import FavoriteSites from "./components/FavoriteSites"
import Gallery from "./components/Gallery"
import Profile from "./components/Profile"


import StateAssignmentOne from "./components/StateAssignmentOne"
import StateAssignmentTwo from "./components/StateAssignmentTwo"
function App() {

  return (
    <div className="App">
      <FavoriteSites/>
      <Gallery/>
      <Profile/>

      <StateAssignmentOne/>
      <StateAssignmentTwo/>
    </div>
  )
}

export default App
