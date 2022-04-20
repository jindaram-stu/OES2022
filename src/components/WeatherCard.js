import React, {useState,useEffect} from 'react';
import axios from 'axios';
import Typography from '@mui/material/Typography'
import {weather_mapping_data} from "../dataset/WeatherData"
import Grid from '@mui/material/Grid'
import {cityLatLon, weather_request_date} from '../dataset/WeatherData';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';


function WeatherCard(props) {
    const {id} = props;
    const defaultCityName = localStorage.getItem(id+'_city') || "안양";
    const [weatherData , setWeatherData] = useState(null);
    const [apiError, setApiError] = useState(null);
    const [selectedCityData, setSelectedCityData] = useState(cityLatLon.find(data => data.name === defaultCityName));

    const selectHandleChange = (event) => {
        const cityName = event.target.value;
        const findCityLatLon = cityLatLon.find(data => data.name === cityName); 
        setSelectedCityData(findCityLatLon);
        localStorage.setItem(id+'_city',findCityLatLon.name);
      }

    useEffect(()=> {
    const callApi = async () => {
        // 최초 호출 후 흐른 시간 계산
        const flowTime = Date.now() - localStorage.getItem(selectedCityData.name+'_저장시간');
        const cityName = selectedCityData.name;
        const cityGetDate = cityName+'_저장시간';
        if(flowTime > 600000 * 6) { // 600000 * 6 ms  = 10 * 6 m
        try {
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${selectedCityData.lat}&lon=${selectedCityData.lon}&lang=kr&units=metric&appid=3fd48c689b5eb05e15546b373d05af05`)
            .then((response)=> {
            console.log("API 호출")
            localStorage.setItem(cityName,JSON.stringify(response.data));
            localStorage.setItem(cityGetDate,Date.now());
            
            setWeatherData(JSON.parse(localStorage.getItem(cityName)));
            })
        } catch(err) {
        setApiError(err);
        }
        } else {
        console.log("API 미호출")
        setWeatherData(JSON.parse(localStorage.getItem(cityName)));
        }
        } 
        
    callApi();
    console.log("component did mount")
    },[selectedCityData]);

    const makeWeatherInfo = () => {
        const { temp,temp_min,temp_max,feels_like,humidity } = weatherData.main
        const { main, icon } = weatherData.weather[0];
        const parseWeatherData = weather_mapping_data[main] ? weather_mapping_data[main] : weather_mapping_data['Etc']
        console.log(parseWeatherData.name)
        const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
        
        return <Grid sx={{
            bgcolor:'Background.default',
            color: 'text.primary',
            p : 1,
        }}>
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
            <Typography>{`현재날씨: ${parseWeatherData.name}`}</Typography>
            <parseWeatherData.icon sx={{ fontSize: 125, color: 'yellow' }} />
            <img src={iconUrl} alt="현재날씨 아이콘" />
        <Typography>{`현재온도: ${temp}℃ 체감온도: ${feels_like}℃`}</Typography>
        <Typography>
          {`최저기온: ${temp_min}℃ 최고기온: ${temp_max}℃ 습도: ${humidity}%`}
        </Typography>
        </Grid>
    }

    return <>
        { apiError ? 
            <Typography>{apiError.message}</Typography>
            :
            weatherData ?
            makeWeatherInfo()
            :
            <Typography>날씨정보 없음</Typography>
        }
    </>
}


export default WeatherCard;