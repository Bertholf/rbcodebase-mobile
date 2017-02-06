import faker from 'faker';

const user = () => ({
  id: faker.random.number(),
  image: faker.image.avatar(),
  follow: faker.random.boolean(),
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
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
});
export default user;
