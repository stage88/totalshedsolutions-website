import React from 'react';
import useSiteMetadata from '../hooks/useSiteMetadata';
import ProfileImage from '../images/large-logo.png';

const Header: React.FC = () => {
  const { name } = useSiteMetadata();

  return (
    <header id='header'>
      <div className='inner'>
        <a href='/' className='image avatar'>
          <img src={ProfileImage} alt={name} />
        </a>        
      </div>
    </header>
  );
};

export default Header;
