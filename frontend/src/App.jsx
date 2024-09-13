// import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header.jsx';
import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Outlet,
} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import FacultyAndStaff from './Pages/FacultyAndStaff';
import Academics from './Pages/Academics';
import Galleries from './Pages/Galleries';
import NewsAndUpdates from './Pages/NewsAndUpdates';
import ContactUs from './Pages/ContactUs';
import RegistrationForm from './Pages/RegistrationForm.jsx';
import SamplePaper from './Pages/SamplePaper.jsx';
import Uniform from './Pages/Uniform.jsx';
import StudentTimeTable from './Pages/StudentTimeTable.jsx';
import AdmissionProcess from './Pages/AdmissionProcess.jsx';
import MiniNavbar from './components/Mininavbar.jsx';
// import Loader from './components/Loader.jsx'; 

function App() {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 500); 

  //   return () => clearTimeout(timer);
  // }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/FacultyAndStaff" element={<FacultyAndStaff />} />
        <Route path="/Academics" element={<Academics />} />
        <Route path="/NewsAndUpdates" element={<NewsAndUpdates />} />
        <Route path="/Galleries" element={<Galleries />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/RegistrationForm" element={<RegistrationForm />} />
        <Route path="/SamplePaper" element={<SamplePaper />} />
        <Route path="/admissionProcess" element={<AdmissionProcess />} />
        <Route path="/uniform" element={<Uniform />} />
        <Route path="/StudentTimeTable" element={<StudentTimeTable />} />
      </Route>
    )
  );

  return (
    <div>
      {/* {loading ? (
        <Loader />
      ) : ( */}
        <RouterProvider router={router} />
    </div>
  );
}

export default App;

const Root = () => {
  return (
    <>
      <div>
        <Header />
        <MiniNavbar />
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};
