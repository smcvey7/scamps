import './App.css';
import React, {useEffect, useContext} from 'react';
import {Route, Routes, useNavigate} from "react-router-dom";
import Home from './Home';
import NavBar from './NavBar';
import LoginSignUp from './LoginSignUp';
import Contact from './Contact';
import Welcome from './Welcome';
import Register from './Register';
import Sports from './Sports';
import Discovery from './Discovery';
import Registrations from './Registrations';
import MessageList from './MessageList';
import CamperRegistrations from './CamperRegistrations';
import MyContext from './MyContext';

function App() {
  const {camper, setCamper} = useContext(MyContext)
  const {setActivities} = useContext(MyContext)
  const navigate = useNavigate()

  // auto-login
  useEffect(()=>{
    const path = window.location.pathname
    fetch('/me')
    .then((r)=>{
      if (r.ok){
        r.json()
        .then((user)=>{
          setCamper(user)
          navigate(path)
        })
      }
    })
  }, [navigate, setCamper])

  // fetch activities
  useEffect(()=>{
    fetch('/activities')
    .then((r)=>r.json())
    .then((data)=>setActivities(data))
  }, [camper, setActivities])

  return (
    <div id='app'>
      <div id='heading' className='flexContainer horizontal spaceBetween'>
        <div id='title' className='flexContainer vertical'>
          <h1 id='siteName' className='headerMargin'>SCAMPS</h1>
          <h3 className='headerMargin'>Salem Camps</h3>
        </div>
        <Welcome/>
      </div>
      <NavBar />
      <div id='body'>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/discovery" element={<Discovery/>} />
        <Route path="/sports" element={<Sports/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/login" element={<LoginSignUp/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/registrations' element={<Registrations/>} />
        <Route path='/message-list' element={<MessageList/>} />
        <Route path='/camper-registrations' element={<CamperRegistrations/>} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
