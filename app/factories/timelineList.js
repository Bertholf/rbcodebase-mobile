import faker from 'faker';
import user from './user';

const timelineList = () => ({
  user: user().first_name.concat(' ', user().last_name),
  avatarTimeline: faker.image.avatar(),
  imageTimeline: faker.image.image(),
  numberTimeline: faker.random.number(),
  textTimeline: faker.lorem.words(),
  dateTimeline: faker.date.recent().toString(),
  tfTimeline: faker.image.transport(),
});
export default timelineList;
