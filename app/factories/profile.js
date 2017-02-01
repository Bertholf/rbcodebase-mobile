import faker from 'faker';
import user from './user';

const profile = () => ({
  id: faker.random.number(),
  firstName: user().first_name,
  lastName: user().last_name,
  imgBackground: faker.image.image(),
  imgProfile: faker.image.people(),
  about: faker.lorem.paragraph(),
  from: faker.address.city(),
  live: faker.address.city(),
  follower: faker.random.number(),
  postTotal: faker.random.number(),
});
export default profile;
