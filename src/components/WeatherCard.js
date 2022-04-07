import Typography from '@mui/material/Typography'
import {Box} from '@mui/material'
import {weather_mapping_data} from "../dataset/WeatherData"
import Grid from '@mui/material/Grid'


function WeatherCard(props) {
    const { weatherData, apiError } = props;
   
    const makeWeatherInfo = () => {
        const { temp,temp_min,temp_max,feels_like,humidity } = weatherData.main
        const { main} = weatherData.weather[0];

      
        const parseWeatherData = weather_mapping_data[main] ? weather_mapping_data[main] : weather_mapping_data["Mist"]
        
        return <Grid sx={{
            bgcolor:'Background.default',
            color: 'text.primary',
            p : 1,
        }}>
            <Typography>{`현재 날씨: ${parseWeatherData.name}`}</Typography>
            <parseWeatherData.icon fontSize="large"/>
                <Typography>{`현재온도: ${temp}°C 체감온도: ${feels_like}°C`}</Typography>
                <Typography>{`최저기온: ${temp_min}°C 최고기온: ${temp_max}°C 습도: ${humidity}%`}</Typography>
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