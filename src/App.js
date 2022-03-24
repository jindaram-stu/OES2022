import React, {useState, useEffect} from 'react';
import Container from '@mui/material/Container';
import faker from '@faker-js/faker';
import faker_ko from '@faker-js/faker/locale/ko';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import './App.css';
import UserCard from './component/UserCard';
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box';

const userDatas = [];

function App() {

  const [useDarkMode, setUseDarkMode] = useState(true);

  const handleChange = (event) => {
    console.log(event);
    setUseDarkMode(useDarkMode ? false : true);
  }

  // useEffect(() => {

  // })

  // useEffect(() => {
    
  // }),[useDarkMode]);
  
  while (userDatas.length < 5) {
    userDatas.push({
      avatar : faker.image.avatar(),
      name : `${faker_ko.name.lastName()}${faker_ko.name.firstName()}`,
      email : faker.internet.email(),
      jobTitle : faker.name.jobTitle(),
      phoneNo : faker_ko.phone.phoneNumber()
    })
  }

  const userCards = userDatas.map((userData, idx)=> {
      return <Grid item xs={1} sm={2} md={4} key={idx}>
        <UserCard userData={userData}/>
      </Grid>
  });
    return (
    <ThemeProvider theme = {createTheme({
      palette: {
        mode: useDarkMode ? 'dark' : 'light',
      },
    })
  }>
    <Box sx={{
      height: '100%',
      bgcolor : 'background.default',
      color : 'text.primary',
      p: 1,
    }}>
      <Switch 
        checked={useDarkMode}
        onChange={handleChange}
        color="warning"
        inputProps = {{'aria-label':'controlled'}}
        />
      <Container maxWidth="lg">
        <Grid container spacing={{ xs:2, md:3}} columns={{xs:4, sm: 4, md:9}}>
          {userCards}
        </Grid>
      </Container>
    </Box>

  </ThemeProvider>
    )
  }


//     <Grid item xs={2} sm={4} md={4} key={idx}>
//       <UserCard userData={userData} idx={idx}/>
//     </Grid>
   
    
//   })
//   return (
//       <div className="App">
//         {userCards}
//       </div>
//   );
// }

export default App;
