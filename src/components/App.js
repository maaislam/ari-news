import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import TopNews from './categories/TopNews';
import catData from './catData';
import ThemeContextProvider from '../context/ThemeContext';
import NewsContextProvider from '../context/NewsContext';
const App = () => {
  const renderRoute = catData.map((route, index) => {
    return <Route key={index} path={`/${route}`} exact component={TopNews} />;
  });

  return (
    <NewsContextProvider>
      <ThemeContextProvider>
        <BrowserRouter>
          <Header />
          {renderRoute}
        </BrowserRouter>
      </ThemeContextProvider>
    </NewsContextProvider>
  );
};

export default App;
