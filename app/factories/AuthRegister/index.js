import faker from 'faker';

const authRegister = () => ({
  accessToken: faker.internet.password(),
});
export default authRegister;
