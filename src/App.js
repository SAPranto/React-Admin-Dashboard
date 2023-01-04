import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FiDivideSuare, FiSettings } from 'react-icons/fi';
import { TooltipComponent }from '@syncfusion/ej2-react-popups';
import { Navbar, Footer, Sidebar } from './components';
import { Ecommerce, Orders, Employees, Stacked, Pyramid, Customers, Line, Area, Bar, Pie, Financial, ColorMapping} from './pages';
import './App.css';


const App = () => {
  return (
    <Router>
    <Sidebar></Sidebar>  
    <Routes>
    {/* dashboard  */}
    <Route path="/" element={(<Ecommerce />)} />
    <Route path="/ecommerce" element={(<Ecommerce />)} />

    {/* pages  */}
    <Route path="/orders" element={<Orders />} />
    <Route path="/employees" element={<Employees />} />
    <Route path="/customers" element={<Customers />} />

    {/* charts  */}
    <Route path="/line" element={<Line />} />
    <Route path="/area" element={<Area />} />
    <Route path="/bar" element={<Bar />} />
    <Route path="/pie" element={<Pie />} />
    <Route path="/financial" element={<Financial />} />
    <Route path="/color-mapping" element={<ColorMapping />} />
    <Route path="/pyramid" element={<Pyramid />} />
    <Route path="/stacked" element={<Stacked />} />

  </Routes>        
  </Router>
  )
}
export default App