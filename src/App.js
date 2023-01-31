import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from "react-toastify";     
import Layout from "./components/layout/Layout";
import Home from "./pages/main/Home";
import { GoogleOAuthProvider } from "@react-oauth/google";
//  Auth
import Forgot from "./pages/auth/Forgot";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Reset from "./pages/auth/Reset";
import Verify from "./pages/auth/Verify";
import LoginWithCode from './pages/auth/LoginWithCode';

import AppMain from "./AppMain";


function App() {

  useEffect(() => {
    document.title = "ResoPay"
  }, []);
  
  return (
    <BrowserRouter>
      <div className='app'>
      <ToastContainer />
      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <Routes>
        <Route path="/" element={<Layout> <Home /> </Layout> }  />
        <Route path="/login" element={<Login />} />
            <Route path="/loginWithCode/:email" element={<LoginWithCode />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot" element={<Forgot />} />
            <Route path="/resetPassword/:resetToken" element={<Reset />} />
            <Route
              path="/verify/:verificationToken"
              element={
                <Layout>
                  <Verify />
                </Layout>
              }
            />
            <Route path="/dashboard/*" element={<AppMain />} />
      </Routes>
      </GoogleOAuthProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
