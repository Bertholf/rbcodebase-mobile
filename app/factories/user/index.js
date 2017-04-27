import faker from 'faker';

const user = () => ({
  id: faker.random.number(),
  first_name: faker.name.firstName(),
  last_name: faker.name.lastName(),
  message: faker.lorem.sentence(),
  date_time: faker.date.weekday(),
  date: faker.date.recent().toString(),
  image: faker.image.avatar(),
  follow: faker.random.boolean(),
  username: faker.internet.userName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  gender: faker.random.arrayElement(['male', 'female']),
  imgBackground: faker.image.image(),
  imgProfile: faker.image.people(),
  about: faker.lorem.paragraph(),
  from: faker.address.city(),
  live: faker.address.city(),
  follower: faker.random.number(),
  postTotal: faker.random.number(),
  distance: faker.random.number(),
});
export default user;
