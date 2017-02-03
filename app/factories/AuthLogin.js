import faker from 'faker';

const authLogin = () => ({
  accessToken: faker.internet.password(),
});
export default authLogin;
