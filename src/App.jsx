import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Create from './componants/Create'
import { Route, Routes } from 'react-router-dom'
import Read from './componants/Read'
import Edit from './componants/Edit'

function App() {
 
return (
    <>
    <div className='container'>
      <Routes>
        <Route exact path='/' element={<Read/>}></Route>
        <Route exact path='/create' element={<Create/>}></Route>
        <Route exact path='/edit' element={<Edit/>}></Route>

      </Routes>
      
    </div>
    </>
  )
}

export default App
