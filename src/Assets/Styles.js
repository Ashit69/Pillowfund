import {StyleSheet, Platform} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {HeaderFont, HeadermediumFont, ContentHFont} from './Fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  introHeaderLogo: {
    alignSelf: 'center',
  },
  introHeaderTitle: {
    fontSize: 30,
    fontWeight: '600',
    color:'#000000',
  },
  introHeaderContent: {
    fontSize: ContentHFont,
    color: '#000000',
    fontSize: 20,
    textAlign: 'center',
    marginHorizontal: wp('5%'),
    marginTop: hp('3%'),
  },
  introFooter: {
    height: 50,
    justifyContent: 'flex-end',
    // backgroundColor: 'red',
    marginBottom: hp('15%'),
    marginHorizontal: wp('5%'),
  },
});
