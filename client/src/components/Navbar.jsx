import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setUser } from '../app/slices/authSlice';
import toast from 'react-hot-toast';
import { CiLight, CiDark, CiMenuBurger } from 'react-icons/ci';

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const user = useSelector((state) => state.auth.user);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/auth/logout`, {
      credentials: 'include',
    });
    const data = await res.json();
    if (data.success) {
      dispatch(setUser(null));
      toast.success(data.message);
      navigate('/login');
    }
  };

  return (
    <header className={`shadow-lg fixed w-full z-50 top-0 transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white'}`}>
      <nav className="container mx-auto lg:px-6 px-4 py-3 flex justify-between items-center">
        <Link className="text-2xl font-bold" to="/">
          ShopCart
        </Link>
        <div className="flex items-center ml-auto">
          <div className="hidden md:flex flex-col md:flex-row gap-6 items-center">
            <Link className="hover:text-gray-300 transition-colors duration-200" to="/">
              Home
            </Link>
            <Link className="hover:text-gray-300 transition-colors duration-200" to="/products">
              Products
            </Link>
            {user ? (
              <>
                <Link className="hover:text-gray-300 transition-colors duration-200" to="/cart">
                  Cart
                </Link>
                <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200" onClick={handleLogout}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link className="hover:text-gray-300 transition-colors duration-200" to="/login">
                  Login
                </Link>
                <Link className="hover:text-gray-300 transition-colors duration-200" to="/register">
                  Register
                </Link>
              </>
            )}
          </div>
          <button className="px-2 py-1 text-xl" onClick={() => setIsDarkMode(!isDarkMode)}>
            {isDarkMode ? <CiLight size={25} className="text-yellow-400" /> : <CiDark size={25} className="text-gray-800" />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
