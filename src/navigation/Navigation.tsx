import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard/Dashboard';

const Navigation = (): React.JSX.Element => (
  <Routes>
    <Route path='/' element={<Dashboard />} />
  </Routes>
);

export default Navigation;
