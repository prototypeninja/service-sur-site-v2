import React from "react";
import { Icon, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import {View} from 'react-native';


const BackIcon = (props) => (
    <Icon fill='#FFFFFF' {...props} name='arrow-back'/>
  );
  const NoHeader = ({ navigation }) => {
    const renderBackAction = () => (
      <TopNavigationAction icon={BackIcon} onPress={() => navigation.goBack()}/>
    );
  
    return (
      <View>
        <TopNavigation style={{backgroundColor:'#272727'}}
          accessoryLeft={renderBackAction}
        />
      </View>
    );
  };
  
export default NoHeader;