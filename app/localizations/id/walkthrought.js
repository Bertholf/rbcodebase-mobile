import LocalizedStrings from 'react-native-localization';

const bromo = require('./../../images/bromo.jpg');
const everts = require('./../../images/everest.jpg');
const jayawijaya = require('./../../images/jayawijaya.jpg');
const rinjani = require('./../../images/rinjani.jpg');

const walkthrought = {
  screen: {
    information: [
      { imageurl: jayawijaya, title: 'FITUR DAN MANFAAT', description: 'Gunung Everest menarik banyak pendaki, beberapa dari mereka pendaki gunung yang sangat berpengalaman. Ada dua rute pendakian utama: satu mendekati puncak dari tenggara di Nepal' },
      { imageurl: everts, title: 'FITUR DAN MANFAAT 2', description: 'Ketinggian resmi saat ini 8.848 m (29.029 ft) seperti yang diakui oleh China dan Nepal didirikan oleh survei India tahun 1955 dan kemudian dikonfirmasi oleh survei Cina pada tahun 1975' },
      { imageurl: bromo, title: 'FITUR DAN MANFAAT 3', description: 'Argumen mengenai ketinggian antara Cina dan Nepal berlangsung lima tahun dari tahun 2005 sampai 2010. China berpendapat itu harus diukur dengan ketinggian rock yang 8.844 m tapi Nepal mengatakan itu harus diukur dengan ketinggian salju yang 8.848 m' },
      { imageurl: rinjani, title: 'FITUR DAN MANFAAT 4', description: '1924 Ekspedisi mengakibatkan salah satu misteri terbesar di Everest sampai hari ini: George Mallory dan Andrew Irvine membuat upaya akhir KTT pada tanggal 8 Juni tetapi tidak pernah kembali, memicu perdebatan apakah mereka adalah yang pertama untuk mencapai puncak' },
    ],
  },
  buttonText: 'MULAI',
};

export default walkthrought;
