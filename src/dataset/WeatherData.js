import ThunderstormIcon from "@mui/icons-material/Thunderstorm"
import Rain from "@mui/icons-material/Umbrella"
import Snow from "@mui/icons-material/AcUnit"
import Clear from "@mui/icons-material/WbSunny"
import BlurIcon from "@mui/icons-material/Grain"

export const cityLatLon = [
    { 
        name : "서울", lat : 37.53, lon : 127.02
    },
    { 
        name : "안양", lat : 37.38, lon : 126.96
    },
    { 
        name : "부산", lat : 35.16, lon : 129.06
    },
    { 
        name : "대전", lat : 36.45, lon : 127.43
    },
    
    { 
        name : "광주", lat : 35.1798, lon : 126.8781
    },
    
    { 
        name : "울산", lat : 37.7678, lon : -3.7908
    },
    
    { 
        name : "세종", lat : 36.5040, lon : 127.2494
    },

]

export const weather_mapping_data = {
    Thunderstorm : {
        name : "폭우",
        icon : ThunderstormIcon
    },
    Rain : {
        name : "비",
        icon : Rain
    },

    Snow : {
        name : "눈",
        icon : Snow
    },

    Clear : {
        name : "맑음",
        icon : Clear
    },
    Mist : {
        title : "안개",
        icon : BlurIcon
    }    
}