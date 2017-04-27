import faker from 'faker';
import user from './../user';

const setting = () => ({
  account: user(),
  privacy: {
    confirmFollow: faker.random.boolean(),
    whoCanFollow: faker.random.boolean(),
    whoCanComment: faker.random.boolean(),
    whoCanPost: faker.random.boolean(),
  },
  emailNotification: {
    followMe: faker.random.boolean(),
    likeMyPost: faker.random.boolean(),
    shareMyPost: faker.random.boolean(),
    commentMyPost: faker.random.boolean(),
    likeMyComment: faker.random.boolean(),
    repliesMyComment: faker.random.boolean(),
    joinMyGroup: faker.random.boolean(),
    likeMyPage: faker.random.boolean(),
  },
});
export default setting;
