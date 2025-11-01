'use client';
import Avatar from '@mui/material/Avatar';
import { Button } from '../ui/Button';
import { Box } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../assets/logo.png';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const cookies = document.cookie.split(';').map((c) => c.trim());
    const jwtCookie = cookies.find((c) => c.startsWith('jwt='));
    if (jwtCookie) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleAuthClick = () => {
    if (isLoggedIn) {
      document.cookie = 'jwt=; path=/; max-age=0';
      setIsLoggedIn(false);
      router.push('/');
    } else {
      router.push('/auth/signin');
    }
  };

  return (
    <div
      className="header-container"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '33px',
      }}
    >
      <Link href="/">
        <Image src={logo} alt="logo" style={{ cursor: 'pointer' }} />
      </Link>
      <nav>
        <Link href="/about">Who we are</Link>
        <Link href="/contact" style={{ margin: '0 42px' }}>
          Contacts
        </Link>
        <Link href="/menu">Menu</Link>
      </nav>
      <Box style={{ display: 'flex', alignItems: 'center' }}>
        <Button
          size="default"
          variant="default"
          style={{
            backgroundColor: '#FFB36C',
            color: '#000000',
            margin: '0 27px',
          }}
          onClick={handleAuthClick}
        >
          {isLoggedIn ? 'Log Out' : 'Sign In'}
        </Button>

        <Avatar
          alt="User Avatar"
          src={
            isLoggedIn
              ? '/static/images/avatar/2.jpg'
              : '/static/images/avatar/default.jpg'
          }
          style={{ width: '50px', height: '50px' }}
        />
      </Box>
    </div>
  );
}
