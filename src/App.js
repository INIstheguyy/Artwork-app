import './index.css'
import React from 'react';
import styles from './Styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <Router>
       <div className={`${styles.boxWidth}`}>
        <Routes>
          <Route path= '/' element={<Home/>}/>
        </Routes>
       </div>
    </Router>
  );
}

export default App;
