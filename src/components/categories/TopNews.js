import React, { useContext } from 'react';
import { NewsContext } from '../../context/NewsContext';

import useNewsFetcher from '../../Hooks/useNewsFetcher';
import ArticleCards from './ArticleCards';

const TopNews = () => {
  const { newsCategory } = useContext(NewsContext);

  const topNews = useNewsFetcher(newsCategory);

  return (
    <div className='pt-16'>
      <ArticleCards articles={topNews} />
    </div>
  );
};
export default TopNews;
