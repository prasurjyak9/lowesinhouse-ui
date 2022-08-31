import React from 'react';
import { Routes, Route } from 'react-router-dom'
import EditableCanvas from './components/Editor/Editor';
import NewsLetter from './components/Newsletter/Newsletter';
import ReaderFeed from './components/ReaderFeed/ReaderFeed';
import { ThemeProvider } from '@backyard/react'
import { GlobalStyles } from './Globals'
import Navbar from './components/Navbar/Navbar';
import Pendingreviews from './components/PendingReviews/pendingreviews';

import Status from './components/Status/status';


import Footer from './components/Footer/Footer';

import ReviewerLandningPage from './components/ReviewerLandingPage/ReviewerLandingPage'
import LoginForm from './components/LoginForm/LoginForm';
function App() {
  return (
    <div>

      <ThemeProvider theme="light" font="fellix">

        <GlobalStyles />
        <Navbar />
        <Routes>
          <Route path="/designer" element={<EditableCanvas />}></Route>
          <Route path="/" element={<ReaderFeed />}></Route>
          <Route path='/Review' element={<ReviewerLandningPage />}></Route>
          <Route path="/status" element={<Status />}></Route>
          <Route path="/pendingreviews" element={<Pendingreviews />}></Route>
          <Route path="/login" element={<LoginForm />}></Route>
        </Routes>

      </ThemeProvider>
    </div>
  )
}

export default App;
