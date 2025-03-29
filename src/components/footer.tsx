import React from 'react';
import useSiteMetadata from '../hooks/useSiteMetadata';

const Footer: React.FC = () => {
  const { title, description, author, sourceUrl, authorUrl } =
    useSiteMetadata();

  return (
    <div id='footer'>
      <div className='inner'>
        <ul className='copyright'>
          {description.split('. ').map((item, index) => (
            <li key={index}>
              {item}
              {item.endsWith('.') ? '' : '.'}
            </li>
          ))}
          <li>
            &copy; {new Date().getFullYear()} by {title}
          </li>
          <li>
            <a href={sourceUrl}>Theme</a> by <a href={authorUrl}>{author}</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
