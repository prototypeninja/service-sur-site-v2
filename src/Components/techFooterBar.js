import React from "react";
import {View,Image,TouchableOpacity,StyleSheet} from 'react-native';
import Images from '../Theme/Images';
import { Text } from '@ui-kitten/components';

class TechFooter extends React.Component {
  

  

  
 
  render() {
    return (
      <View style={styles.footer}>
          <TouchableOpacity  onPress={() => this.props.displayListdemande()} underlayColor='#'>
            
          <Image style={styles.smallimage}  source={Images.playListCheck} />
          
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.camera}  onPress={() =>this.props.displayLiveDemande()} underlayColor='#' >
          <Image style={{width:30, height:30}}  source={Images.techtele} />
          </TouchableOpacity>
          <TouchableOpacity  underlayColor='#'  onPress={() => this.props.displayForumDemande()}>
          <Image style={styles.smallimagebase}  source={Images.simpleHipChatBase} />
          </TouchableOpacity>
      </View>
    );
}
};
const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor:'#E6455E',
        
        borderRadius:15,
        height:60,
        alignItems: 'center',
        paddingLeft:5,
        paddingRight:5,
        marginLeft:10,
        marginRight:10,
    },
    smallimage:{
        width:90,
        height:90
    },
    bigimage:{
        
    },
    camera:{
        borderRadius:50,
        backgroundColor:'#FFFFFF',
        padding:10,
    }

  });


export default TechFooter;
