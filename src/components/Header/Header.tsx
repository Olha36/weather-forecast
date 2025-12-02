// 'use client';

// import { Button } from '../ui/Button';
// import { Box } from '@mui/material';
// import Image from 'next/image';
// import Link from 'next/link';
// import logo from '../../assets/logo.png';
// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';
// import favouriteIcon from '../../assets/favourite.png';
// import { useAuthStore } from '@/lib/utils/authStore';

// export default function Header() {
//   const router = useRouter();
//   const { isLoggedIn, setIsLoggedIn } = useAuthStore();
//   const [isLoggedInLocal, setIsLoggedInLocal] = useState(false);

//   useEffect(() => {
//     const cookies = document.cookie.split(';').map((c) => c.trim());
//     const jwtCookie = cookies.find((c) => c.startsWith('jwt='));
//     if (jwtCookie) {
//       setIsLoggedInLocal(true);
//       setIsLoggedIn(true);
//     }
//   }, [setIsLoggedIn]);

//   const handleAuthClick = () => {
//     if (isLoggedInLocal) {
//       document.cookie = 'jwt=; path=/; max-age=0';
//       setIsLoggedInLocal(false);
//       setIsLoggedIn(false);
//       router.push('/');
//     } else {
//       router.push('/auth/signin');
//     }
//   };
//   const handleAddFavouritesClick = () => {
//     if (isLoggedIn) {
//       router.push('/favourite');
//     } else {
//       router.push('/auth/signin');
//     }
//   };

//   return (
//     <div
//       className="header-container"
//       style={{
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'space-around',
//         padding: '33px 0 0',
//       }}
//     >
//       <Link href="/">
//         <Image src={logo} alt="logo" style={{ cursor: 'pointer' }} />
//       </Link>
//       <nav style={{ display: 'flex', gap: '20px' }}>
//         <Link href="/about">Who we are</Link>
//         <Link href="/contact">Contacts</Link>
//         <Link href="/menu">Menu</Link>
//         <Link href="/faq">FAQ</Link>
//       </nav>
//       <Box style={{ display: 'flex', alignItems: 'center' }}>
//         {isLoggedIn ? (
//           <Link href={'/favourite'}>
//             <Image
//               src={favouriteIcon}
//               width={30}
//               height={30}
//               alt="favourite icon"
//             />
//           </Link>
//         ) : (
//           <Image
//             src={favouriteIcon}
//             width={30}
//             height={30}
//             alt="favourite icon"
//             onClick={handleAddFavouritesClick}
//           />
//         )}

//         <Button
//           size="default"
//           variant="default"
//           style={{
//             backgroundColor: '#FFB36C',
//             color: '#000000',
//             margin: '0 27px',
//           }}
//           onClick={handleAuthClick}
//         >
//           {isLoggedInLocal ? 'Log Out' : 'Sign In'}
//         </Button>

       
//       </Box>
//     </div>
//   );
// }


'use client';

import { Button } from '../ui/Button';
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  useMediaQuery,
  Box,
  Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import favouriteIcon from '../../assets/favourite.png';
import logo from '../../assets/logo.png';
import { useAuthStore } from '@/lib/utils/authStore';

export default function Header() {
  const router = useRouter();
  const { isLoggedIn, setIsLoggedIn } = useAuthStore();
  const [isLoggedInLocal, setIsLoggedInLocal] = useState(false);
  const isMobile = useMediaQuery('(max-width:425px)');

  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const cookies = document.cookie.split(';').map((c) => c.trim());
    const jwt = cookies.find((c) => c.startsWith('jwt='));
    if (jwt) {
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
    <>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            paddingTop: '20px',
          }}
        >
          {/* Logo */}
          <Link href="/">
            <Image src={logo} alt="logo" style={{ cursor: 'pointer' }} />
          </Link>

          {/* Desktop Navigation */}
          {!isMobile && (
            <Box sx={{ display: 'flex', gap: '20px' }}>
              <Link href="/about">Who we are</Link>
              <Link href="/contact">Contacts</Link>
              <Link href="/menu">Menu</Link>
              <Link href="/faq">FAQ</Link>
            </Box>
          )}

          {/* Right side (desktop) */}
          {!isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              {isLoggedIn ? (
                <Link href={'/favourite'}>
                  <Image
                    src={favouriteIcon}
                    width={30}
                    height={30}
                    alt="favourite"
                  />
                </Link>
              ) : (
                <Image
                  src={favouriteIcon}
                  width={30}
                  height={30}
                  alt="favourite"
                  onClick={handleAddFavouritesClick}
                  style={{ cursor: 'pointer' }}
                />
              )}

              <Button
                size="default"
                variant="default"
                style={{
                  backgroundColor: '#FFB36C',
                  color: '#000000',
                  margin: 0
                }}
                onClick={handleAuthClick}
              >
                {isLoggedInLocal ? 'Log Out' : 'Sign In'}
              </Button>
            </Box>
          )}

          {/* MOBILE BURGER ICON */}
          {isMobile && (
            <IconButton onClick={() => setDrawerOpen(true)}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box sx={{ width: 250, padding: 2 }}>
          <List>
            <ListItem disablePadding>
              <ListItemButton component={Link} href="/about">
                Who we are
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} href="/contact">
                Contacts
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} href="/menu">
                Menu
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} href="/faq">
                FAQ
              </ListItemButton>
            </ListItem>

            <Divider sx={{ my: 2 }} />

            {/* Favourites */}
            <ListItem disablePadding>
              <ListItemButton onClick={handleAddFavouritesClick}>
                Favourites
              </ListItemButton>
            </ListItem>

            {/* Sign in / Logout */}
            <ListItem disablePadding>
              <ListItemButton onClick={handleAuthClick}>
                {isLoggedInLocal ? 'Log Out' : 'Sign In'}
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
}
