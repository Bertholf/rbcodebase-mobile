import faker from 'faker';
import user from './user';

const notif = (total = 5) => {
  let users = []
    for(let i = 0; i < total; i += 1) {
      users.push(user());
    }
  return users;
};
export default notif;
