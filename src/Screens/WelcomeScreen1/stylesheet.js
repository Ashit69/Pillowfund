import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {HeaderFont, ContentHFont} from '../../Assets/Fonts';

export default StyleSheet.create({
  contentView: {
    // justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('20%'),
  },
  stevenText: {
    fontSize: ContentHFont,
  },
  container: {
    justifyContent: 'center',
    flex: 1,
    padding: 16,
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: '100%',
    marginTop: 16,
  },
});
