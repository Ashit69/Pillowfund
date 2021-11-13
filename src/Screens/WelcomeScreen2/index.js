import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {CommonStyles} from '../../Assets/index';
import styles from './stylesheet';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {widthPercentageToDP} from 'react-native-responsive-screen';

export default class WelcomeScreen2 extends Component {
  render() {
    return (
      <>
        <SafeAreaView style={CommonStyles.container}>
          <View>
            <Text style={CommonStyles.introHeaderLogo}>Mewt</Text>
          </View>
          <View style={styles.contentView}>
            <Text style={styles.introHeaderTitle}>
              Welcome to Mewt platform
            </Text>
          </View>
           </SafeAreaView>
        <View style={CommonStyles.introFooter}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('WelcomeScreen1')}>
              <Icon name="arrow-alt-circle-left" size={43} color="gray" />
            </TouchableOpacity>
            <Text style={styles.backk}>Back</Text>
          </View>
        </View>
      </>
    );
  }
}
