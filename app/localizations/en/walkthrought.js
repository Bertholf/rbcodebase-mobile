import LocalizedStrings from 'react-native-localization';
import walk from '../../components/Splash/Walk.json';

const bromo = require('./../../images/bromo.jpg');
const everts = require('./../../images/everest.jpg');
const jayawijaya = require('./../../images/jayawijaya.jpg');
const rinjani = require('./../../images/rinjani.jpg');
const screen = walk.screen.description;

const walkthrought = {
  screen: {
    information: [
      { imageurl: screen[0].Image, title: screen[0].title, description: screen[0].description, bg: screen[0].bg },
      { imageurl: screen[1].Image, title: screen[1].title, description: screen[1].description, bg: screen[1].bg },
      { imageurl: screen[2].Image, title: screen[2].title, description: screen[2].description, bg: screen[2].bg },
      { imageurl: screen[3].Image, title: screen[3].title, description: screen[3].description, bg: screen[3].bg },
    ],
  },
  buttonText: 'GET STARTED',
};

export default walkthrought;
