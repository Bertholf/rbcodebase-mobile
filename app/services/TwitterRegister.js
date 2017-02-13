import OAuthManager from 'react-native-oauth';
import { Actions } from 'react-native-router-flux';
import config from '../config';

const { TWITTER_CONSUMER_KEY, TWITTER_CONSUMER_SECRET } = config;

const twitterRegister = () => {
  const manager = new OAuthManager('RB Codebase');
  manager.configure({
    twitter: {
      consumer_key: TWITTER_CONSUMER_KEY,
      consumer_secret: TWITTER_CONSUMER_SECRET,
    },
  });
  manager.authorize('twitter')
    .then((response) => {
      const userTimelineUrl = 'https://api.twitter.com/1.1/statuses/user_timeline.json';
      manager.makeRequest('twitter', userTimelineUrl)
      .then((resp) => {
        console.log('TWITTER OK',resp);
        const props = {
          username: resp.user.screen_name,
          firstName: resp.user.name,
        };
        Actions.register(props);
      })

      const accessToken = response.response.credentials.accessToken;
      return accessToken;
    })
    .catch(err => console.log('TWITTER LOGIN ERROR', err));
};

export default twitterRegister;
