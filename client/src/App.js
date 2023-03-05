import { Box , styled } from '@mui/material';
import './App.css';
import Articles from './Components/Articles';
import Header from './Components/Header';
import InfoHeader from './Components/InfoHeader';

const Container = styled(Box)(({ theme }) => ({
  width: '59%',
  margin: '110px auto 0 auto',
  [theme.breakpoints.down('md')]: {
    width: '75%'
  },
  [theme.breakpoints.down('sm')]: {
    width: '85%'
  }
}));


function App() {
  return (
   <Box>
      <Header/>
      <Container>
      <InfoHeader/>
      <Articles/>
      </Container>
   </Box>
  );
}

export default App;
