import React, {useState, useEffect} from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import {makeUserDatas} from './utils';
import UserCardList from './components/UserCardList';
import './App.css';
import WeatherCard from './components/WeatherCard';
import axios from 'axios';
import {cityLatLon} from './dataset/WeatherData';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid'

const userDatas = makeUserDatas(5000);


function App() {
  
  const [useDarkMode, setUseDarkMode] = useState(true);
  const [weatherData , setWeatherData] = useState(null);
  const [apiError, setApiError] = useState(null);
  const [selectedCityData, setSelectedCityData] = useState({name : "안양", lat : 37.38, lon : 126.96});
  // 이런식으로 Pagination을 하는 방식은 실무에서 적합하지 않다. 이 방식은 먼저 다량의 데이터를 불러오고 나서 거기서 쪼개서 보여주는 방식인데
  // 실제로는 서버에서 pageNo 정보를 보내서, 그 pageNo에 해당하는 정보만 불러오는 형식이다.

  const handleChange = (event) => {
    console.log(event);
    setUseDarkMode(useDarkMode ? false : true);
  }

  const selectHandleChange = (event) => {
    const cityName = event.target.value;
    
    
    setSelectedCityData(cityLatLon.find((city) => {
      return city.name == cityName;
    }));    
  }
  
  useEffect(() => {
    
  },[])

  useEffect(()=> {
    const callApi = async () => {
      try {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${selectedCityData.lat}&lon=${selectedCityData.lon}&lang=kr&units=metric&appid=3fd48c689b5eb05e15546b373d05af05`)
        .then((response)=> {
          setWeatherData(response.data);
        })
      } catch(err) {
        setApiError(err);
      }
    }
    callApi();
    console.log("component did mount")
  },[selectedCityData]);

  useEffect(() => {
    console.log(`theme 변경됨 -> ${useDarkMode}`)
  },[useDarkMode]);


  
    return (
    <ThemeProvider theme = {createTheme({
      palette: {
        mode: useDarkMode ? 'dark' : 'light',
      },
    })
  }>
    <Box sx={{
      minHeight : '100%',
      bgcolor : 'background.default',
      color : 'text.primary',
      p: 1,
    }}>
      <Container maxWidth="lg">
       <FormControl>
        <InputLabel id="selected-city-label">Age</InputLabel>
        <Select
          labelId="selected-city-label"
          id="selected-city"
          value={selectedCityData.name}
          label="Age"
          onChange={selectHandleChange}>
          
          <MenuItem value={"서울"}>서울</MenuItem>  
          <MenuItem value={"안양"}>안양</MenuItem>
          <MenuItem value={"부산"}>부산</MenuItem>
          <MenuItem value={"대전"}>대전</MenuItem>
          <MenuItem value={"광주"}>광주</MenuItem>
          <MenuItem value={"울산"}>울산</MenuItem>
          <MenuItem value={"세종"}>세종</MenuItem>

        </Select>
      </FormControl>
      <Grid container spacing={{xs:2,md : 3}} columns={{xs:4,sm:4,md:12}}>
        <WeatherCard weatherData={weatherData} apiError={apiError}></WeatherCard> 
        <WeatherCard weatherData={weatherData} apiError={apiError}></WeatherCard> 
        <WeatherCard weatherData={weatherData} apiError={apiError}></WeatherCard> 
          
      </Grid>

     
    
      <Switch 
        checked={useDarkMode}
        onChange={handleChange}
        color="warning"
        inputProps = {{'aria-label':'controlled'}}
        />
      
        <UserCardList userDatas={userDatas}/>
        </Container>
    </Box>
    
  </ThemeProvider>
  
    )
  }

export default App;
