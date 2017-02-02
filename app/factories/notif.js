import faker from 'faker';
import user from './user';

const notif = () => ({
  id: faker.random.number(),
  user: faker.name.firstName(),
  read: faker.random.boolean(),
  image: faker.image.avatar(),
  from: faker.name.firstName(),
  message: faker.lorem.text(),
  date_time: faker.date.recent(),
  notification_total: faker.lorem.sentences(),
});
export default notif;
