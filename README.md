## 2022 스마트콘텐츠 프로그래밍
---

#### faker.js
faker.js는 더미데이터를 쉽게 만들 수 있는 환경을 제공합니다.
```
npm install @faker-js/faker --save-dev
```

#### Material UI
Material UI는 자주 사용되는 기능/디자인들을 Component/API로 제공해줘서, React 개발 시에 다양한 UI를 쉽게 만들 수 있습니다. 
##### NPM
```
npm install @mui/material @emotion/react @emotion/styled
```

##### SVG icons
```
npm install @mui/icons-material
```

##### Font
```
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
```


### Switch
```
import Switch from '@mui/material/Switch';
```

```
<Switch
    checked={useDarkMode}
    onChange={handleChange}
    color="warning"
    inputProps = {{'aria-label':'controlled'}}
/>
```

### 난수 생성
```
const getRandomIntInclusive = (min,max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max-min) + min);
  }
```
- Math.random()는 0.0<=1.0 범위 사이의 수를 반환한다. 거기에 max-min을 곱해주면 0.0 <= x < 5 사이의 범위의 수가 반환된다.
- 또 min 값을 더해주면 범위는 1<= x < 6 이다. 그럼 랜덤의 값은 1.00... ~ 5.999.. 까지 나오게 된다. 
- 여기서 <code>floor()</code> 통해 소수점만 없애주면 1과 5사이의 난수를 리턴해주는 것이다.

### Pagination 
사용자가 요구한 요청에 따른 양이 많을 때, 한번에 다 보여주는 것이 아닌 페이지별로 나누어서 보여주는 것.

### PostMan
```
Post Man은 개발한 API를 테스트하고, 테스트 결과를 공유하여 API 개발의 생상선을 높여주는 플랫폼입니다.
```

### axios
```
axios는 브라우저, Node js를 위한 Promise API를 활용하는 HTTP 비동기 통신 라이브러리입니다.
Ajax와 fetch 같이 웹 통신 기능을 지원하는 라이브러리 입니다.
HTTP 요청 취소 및 요청과 같은 응답을 JSON 형태로 자동으로 변환해줍니다.
브라우저의 호환성이 뛰어납니다.
```

### LocalStorage
```
브라우저에서 제공하는 API로써 간단한 텍스트 데이터들을 저장할 수 있습니다. 유사한 기능으로는 sessionStorage가 있는데 둘의 차이는 LocalStorage의 데이터는 직접 삭제하지 않는 이상 영구히 유지되지만, sessionStorage는 해당 페이지를 닫을 때 사라진다는 차이가 있습니다..
```d
