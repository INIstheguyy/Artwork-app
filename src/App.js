import './index.css'
import React from 'react';
import styles from './Styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Terms from './components/Terms';
import { FormspreeProvider } from '@formspree/react';


function App() {
  return (
    <FormspreeProvider project="{your-project-id}">
    <Router>
      <div className={`${styles.boxWidth}`}>
        <Routes>
          <Route path= '/' element={<Home/>}/>
          <Route path= '/services' element={<Services/>}/>
          <Route path= '/gallery' element={<Gallery/>}/>
          <Route path= '/contact' element={<Contact/>}/>
          <Route path= '/terms' element={<Terms/>}/>
        </Routes>
      </div>
    </Router>
    </FormspreeProvider>
  );
}

export default App;
