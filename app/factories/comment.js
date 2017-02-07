import faker from 'faker';
import user from './user';

const comment = () => ({
  user: user().first_name.concat(' ', user().last_name),
  avatarComment: faker.image.avatar(),
  imageComment: faker.image.image(),
  numberComment: faker.random.number(),
  textComment: faker.lorem.words(),
  dateComment: faker.date.recent().toString(),
  tfComment: faker.image.transport(),
});
export default comment;
