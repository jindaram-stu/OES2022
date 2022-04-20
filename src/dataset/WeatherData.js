import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import UmbrellaIcon from '@mui/icons-material/Umbrella';
import CloudIcon from '@mui/icons-material/Cloud';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import DangerousIcon from '@mui/icons-material/Dangerous';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';

export const cityLatLon = [
  {
    name: '서울',
    lat: 37.5326,
    lon: 127.024612,
  },
  {
    name: '안양',
    lat: 37.3911,
    lon: 126.9677,
  },
  {
    name: '제주',
    lat: 33.4405,
    lon: 126.3998,
  },
  {
    name: '부산',
    lat: 35.1666,
    lon: 129.0666,
  },
  {
    name: '대전',
    lat: 36.4535,
    lon: 127.4319,
  },
  {
    name: '광주',
    lat: 35.1798,
    lon: 126.8781,
  },
  {
    name: '울산',
    lat: 37.7678,
    lon: 129.3114,
  },
  {
    name: '세종',
    lat: 37.3799,
    lon: 126.8031,
  },
];

export const weather_mapping_data = {
  Thunderstorm: {
    name: '폭우',
    icon: ThunderstormIcon,
  },
  Drizzle: {
    name: '이슬비',
    icon: CloudIcon,
  },
  Rain: {
    name: '비',
    icon: UmbrellaIcon,
  },
  Snow: {
    name: '눈',
    icon: AcUnitIcon,
  },
  Etc: {
    name: '기타',
    icon: DangerousIcon,
  },
  Clear: {
    name: '맑음',
    icon: WbSunnyIcon,
  },
  Clouds: {
    name: '구름',
    icon: FilterDramaIcon,
  },
};