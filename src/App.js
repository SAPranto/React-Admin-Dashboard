import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FiDivideSquare, FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Navbar, Footer, Sidebar } from './components';
import { Ecommerce, Orders, Employees, Stacked, Pyramid, Customers, Line, Area, Bar, Pie, Financial, ColorMapping} from './pages';
import './App.css';

const App = () => {
  return (
    <div>Admin Dashboard</div>          
  )
}

export default App