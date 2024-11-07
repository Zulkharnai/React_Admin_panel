import './App.css';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
import { Route, Routes, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from './ShareComponents/Sidebar';
import NavbarComponent from './ShareComponents/NavbarComponent';
import { useState } from 'react';
import Slider from './Components/Slider';
import Customer from './Components/Customer';
import Agency from './Components/Agency';
import CustomerBilling from './Components/CustomerBilling';
import Product from './Components/Product';
import Lead from './Components/Lead';
import Review from './Components/Review';
import BillReport from './Components/BillReport';
import LeadReport from './Components/LeadReport';
import CustomerReport from './Components/CustomerReport';
import ProductReport from './Components/ProductReport';
import Setting from './Components/Setting';
import Notification from './Components/Notification';
import Profile from './Components/Profile';
import ReminderCustomer from './Components/ReminderCustomer';
import AgencyBill from './Components/AgencyBill';
import AgencyReturnBill from './Components/AgencyReturnBill';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Function to handle login (you can enhance this with actual logic)
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false)
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Container fluid style={{ height: '100vh' ,backgroundColor: '#f8f9fa'}}>
      <Row style={{ height: '100%' }}>
        {isAuthenticated && <Sidebar onLogout={handleLogout} toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />}

        <Col xs={12} md={isAuthenticated ? isSidebarOpen ? 10 : 11 : 12} style={{ padding: '0' }}>
          {isAuthenticated && <NavbarComponent onLogout={handleLogout} />}

          <div className='no-scroll' style={{
            overflowX: 'hidden',   // Hide horizontal scrollbar
            overflowY: 'auto',     // Enable vertical scrolling when necessary
            backgroundColor: '#f8f9fa',  // Background color
            // height: '660px'
          }}>
            <Routes>
              <Route path="/" element={!isAuthenticated ? <Login onLogin={handleLogin} /> : <Navigate to="/Dashboard" />} />
              <Route path="/Dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />} />
              <Route path="/Slider" element={isAuthenticated ? <Slider /> : <Navigate to="/" />} />
              <Route path="/Customer" element={isAuthenticated ? <Customer /> : <Navigate to="/" />} />
              <Route path="/CustomerReminder" element={isAuthenticated ? <ReminderCustomer /> : <Navigate to="/" />} />
              <Route path="/Agency" element={isAuthenticated ? <Agency /> : <Navigate to="/" />} />
              <Route path="/CustomerBill" element={isAuthenticated ? <CustomerBilling /> : <Navigate to="/" />} />
              <Route path="/AgencyBill" element={isAuthenticated ? <AgencyBill /> : <Navigate to="/" />} />
              <Route path="/AgencyReturnBill" element={isAuthenticated ? <AgencyReturnBill /> : <Navigate to="/" />} />
              <Route path="/Product" element={isAuthenticated ? <Product /> : <Navigate to="/" />} />
              <Route path="/Lead" element={isAuthenticated ? <Lead /> : <Navigate to="/" />} />
              <Route path="/Review" element={isAuthenticated ? <Review /> : <Navigate to="/" />} />
              <Route path="/BillReport" element={isAuthenticated ? <BillReport /> : <Navigate to="/" />} />
              <Route path="/LeadReport" element={isAuthenticated ? <LeadReport /> : <Navigate to="/" />} />
              <Route path="/ProductReport" element={isAuthenticated ? <ProductReport /> : <Navigate to="/" />} />
              <Route path="/CustomerReport" element={isAuthenticated ? <CustomerReport /> : <Navigate to="/" />} />
              <Route path="/Setting" element={isAuthenticated ? <Setting /> : <Navigate to="/" />} />
              <Route path="/Notification" element={isAuthenticated ? <Notification /> : <Navigate to="/" />} />
              <Route path="/Profile" element={isAuthenticated ? <Profile /> : <Navigate to="/" />} />
            </Routes>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
