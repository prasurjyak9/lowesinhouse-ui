import React from 'react';
import { Routes, Route } from 'react-router-dom'
import EditableCanvas from './components/Editor/Editor';
import Reader from './components/Reader/Reader';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<EditableCanvas />}></Route>
        <Route path="/read/" element={<Reader />}></Route>
      </Routes>
    </div>
  )
}

export default App;