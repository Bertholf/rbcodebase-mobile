import faker from 'faker';
import user from './user';

const notif = () => ({
  id: faker.random.number(),
  user: user().first_name.concat(' ', user().last_name),
  read: faker.random.boolean(),
  image: faker.image.avatar(),
  from: faker.name.firstName(),
  message: faker.lorem.text(),
  date_time: faker.date.past(),
  notification_total: faker.lorem.sentences(),
});
export default notif;
