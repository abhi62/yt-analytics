import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
} from 'recharts';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Graph = ({ data, headTitle, headDateS, headDateE, id }) => {
  return (
    <div>
      <p className='pHead'>{headTitle}</p>

      <p className='pHead'>
        {headDateS} TO {headDateE}
      </p>

      <Card
        elevation={10}
        sx={{
          minWidth: 175,
          display: 'flex',
          flexDirection: 'column',
          p: 1,
          m: 0.5,
          borderRadius: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <p>{headTitle}</p>
        {data ? (
          <AreaChart
            width={400}
            height={250}
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
                <stop offset='5%' stopColor='#8884d8' stopOpacity={0.8} />
                <stop offset='95%' stopColor='#8884d8' stopOpacity={0} />
              </linearGradient>
              <linearGradient id='colorPv' x1='0' y1='0' x2='0' y2='1'>
                <stop offset='5%' stopColor='#82ca9d' stopOpacity={0.8} />
                <stop offset='95%' stopColor='#82ca9d' stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey='date' />
            <YAxis type='number' domain={[0, 10]} />
            <CartesianGrid strokeDasharray='3 3' />
            <Tooltip />
            <Area
              type='monotone'
              dataKey='value1'
              stroke='#8884d8'
              fillOpacity={1}
              fill='url(#colorUv)'
            />
            <Area
              type='monotone'
              dataKey='value2'
              stroke='#82ca9d'
              fillOpacity={1}
              fill='url(#colorPv)'
            />
          </AreaChart>
        ) : (
          <div className={{ backgroundColor: 'black' }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img src='./images/tail-spin.svg' alt='tailspin' />
            </Box>
          </div>
        )}
        {id === 'audience' && (
          <Box
            sx={{
              minWidth: 175,
              display: 'flex',
              flexDirection: 'row',
              p: 1,
              m: 0.5,
              borderRadius: 1,
              justifyContent: 'center',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <Typography color='#8884d8'>Subscribed </Typography>
            <Typography color='#82ca9d'>Non Subscribed</Typography>
          </Box>
        )}
      </Card>
    </div>
  );
};

export default Graph;
