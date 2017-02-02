import faker from 'faker';
import user from './user';

const friendlist = (total = 50) => {
  let users = [];
  for(let i=0; i<total; i+=1){
    users.push(user());
  }
  return users;
};
export default friendlist;
