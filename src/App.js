import React from 'react';
import { Routes, Route } from 'react-router-dom'
import EditableCanvas from './components/Editor/Editor';
import NewsLetter from './components/Newsletter/Newsletter';
import ReaderFeed from './ReaderFeed/ReaderFeed';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<EditableCanvas />}></Route>
        <Route path="/read/" element={<NewsLetter />}></Route>
        <Route path="/feed/" element={<ReaderFeed />}></Route>
      </Routes>
    </div>
  )
}

export default App;