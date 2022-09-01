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
import DesignerDashboard from './components/DesignerDashboard/DesignerDashboard';
import AuthorityDetailsForm from './components/AuthorityDetailsForm/AuthorityDetailsForm';
import Review from './components/Review/Review';
import ApproverPage from './components/ApproverPage/ApproverPage';


function App() {
  return (
    <div>

      <ThemeProvider theme="light" font="fellix">
        <GlobalStyles />
        <Navbar />
        <Routes>
          <Route path="/designer" element={<DesignerDashboard />}></Route>
          <Route path="/designer/authoritydetails/design" element={<EditableCanvas />}></Route>
          <Route path="/designer/authoritydetails" element={<AuthorityDetailsForm />}></Route>
          <Route path="/" element={<ReaderFeed />}></Route>
          <Route path='/Review' element={<ReviewerLandningPage />}></Route>
          <Route path="/designer/status" element={<Status />}></Route>
          <Route path="/pendingreviews" element={<Pendingreviews />}></Route>
          <Route path="/login" element={<LoginForm />}></Route>
          <Route path="/approver" element={<ApproverPage />}></Route>
          <Route path="/approver/review" element={<Review />}></Route>
        </Routes>
      </ThemeProvider>
    </div>
  )
}

export default App;
