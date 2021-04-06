import { useState, useEffect } from 'react';
import axios from 'axios';

const useNewsFetcher = (category) => {
  const [news, setNews] = useState([]);
  const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  useEffect(() => {
    const getNews = async () => {
      const res = await axios.get(
        `${proxyUrl}https://newsapi.org/v2/top-headlines`,

        {
          params: {
            category: category,
            country: 'us',
            apiKey: API_KEY,
          },
        }
      );

      setNews(res.data.articles);
    };
    getNews();
  }, [category, API_KEY]);

  return news;
};

export default useNewsFetcher;
