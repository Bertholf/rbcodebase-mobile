import faker from 'faker';

const user = () => ({
  id: faker.random.number(),
  image: faker.image.avatar(),
  first_name: faker.name.firstName(),
  user_name: faker.internet.userName(),
  follow: faker.random.boolean(),
});
export default user;
