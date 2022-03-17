import faker from '@faker-js/faker';
import faker_ko from '@faker-js/faker/locale/ko';
import './App.css';
const userDatas = [];

function App() {
  
  while (userDatas.length < 10) {
    userDatas.push({
      avatar : faker.image.avatar(),
      name : `${faker_ko.name.lastName()}${faker_ko.name.firstName()}`,
      email : faker.internet.email(),
      jobTitle : faker.name.jobTitle(),
      phoneNo : faker_ko.phone.phoneNumber()
    })
  }
  console.log(userDatas); 
  const userCards = userDatas.map((userData)=> {
    return <>
    <h4>{userData.jobTitle}</h4>
    <img src={userData.avatar} alt="사용자 프로필용 아바타"></img>
    <h5>{userData.name} </h5>
    {userData.email} <br/>
    {userData.phoneNo}
    </>
  })

 
  return (
      <div className="App">
        {userCards}
      </div>
  );
}

export default App;
