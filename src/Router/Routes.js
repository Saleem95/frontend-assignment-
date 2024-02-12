import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import { Navbar, Container } from 'react-bootstrap';
import Sidebar from '../Components/NavSidebar';
import Home from '../Pages/Home';
// import TablePage from '../Components/Table';

const Routing = () => {
  return (
    <Router>
      <Container fluid>
        {/* <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">React Sidebar Example</Navbar.Brand>
        </Navbar> */}
        <Container fluid className="mt-3">
          <div className="d-inline-flex">
            <div className="sidebar">
              <Sidebar />
            </div>
            <div className="container">
              <Routes>
                <Route path="/" exact element={<Home />} />
                {/* <Route path="/table" element={<TablePage />} /> */}
              </Routes>
            </div>
          </div>
        </Container>
      </Container>
    </Router>
  );
};

export default Routing;
