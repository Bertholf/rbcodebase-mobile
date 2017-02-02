import faker from 'faker';

const user = () => ({
  id: faker.random.number(),
  first_name: faker.name.firstName(),
  last_name: faker.name.lastName(),
  message: faker.lorem.sentence(),
  date_time: faker.date.weekday(),
  date: faker.date.recent(),
  image: faker.image.avatar(),
});
export default user;
