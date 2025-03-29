import Link from 'next/link';
import React from 'react';
import useSiteMetadata from '../hooks/useSiteMetadata';

const Header: React.FC = () => {
  const { name } = useSiteMetadata();

  return (
    <header id='header'>
      <div className='inner'>
        <Link href='/' className='image avatar'>
          <img src='/images/large-logo.png' alt={name} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
