'use client';
import { Box, Typography } from '@mui/material';
import footerLogo from '../../assets/logo.png';
import facebook from '../../assets/socials/facebook.svg';
import instagram from '../../assets/socials/instagram.svg';
import whatsapp from '../../assets/socials/whatsapp.svg';
import { styled } from '@mui/material/styles';
import { Link } from '@mui/material';
import Image from 'next/image';

const Img = styled(Image)(() => ({
  cursor: 'pointer',
}));
export default function Footer() {
  return (
    <Box
      style={{
        backgroundColor: '#FFB36C',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: '50px 0',
        marginTop: '20px',
      }}
    >
      <Img src={footerLogo} alt="footer logo" />
      <Box>
        <Typography>Address</Typography>
        <Typography>
          Svobody str. 35 <br /> Kyiv <br /> Ukraine
        </Typography>
      </Box>
      <Box>
        <Typography>Contact us</Typography>
        <Box>
          <Link
            href="https://www.instagram.com/o_l_h_a_maria/?locale=en"
            target="_blank"
          >
            <Image src={instagram} alt="instagram" />
          </Link>

          <Link target="_blank" href="https://www.facebook.com/olhakucheruk">
            <Image src={facebook} alt="facebook" />
          </Link>

          <Link target="_blank" href="https://wa.me/+380976089680">
            <Image src={whatsapp} alt="whatsapp" />
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
