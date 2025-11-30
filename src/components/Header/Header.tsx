'use client';

import Avatar from '@mui/material/Avatar';
import { Button } from '../ui/Button';
import { Box } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../assets/logo.png';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import favouriteIcon from '../../assets/favourite.png';
import { useAuthStore } from '@/lib/utils/authStore';

export default function Header() {
  const router = useRouter();
  const { isLoggedIn, setIsLoggedIn } = useAuthStore();
  const [isLoggedInLocal, setIsLoggedInLocal] = useState(false);

  useEffect(() => {
    const cookies = document.cookie.split(';').map((c) => c.trim());
    const jwtCookie = cookies.find((c) => c.startsWith('jwt='));
    if (jwtCookie) {
      setIsLoggedInLocal(true);
      setIsLoggedIn(true);
    }
  }, [setIsLoggedIn]);

  const handleAuthClick = () => {
    if (isLoggedInLocal) {
      document.cookie = 'jwt=; path=/; max-age=0';
      setIsLoggedInLocal(false);
      setIsLoggedIn(false);
      router.push('/');
    } else {
      router.push('/auth/signin');
    }
  };
  const handleAddFavouritesClick = () => {
    if (isLoggedIn) {
      router.push('/favourite');
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
        padding: '33px 0 0',
      }}
    >
      <Link href="/">
        <Image src={logo} alt="logo" style={{ cursor: 'pointer' }} />
      </Link>
      <nav style={{ display: 'flex', gap: '20px' }}>
        <Link href="/about">Who we are</Link>
        <Link href="/contact">Contacts</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/faq">FAQ</Link>
      </nav>
      <Box style={{ display: 'flex', alignItems: 'center' }}>
        {isLoggedIn ? (
          <Link href={'/favourite'}>
            <Image
              src={favouriteIcon}
              width={30}
              height={30}
              alt="favourite icon"
            />
          </Link>
        ) : (
          <Image
            src={favouriteIcon}
            width={30}
            height={30}
            alt="favourite icon"
            onClick={handleAddFavouritesClick}
          />
        )}

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
          {isLoggedInLocal ? 'Log Out' : 'Sign In'}
        </Button>

        <Avatar
          alt="User Avatar"
          src={
            isLoggedInLocal
              ? '/static/images/avatar/2.jpg'
              : '/static/images/avatar/default.jpg'
          }
          style={{ width: '50px', height: '50px', cursor: 'pointer' }}
        />
      </Box>
    </div>
  );
}
