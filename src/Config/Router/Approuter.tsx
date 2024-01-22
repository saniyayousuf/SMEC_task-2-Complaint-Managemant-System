import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../../Screens/Authentication/Login';
import Signup from '../../Screens/Authentication/Signup';
import NotFound from '../../Screens/Not-Found';

import Protected from '../../Screens/Protected';
import AdminDashboard from '../../Screens/Admin/dashboard';
import StudentDashboard from '../../Screens/studentPanel/StudentDashboard';

export default function Approuter() {
    const useMUI = true;
    return (
        <Router>
            <>
                
                <Routes>
                  {/* Public Routes */}
                  {/* <Route path='/' element={<Login useMUI={useMUI} />}/> */}
                  <Route path='/login' element={<Login useMUI={useMUI} />}/>
                  <Route path='/signup' element={<Signup useMUI={useMUI} />}/>
                  <Route path='*' element={<NotFound />}/>
                  {/* Student Panel */}
                  <Route path='/' element={<Protected Screen={StudentDashboard} />}/>
                  <Route path='/student-dashboard/*' element={<Protected Screen={StudentDashboard} />}/>
                  <Route path='/admin-dashboard/*' element={<Protected Screen={AdminDashboard} />}/>

                </Routes>
            </>
        </Router>

    );
}