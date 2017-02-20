import LocalizedStrings from 'react-native-localization';

const bromo = require('./../../images/bromo.jpg');
const everts = require('./../../images/everest.jpg');
const jayawijaya = require('./../../images/jayawijaya.jpg');
const rinjani = require('./../../images/rinjani.jpg');

const walkthrought = {
  screen: {
    information: [
      { imageurl: jayawijaya, title: 'FEATURE OF BENEFIT', description: 'Mount Everest attracts many climbers, some of them highly experienced mountaineers. There are two main climbing routes: one approaching the summit from the southeast in Nepal', bg: '#03A9F4' },
      { imageurl: everts, title: 'FEATURE OF BENEFIT 2', description: 'The current official height of 8,848 m (29,029 ft) as recognised by China and Nepal was established by a 1955 Indian survey and subsequently confirmed by a Chinese survey in 1975', bg: '#00BCD4' },
      { imageurl: bromo, title: 'FEATURE OF BENEFIT 3', description: ' An argument regarding the height between China and Nepal lasted five years from 2005 to 2010. China argued it should be measured by its rock height which is 8,844 m but Nepal said it should be measured by its snow height 8,848 m', bg: '#26A69A' },
      { imageurl: rinjani, title: 'FEATURE OF BENEFIT 4', description: 'The 1924 expedition resulted in one of the greatest mysteries on Everest to this day: George Mallory and Andrew Irvine made a final summit attempt on 8 June but never returned, sparking debate as to whether they were the first to reach the top', bg: '#82B1FF' },
    ],
  },
  buttonText: 'GET STARTED',
};

export default walkthrought;
