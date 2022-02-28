import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Header = ({
  profileImage,
  channelName,
  sCount,
  vCount,
  startD,
  handlerChnage,
  subscribersCount,
  revenue,
  views,
  bgImage,
}) => {
  return (
    <div className='header__container'>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          p: 1,

          borderRadius: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Box
          sx={{
            width: '111px',
            textAlign: 'center',
          }}
        >
          <img src={profileImage} alt='profile' />
        </Box>
        <Box>
          <Box>
            <Typography
              sx={{
                textAlign: 'left',
              }}
            >
              {channelName}
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',

              borderRadius: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography>
              <b>{sCount}</b> Subscribers
            </Typography>
            <Typography
              sx={{
                p: 1,
              }}
            >
              <b>{vCount}</b> Videos
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          p: 1,
          m: 2,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography>Summary</Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            p: 1,
            m: 2,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <select value={startD} onChange={handlerChnage}>
            <option value='2021-01-01'>2021-01-01</option>
            <option value='2021-02-01'>2021-02-01</option>
            <option value='2021-02-10'>2021-02-10</option>
          </select>
        </Box>
      </Box>
      <Card elevation={10} sx={{ minWidth: 275 }}>
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'row',
            p: 1,
            m: 2,
            borderRadius: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box>
            <Typography
              sx={{ fontSize: 14, padding: 1 }}
              color='text.secondary'
              gutterBottom
            >
              Subscribers
            </Typography>
            <Typography
              sx={{ fontSize: 14, padding: 1 }}
              color='text.secondary'
              gutterBottom
            >
              <b>{subscribersCount}</b>
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{ fontSize: 14, padding: 1 }}
              color='text.secondary'
              gutterBottom
            >
              Views
            </Typography>
            <Typography
              sx={{ fontSize: 14, padding: 1 }}
              color='text.secondary'
              gutterBottom
            >
              <b>{views}</b>
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{ fontSize: 14, padding: 1 }}
              color='text.secondary'
              gutterBottom
            >
              Revenue
            </Typography>
            <Typography
              sx={{ fontSize: 14, padding: 1 }}
              color='text.secondary'
              gutterBottom
            >
              <b>₹{revenue}lac</b>
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
};

export default Header;
