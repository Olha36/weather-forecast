'use client';
import Avatar from '@mui/material/Avatar';
import { Button } from '../ui/Button';

import { Box } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../assets/logo.png';

export default function Header() {
  return (
    <>
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
          <a href="#">Who we are</a>
          <a href="#" style={{ margin: '0 42px' }}>
            Contacts
          </a>
          <a href="#">Menu</a>
        </nav>
        <Box style={{ display: 'flex', alignItems: 'center' }}>
          <Link href="/auth/signup">
            <Button
              size="default"
              variant="default"
              style={{
                backgroundColor: '#FFB36C',
                color: '#000000',
                margin: ' 0 27px',
              }}
            >
              Sign Up
            </Button>
          </Link>

          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/2.jpg"
            style={{ width: '50px', height: '50px' }}
          />
        </Box>
      </div>
    </>
  );
}
