import React from 'react';
import { Navbar, Button, Nav } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import '../Driver/DriverCSS/DriverDashboardHeader.css'

const DriverDashboardHeader = ({ isLoggedIn, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  return (
    <Navbar className="navbar" expand="lg" fixed="top">
      <Navbar.Brand href="#home">
        <img
          src={`${process.env.PUBLIC_URL}/logo.png`} // Updated to use the logo image
          alt="Club Curry Logo"
          height="40" // Adjust the height according to your needs
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        
        <div className="buttons-container">
          {isLoggedIn && (
            <Button variant="outline-light" onClick={handleLogout}>
              Logout
            </Button>
          )}
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default DriverDashboardHeader;
