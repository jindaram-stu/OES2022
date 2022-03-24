import React, {useState, useEffect} from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import {makeUserDatas} from './utils';
import UserCardList from './components/UserCardList'
import './App.css';

const userDatas = makeUserDatas(5000);



function App() {
  
  const [useDarkMode, setUseDarkMode] = useState(true);

  // 이런식으로 Pagination을 하는 방식은 실무에서 적합하지 않다. 이 방식은 먼저 다량의 데이터를 불러오고 나서 거기서 쪼개서 보여주는 방식인데
  // 실제로는 서버에서 pageNo 정보를 보내서, 그 pageNo에 해당하는 정보만 불러오는 형식이다.

  const handleChange = (event) => {
    console.log(event);
    setUseDarkMode(useDarkMode ? false : true);
  }

  useEffect(() => {
    console.log({useDarkMode})
  })


  
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
        <UserCardList userDatas={userDatas}/>
      </Container>
    </Box>
    
  </ThemeProvider>
  
    )
  }

export default App;
