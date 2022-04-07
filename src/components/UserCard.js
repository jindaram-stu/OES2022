import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {useState,useEffect} from 'react';
import {getRandomInt} from '../utils';

function UserCard(props) {
    const { userData } = props;
    const [fontColor, setFontColor] = useState(null);

    useEffect(()=> {
      const changeFontColor = () => {
        setFontColor(`rgb(${getRandomInt(0,255)},${getRandomInt(0,255)},${getRandomInt(0,55)})`);
      }

      setInterval(changeFontColor,1000);
    },[])
    // => const userData = props.userData
    return <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image= {userData.avatar}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color ={fontColor}>
          {userData.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <b>이메일 :</b> {userData.email} <br/>
          <b>직업 :</b> {userData.jobTitle} <br/>
          <b>전화번호 :</b> {userData.phoneNo}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
}

export default UserCard;
