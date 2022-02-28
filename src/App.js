import { useState, useEffect } from 'react';
import './ap.css';

import Header from './components/Header';
import Graph from './components/Graph';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const App = () => {
  const [profileImage, setProfileImage] = useState('');
  const [channelName, setChannelName] = useState('');
  const [sCount, setSCount] = useState('');
  const [vCount, setVCount] = useState('');
  const [audienceDetails, setAudienceDetails] = useState('');
  const [reachAndEngagementDetails, setReachAndEngagementDetails] =
    useState('');
  const [revenueDetails, setRevenueDetails] = useState('');
  const [subscribersCount, setSubscribersCount] = useState('');
  const [views, setViews] = useState('');
  const [revenue, setRevenue] = useState('');
  const [startD, setStartD] = useState('2021-01-01');
  const [startDate, setStartDate] = useState('2021-01-01');
  const [endDate, setEndDate] = useState('2021-01-31');
  const [noRes, serNoRes] = useState(false);
  const handlerChnage = (e) => {
    switch (e.target.value) {
      case '2021-01-01':
        setStartD('2021-01-01');
        setStartDate('2021-01-01');
        setEndDate('2021-01-31');
        break;
      case '2021-02-01':
        setStartD('2021-02-01');
        setStartDate('2021-02-01');
        setEndDate('2021-02-07');
        break;
      case '2021-02-10':
        setStartD('2021-02-10');
        setStartDate('2021-02-10');
        setEndDate('2021-02-15');
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        serNoRes(false);
        setTimeout(() => {}, 500);
        const result = await fetch(
          `https://qorner-mock-server.herokuapp.com/stats?startDate=${startDate}&endDate=${endDate}`
        );
        const data = await result.json();

        setProfileImage(data.metadata.thumbnailUrl);
        setChannelName(data.metadata.channelName);
        setSCount(data.metadata.subscribersCount);
        setVCount(data.metadata.videoCount);
        setRevenueDetails(data.revenueDetails.estimatedRevenueTrend.data);
        setReachAndEngagementDetails(
          data.reachAndEngagementDetails.viewsTrend.data
        );
        setAudienceDetails(
          data.audienceDetails.viewsSubscriberVsNonSubscribersTrend.data
        );
        setSubscribersCount(data.summary.subscribers);
        setViews(data.summary.views);
        setRevenue(data.summary.revenue);
      } catch (error) {
        serNoRes(true);
        console.log('Network error or wrong data entered');
      }
    };
    fetchData();
  }, [startDate, endDate]);

  if (noRes) {
    return (
      <div>
        <Typography>Ops...No result found</Typography>
        <Typography>Select other date</Typography>
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
      </div>
    );
  } else
    return (
      <div>
        <div>
          <Header
            profileImage={profileImage}
            channelName={channelName}
            sCount={sCount}
            vCount={vCount}
            startD={startD}
            handlerChnage={handlerChnage}
            subscribersCount={subscribersCount}
            revenue={revenue}
            views={views}
            bgImage={'./images/bg.png'}
          />
          <div style={{ padding: '20px 0px' }}>
            <Graph
              id='revenue'
              data={revenueDetails}
              headTitle={'Estimated Revenue'}
              headDateS={startDate}
              headDateE={endDate}
            />
          </div>
          <div style={{ padding: '20px 0px' }}>
            <Graph
              data={reachAndEngagementDetails}
              headTitle={'Views'}
              headDateS={startDate}
              headDateE={endDate}
            />
          </div>
          <div style={{ padding: '20px 0px' }}>
            <Graph
              id='audience'
              data={audienceDetails}
              headTitle={'Subscriber views vs total views'}
              headDateS={startDate}
              headDateE={endDate}
            />
          </div>
        </div>
      </div>
    );
};
export default App;
