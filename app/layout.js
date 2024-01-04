// components/layout.js
import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="custom-layout">
      {children} {/* This renders the specific content wrapped in this layout */}
    </div>
  );
};

export default Layout;
