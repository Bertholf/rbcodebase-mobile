import faker from 'faker';
import user from './user';

const post = () => ({
  user: user(),
  post_type: faker.random.arrayElement(['image', 'text']),
  text: faker.lorem.paragraphs(),
  image: faker.image.imageUrl(),
});
export default post;
