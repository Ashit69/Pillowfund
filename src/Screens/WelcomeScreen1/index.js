// import React, {Component} from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
//   TouchableOpacity,
// } from 'react-native';
// import {CommonStyles} from '../../Assets/index';
// import styles from './stylesheet';
// import Icon from 'react-native-vector-icons/FontAwesome5';

//   export default class WelcomeScreen1 extends Component {
//     render() {
//       return (
//         <>
//           <SafeAreaView style={CommonStyles.container}>
//             <View>
//               <Text style={CommonStyles.introHeaderLogo}>Mewt</Text>
//             </View>
//             <View style={styles.contentView}>
//               <Text style={CommonStyles.introHeaderTitle}>
//                 Welcome to Mewt platform
//               </Text>
//               <Text style={CommonStyles.introHeaderContent}>
//                 "The desires you aspire to need strong chains of intent."
//               </Text>
//               <Text style={styles.stevenText}>--- Steven Redhead</Text>
//             </View>
//           </SafeAreaView>
//           <View style={CommonStyles.introFooter}>
//             <View
//               style={{
//                 flexDirection: 'row',
//                 justifyContent: 'flex-end',
//                 alignItems: 'center',
//               }}>
//               <Text>Next</Text>
//               <TouchableOpacity
//                 onPress={() => this.props.navigation.navigate('WelcomeScreen2')}>
//                 <Icon
//                   name="arrow-alt-circle-right"
//                   size={43}
//                   color="blue"
//                   style={{marginLeft: 150}}
//                 />
//               </TouchableOpacity>
//             </View>
//           </View>
//         </>
//       );
//     }
//   }
import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import styles from './stylesheet';
import axios from 'axios';

const App = () => {
  const getDataUsingSimpleGetCall = () => {
    axios
      .get('https://maps.googleapis.com/maps/api/distancematrix/json?destinations=San%20Francisco|Victoria%20BC&origins=Vancouver%20BC|Seattle&key=AIzaSyDKoa9OP8t62mxzSQ3KsEMfnGcwPJ1uUIo')
      .then(function (response) {
        alert(JSON.stringify(response.data));
      })
      .catch(function (error) {
        alert(error.message);
      })
      .finally(function () {
        alert('Finally called');
      });
  };

  // const getDataUsingAsyncAwaitGetCall = async () => {
  //   try {
  //     const response = await axios.get(
  //       'https://maps.googleapis.com/maps/api/distancematrix/json?origins=San%20Francisco|Victoria%20BC&destinations=Vancouver%20BC|Seattle&key=AIzaSyDLjJYKXa958KNtFuxqewcOEipF83DxxII',
  //     );
  //     alert(JSON.stringify(response.data));
  //   } catch (error) {
  //     alert(error.message);
  //   }
  // };

  // const postDataUsingSimplePostCall = () => {
  //   axios
  //     .post('https://maps.googleapis.com/maps/api/distancematrix/json?origins=San%20Francisco|Victoria%20BC&destinations=Vancouver%20BC|Seattle&key=AIzaSyDLjJYKXa958KNtFuxqewcOEipF83DxxII', {
  //       title: 'foo',
  //       body: 'bar',
  //       userId: 1,
  //     })
  //     .then(function (response) {
  //       alert(JSON.stringify(response.data));
  //     })
  //     .catch(function (error) {
  //       alert(error.message);
  //     });
  // };

  // const multipleRequestsInSingleCall = () => {
  //   axios
  //     .all([
  //       axios
  //         .get('https://maps.googleapis.com/maps/api/distanceMatrix/json?destinations=<string>|<string>&origins=<string>|<string>')
  //         .then(function (response) {
  //           alert('Post 1 : ' + JSON.stringify(response.data));
  //         }),
  //       axios
  //         .get('https://maps.googleapis.com/maps/api/distanceMatrix/json?destinations=<string>|<string>&origins=<string>|<string>')
  //         .then(function (response) {
  //           alert('Post 2 : ' + JSON.stringify(response.data));
  //         }),
  //     ])
  //     .then(
  //       axios.spread(function (acct, perms) {
  //         alert('Both requests are now complete');
  //       }),
  //     );
  // };
  // class App extends React.Component{
  //   constructor(){
  //     super()
  //     this.state={
  //       data:[]
  //     }
  //   }
  //   componentDidMount(){
  //     this.getapiData()
  //   }
  //   async getapiData(){
  //     let resp=await axios.get('https://maps.googleapis.com/maps/api/distancematrix/json?origins=San%20Francisco|Victoria%20BC&destinations=Vancouver%20BC|Seattle&key=AIzaSyDLjJYKXa958KNtFuxqewcOEipF83DxxII')
  //     // console.warn(resp.data.distance)
  //     // this.setState({data:resp.data.distance})
  //   }
  // render(){
    
  return (
    <View style={styles.container}>
      {/* {
        this.state.data.length>0?
        <View>
          {
            this.state.data.map((item) =>
            <Text>{item.text}</Text>)
          }
        </View>: <Text>data is loading..</Text>
      } */}
      {/*Running GET Request*/}
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={getDataUsingSimpleGetCall}>
        <Text>Simple Get Call</Text>
      </TouchableOpacity>

      {/* <TouchableOpacity
        style={styles.buttonStyle}
        onPress={getDataUsingAsyncAwaitGetCall}>
        <Text>Get Data Using Async Await GET</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={postDataUsingSimplePostCall}>
        <Text>Post Data Using POST</Text>
      </TouchableOpacity>  */}

      {/* <TouchableOpacity
        style={styles.buttonStyle}
        onPress={multipleRequestsInSingleCall}>
        <Text>Multiple Concurrent Requests In Single Call</Text>
      </TouchableOpacity> */}

       {/* <Text style={{textAlign: 'center', marginTop: 18}}>
        www.aboutreact.com
      </Text> */}
 
    </View>
  );
    };
// };


// const styles = StyleSheet.create({
//   container: {
//     justifyContent: 'center',
//     flex: 1,
//     padding: 16,
//   },
//   buttonStyle: {
//     alignItems: 'center',
//     backgroundColor: '#DDDDDD',
//     padding: 10,
//     width: '100%',
//     marginTop: 16,
//   },
// });

export default App;