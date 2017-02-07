import faker from 'faker';
import comment from './comment';

const listcomment = (total = 10) => {
  let comments = [];
  for (let i = 0; i < total; i += 1) {
    comments.push(comment());
  }
  return comments;
};
export default listcomment;
