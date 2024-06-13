import React from 'react';
import RandomGif from './Components/RandomGif';
import TypeGif from './Components/TypeGif';
import './App.css'

function App() {

  return (
    <div className='flex flex-col items-center bg-black w-full h-screen font-mono'>
     <h1 className=' flex bg-white w-4/5 p-2 justify-center text-4xl m-4'>RANDOM GIFs</h1>
     <RandomGif/>
     <TypeGif/>
    </div>
  )
}

export default App
