import faker from '@faker-js/faker';
import faker_ko from '@faker-js/faker/locale/ko'

export const getRandomInt = (min,max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max-min) + min);
    // Math.random()는 0.0<=1.0 범위 사이의 수를 반환한다. 거기에 max-min을 곱해주면 0.0 <= x < 5 사이의 범위의 수가 반환된다.
    // 또 min 값을 더해주면 범위는 1<= x < 6 이다. 그럼 랜덤의 값은 1.00... ~ 5.999.. 까지 나오게 된다. 여기서 소수점만 없애주면
    // 1과 5사이의 난수를 리턴해주는 것이다.
  }

export const makeUserDatas = (count) => {
    const userDatas = [];

    while (userDatas.length < count) {
        userDatas.push({
            avatar : `images/${getRandomInt(1,5)}.jpg`,
            name : `${faker_ko.name.lastName()}${faker_ko.name.firstName()}`,
            email : faker.internet.email(),
            jobTitle : faker.name.jobTitle(),
            phoneNo : faker_ko.phone.phoneNumber()
        })
    }

    return userDatas;
}

export const paginate = (array, pageSize, pageNumber) => {
    return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
    }