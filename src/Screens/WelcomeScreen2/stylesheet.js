import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {HeaderFont, ContentHFont} from '../../Assets/Fonts';

export default StyleSheet.create({
  contentView: {
    // justifyContent: 'center',

    marginLeft: wp('10%'),
        marginTop: hp('20%'),
        borderWidth:1,
        backgroundColor:'#FFFFFF',
        position:'absolute',
        shadowColor:'#3C3C432E',
        borderColor:'#FFFFFF',
        borderRadius:8,
        width:343,
        height:200,
        flexDirection:'row',
        justifyContent:'space-evenly',
        elevation:2,
        alignItems:'center'
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
  stevenText: {
    fontSize: ContentHFont,
  },
  introHeaderTitle: {
    fontSize: 25,
    fontWeight: '600',
    
    color:'#000000',
    textAlign:'center',
    marginTop: hp('1%'),
  },
  backk:{
    marginRight: hp('25%'),
  }
});
