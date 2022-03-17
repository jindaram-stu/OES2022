import faker from '@faker-js/faker';
import faker_ko from '@faker-js/faker/locale/ko';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './App.css';
const userDatas = [];

function App() {
  
  while (userDatas.length < 5) {
    userDatas.push({
      avatar : faker.image.avatar(),
      name : `${faker_ko.name.lastName()}${faker_ko.name.firstName()}`,
      email : faker.internet.email(),
      jobTitle : faker.name.jobTitle(),
      phoneNo : faker_ko.phone.phoneNumber()
    })
  }
  console.log(userDatas); 
  const userCards = userDatas.map((userData, idx)=> {
    return <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image= {userData.avatar}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
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
    // <div key={idx}>
    // <h4>{userData.jobTitle}</h4>
    // <img src={userData.avatar} alt="사용자 프로필용 아바타"></img>
    // <h5>{userData.name} </h5>
    // {userData.email} <br/>
    // {userData.phoneNo}
    // </div>
  })

  console.log();
  return (
      <div className="App">
        {userCards}
      </div>
  );
}

export default App;
