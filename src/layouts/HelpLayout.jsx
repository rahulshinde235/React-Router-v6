import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function HelpLayout() {
  return (
    <div className="help-layout">
      <h2>Website Help</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea molestias, saepe doloremque vel doloribus soluta amet. Porro, blanditiis commodi rerum corporis a laudantium perspiciatis magnam eligendi suscipit explicabo deserunt soluta!</p>
      <nav>
        <NavLink to="faq">View the FAQ</NavLink>
        <NavLink to="contact">Contact Us</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
