import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const ArticleCards = ({ articles }) => {
  const { darkMode } = useContext(ThemeContext);

  const articleData = articles.map((article, index) => {
    const {
      author,
      description,
      publishedAt,
      source,
      title,
      url,
      urlToImage,
    } = article;

    return (
      <div
        className={`${darkMode ? 'dark' : ''} p-4 md:w-1/3 dark:text-white`}
        key={index}
      >
        <div className='h-full border-2 border-gray-400 rounded-lg overflow-hidden bg-white dark:bg-gray-800 shadow-lg'>
          <img
            className='w-full object-cover object-center'
            src={urlToImage}
            alt={title}
          />
          <div className='p-6'>
            <h2 className='tracking-widest text-xs title-font font-medium mb-1  dark:text-white'>
              {publishedAt}
            </h2>
            <a className='normal-text' href={url}>
              <h1 className='title-font text-lg font-medium mb-3 text-gray-700 dark:text-white dark:hover:text-blue-600'>
                {title}
              </h1>
            </a>
            <p className='leading-relaxed mb-3 dark:text-white'>
              {description}
            </p>
            <div className='text-right dark:text-white'>
              --{author} from{' '}
              <div>
                <em>{source.name}.</em>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return <div className='flex flex-wrap justify-between'>{articleData}</div>;
};

export default ArticleCards;
