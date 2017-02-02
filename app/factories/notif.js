import faker from 'faker';
import user from './user';

const notif = (total = 5) => {
  let users = []
    for(let i = 0; i < total; i += 1) {
      users.push(user());
    }
  return users;

   //id: faker.random.number(),
  // read: faker.random.boolean(),
  // image: faker.image.avatar(),
  // from: faker.name.firstName(),
  //  message: faker.lorem.text(),
  //  date_time : faker.date.weekday(),
  // notification_total: faker.lorem.sentences(),
};
export default notif;
