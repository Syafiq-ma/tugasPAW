import React from 'react';

import { Routes, Route } from "react-router-dom";

import './App.css';

import Home from './page/Home';
import Queue from './page/Queue';
import Patients from './page/Patient'
import QueueAdd from './components/QueueAdd';
import PatientAdd from './components/PatientAdd';

function App(){
  return (
    <Routes>
      <Route path="/*" element={<Home/>}/>
      <Route path="/queue/*" element={<Queue/>}/>
      <Route path="/queue/add/*" element={<QueueAdd/>}/>
      <Route path="/patients/*" element={<Patients/>}/>
      <Route path="/patients/add/*" element={<PatientAdd/>}/>
    </Routes>
  )
}

export default App;
