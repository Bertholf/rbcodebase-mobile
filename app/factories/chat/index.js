import faker from 'faker';
import user from './../user';

const chat = () => ({
  id: faker.random.number(),
  user: user().first_name.concat(' ', user().last_name),
  avatarChat: faker.image.avatar(),
  textChat: faker.lorem.words(),
  dateChat: faker.date.recent().toString(),
});
export default chat;
