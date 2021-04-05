import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';

import catData from './catData';
import { NewsContext } from '../context/NewsContext';
import { ThemeContext } from '../context/ThemeContext';

const Header = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const { setNewsCategory } = useContext(NewsContext);
  let { pathname } = useLocation();
  const renderCategories = catData.map((category, index) => {
    return (
      <Link
        key={index}
        className={`mr-6 py-2 text-black no-underline capitalize cool-link ${
          pathname === '/' + category ? 'active' : ''
        }`}
        to={`/${category}`}
        onClick={() => setNewsCategory(category)}
      >
        {category}
      </Link>
    );
  });

  return (
    <div className='fixed flex justify-between items-center w-full px-4 py-4 bg-gray-500 shadow '>
      <div className='flex justify-between items-center '>
        {renderCategories}
      </div>
      <div>
        <button onClick={() => setDarkMode(!darkMode)}>Toggle Theme</button>
      </div>
    </div>
  );
};

export default Header;
