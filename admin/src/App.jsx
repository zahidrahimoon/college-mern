import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Outlet,
  Navigate,
} from 'react-router-dom';
import Home from './Pages/Home';
import Faculty from './Pages/Faculty.jsx';
import News from './Pages/News.jsx';
import StudentRegistrationData from './Pages/StudentRegistrationData.jsx';
import StudentTimeTable from './Pages/StudentTimeTable.jsx';
import Navbar from './components/Navbar.jsx'; 
import Sidebar from './components/Sidebar.jsx';
import Events from './Pages/Events.jsx';
import AuthPage from './Pages/AuthPage.jsx';
import { useAuth } from './context/AuthContext.jsx';
import Logout from './components/Logout.jsx';
import Officer from './Pages/Officer.jsx';

function App() { 

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* Public routes (authentication) */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Navigate to="/auth" />} /> {/* Redirect to login */}
          <Route path="/auth" element={<AuthPage />} />
        </Route>

        {/* Private routes (authenticated) */}
        <Route element={<PrivateLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/events" element={<Events />} />
          <Route path="/news" element={<News />} />
          <Route path="/studentregistrationdata" element={<StudentRegistrationData />} />
          <Route path="/studenttimetable" element={<StudentTimeTable />} />
          <Route path="/OfficerDetails" element={<Officer />} />
          <Route path="/logout" element={<Logout />} />
        </Route>
      </>
    )
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

// Layout without Navbar and Sidebar for public routes
const PublicLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

// Layout with Navbar and Sidebar for private routes
// App.js (Part of the same file)
const PrivateLayout = () => {
  const { isAuthenticated } = useAuth(); 

  if (isAuthenticated === null) {
    // Show a loading screen while authentication is being checked
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/auth" />; // Redirect unauthenticated users to login
  }

  return (
    <>
      <Navbar />
      <Sidebar />
      <div>
        <Outlet />
      </div>
    </>
  );
};



