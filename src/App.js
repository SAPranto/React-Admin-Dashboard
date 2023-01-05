import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Footer, Sidebar } from './components';
import { Ecommerce, Orders, Customers, Viewproducts, AddProduct } from './pages';
import './App.css';
import { useStateContext } from './contexts/ContextProvider';

const App = () => {
  const { activeMenu } = useStateContext();

  return (
    <div>
      <Router>
        <div className="flex relative dark:bg-main-dark-bg">
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>
            <div>
              <Routes>
                {/* dashboard  */}
                <Route path="/" element={(<Ecommerce  />)} />
                <Route path="/ecommerce" element={(<Ecommerce />)} />

                {/* pages  */}
                <Route path="/orders" element={<Orders />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/view%20products" element={<Viewproducts />} />
                <Route path="/add%20product" element={<AddProduct />} />

              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
