import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import { Navbar, Container } from 'react-bootstrap';
import Sidebar from '../Components/NavSidebar';
import Home from '../Pages/Home';

const Routing = () => {
  return (
    <Router>
      <Container fluid>
        <Container fluid className="mt-3">
          <div className="d-inline-flex">
            <div className="sidebar">
              <Sidebar />
            </div>
            <div className="container">
              <Routes>
                <Route path="/" exact element={<Home />} />
              </Routes>
            </div>
          </div>
        </Container>
      </Container>
    </Router>
  );
};

export default Routing;
