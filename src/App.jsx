import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// Restoring original component paths
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';

// Restoring original page paths
import HomePage from './pages/HomePage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import OverviewPage from './pages/OverviewPage.jsx';
import VisionAndMissionPage from './pages/VisionAndMissionPage.jsx';
import LeadershipPage from './pages/LeadershipPage.jsx';
import FacilitiesPage from './pages/FacilitiesPage.jsx';
import AverageSchoolDayPage from './pages/AverageSchoolDayPage.jsx';
import SchoolDetailsPage from './pages/SchoolDetailsPage.jsx';
import ScholasticPage from './pages/ScholasticPage.jsx';
import CoScholasticPage from './pages/CoScholasticPage.jsx';
import KGMontessoriPage from './pages/KGMontessoriPage.jsx';
import Grades1To8Page from './pages/Grades1to8Page.jsx';
import MandatoryDisclosurePage from './pages/MandatoryDisclosurePage.jsx';
import GalleryPage from './pages/GalleryPage.jsx';
import CareersPage from './pages/CareersPage.jsx';
import BlogPage from './pages/BlogPage.jsx';
import OtherDocumentsPage from './pages/OtherDocumentsPage.jsx';
import ApplyOnlinePage from './pages/ApplyOnlinePage.jsx'; 

// Adding ParentLoginPage with the correct path, assuming it's in the 'pages' folder
import ParentLoginPage from './pages/ParentLoginPage.jsx'; 

import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* --- NEW APPLY ONLINE ROUTE --- */}
          <Route path="/apply-online" element={<ApplyOnlinePage />} />

          {/* --- NEW PARENT LOGIN ROUTE --- */}
          <Route path="/login" element={<ParentLoginPage />} />

          {/* About Us Routes */}
          <Route path="/about/overview" element={<OverviewPage />} />
          <Route path="/about/vision-mission" element={<VisionAndMissionPage />} />
          <Route path="/about/leadership" element={<LeadershipPage />} />
          <Route path="/about/facilities" element={<FacilitiesPage />} />
          <Route path="/about/school-day" element={<AverageSchoolDayPage />} />
          <Route path="/about/school-details" element={<SchoolDetailsPage />} />
          <Route path="/about" element={<OverviewPage />} />

          {/* Programme Routes */}
          <Route path="/programme/scholastic" element={<ScholasticPage />} />
          <Route path="/programme/co-scholastic" element={<CoScholasticPage />} />

          {/* Admission Routes */}
          <Route path="/admission" element={<KGMontessoriPage />} />
          <Route path="/admission/kg-montessori" element={<KGMontessoriPage />} />
          <Route path="/admission/grades" element={<Grades1To8Page />} />

          <Route path="/mandatory-disclosure" element={<MandatoryDisclosurePage />} />
          
          {/* --- NEW GALLERY ROUTE --- */}
          <Route path="/gallery" element={<GalleryPage />} />
          {/* --- END NEW GALLERY ROUTE --- */}
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/documents" element={<OtherDocumentsPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

