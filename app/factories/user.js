import faker from 'faker';

const user = () => ({
  id: faker.random.number(),
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  imgBackground: faker.image.image(),
  imgProfile: faker.image.people(),
  about: faker.lorem.paragraph(),
  from: faker.address.city(),
  live: faker.address.city(),
  follower: faker.random.number(),
  postTotal: faker.random.number(),
});
export default user;
