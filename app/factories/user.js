import faker from 'faker';

const user = () => ({
  first_name: faker.name.firstName(),
  last_name: faker.name.lastName(),
  follow: faker.name.follow(),
});
export default user;
