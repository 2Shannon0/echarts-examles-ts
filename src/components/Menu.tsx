import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const Menu = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
        <Nav className="m-auto">
          <NavLink
            className={({ isActive }) => (isActive ? 'activeLink' : 'link')}
            to="."
            end
          >
            Vertical Bars
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? 'activeLink' : 'link')}
            to="HorizontalBars"
          >
            Horizontal Bars
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? 'activeLink' : 'link')}
            to="LineCharts"
          >
            Line Charts
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default Menu;
