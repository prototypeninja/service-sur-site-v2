import React from "react";
import { Icon, Text, TopNavigation, TopNavigationAction,Avatar } from '@ui-kitten/components';
import {View,Image,TouchableHighlight} from 'react-native';
import Images from '../Theme/Images'
import styleheader from './styles/styleheader'


const BackIcon = (props) => (
    <Icon fill='#FFFFFF' {...props} name='arrow-back'/>
  );
  const NoRadiusHeader = ({ navigation }) => {
    const renderRightActions = () => (
      <React.Fragment>
         <TouchableHighlight underlayColor='#'  onPress={() => navigation.navigate('Profil')}>
         <Avatar size='large' source={Images.profile}/>
         </TouchableHighlight>
         
      </React.Fragment>
    );
    const renderLogo = () => (
        <React.Fragment>
         <View style={styleheader.component}>
            <Image style={styleheader.image} source={Images.installation} />
            <Text style={styleheader.text}>Dépannage{"\n"}a domicile</Text>
        </View>
      </React.Fragment>
      );

    const renderBackAction = () => (
      <TopNavigationAction icon={BackIcon} onPress={() => navigation.goBack()}/>
    );
  
    return (
      <View>
        <TopNavigation style={styleheader.pseudoheader}
          alignment='center'
          title={renderLogo}
          accessoryLeft={renderBackAction}
          accessoryRight={renderRightActions}
        />
      </View>
    );
  };
  
export default NoRadiusHeader;