import React, { createContext, useState } from 'react';

export const NewsContext = createContext();

const NewsContextProvider = ({ children }) => {
  const [newsCategory, setNewsCategory] = useState('health');

  return (
    <NewsContext.Provider value={{ newsCategory, setNewsCategory }}>
      {children}
    </NewsContext.Provider>
  );
};

export default NewsContextProvider;
