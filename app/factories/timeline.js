import faker from 'faker';
import post from './post';
import user from './user';

const timeline = (total = 10) => {
  let posts = [];
  for (let i = 0; i < total; i += 1) {
    posts.push(post());
  }
  return posts;
};
export default timeline;
