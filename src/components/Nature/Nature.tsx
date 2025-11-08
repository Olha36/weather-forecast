'use client';
/* eslint-disable @next/next/no-img-element */
import { Box, CircularProgress, Typography } from '@mui/material';
import { useNature } from '../../lib/hooks/useNature';
import '../../css/nature.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import {
  A11y,
  EffectCoverflow,
  Navigation,
  Pagination,
  Scrollbar,
} from 'swiper/modules';

export default function Nature() {
  const { data, loading, error } = useNature();

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Box
      sx={{
        width: '100%',
        height: '40vh',
        overflow: 'hidden',
        position: 'relative',
        backgroundColor: '#f5f5f5',
      }}
    >
      <Typography variant="subtitle1" style={{ textAlign: 'center' }}>
        Beautiful nature
      </Typography>

      <Box
        sx={{
          position: 'relative',
          width: '100%',
          // height: '90%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'grab',
        }}
      >
        <Swiper
          effect={'coverflow'}
          modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
          spaceBetween={50}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          className="mySwiper"
        >
          {data.map((img, index) => (
            <SwiperSlide key={index}>
              <img src={img.image} alt={`Slide ${index}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
}
