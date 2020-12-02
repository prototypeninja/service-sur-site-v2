import React from "react";
import { View,StyleSheet, Image,TouchableHighlight } from "react-native";
import Images from '../Theme/Images'
import { Text,Card, Button,Icon,Avatar } from '@ui-kitten/components';
import Stars from 'react-native-stars';
const CallIcon = (props) => (
    <Icon {...props} name='phone-call-outline'/>
  );
class LiveHistCard extends React.Component {
    
    render() {
       
        
    return (
        
        <Card style={styles.card} disabled={true}>
            
            <View style={styles.global}>
                <View style={styles.head}>
                <Avatar size='giant' source={Images.profileneutre}/>
                <View style={{marginLeft:3}}>
                <Text category="label">Nom prénoms </Text>
                <Text category="label">Ven. 25/9/2020</Text>
                <Stars display={2} spacing={3} count={5} starSize={15} fullStar= {Images.fullStar} emptyStar= {Images.emptyStar}/>
                </View>
                
                </View>
                
                <Text category="label" style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, </Text>
                <Text category="label" status="success">Crédit gagné +7</Text>
            </View>

        </Card>
    
      
    );
}
};

const styles = StyleSheet.create({
    card:{
        borderRadius:10,
        marginBottom:5,
        width:"48%",
    },
    global:{
        margin:-15,
        alignItems:'center'
    },
    head:{
    flexDirection:'row',
    width:'100%'
    },
    
    button:{
        marginBottom:2,
        height:10,
        width:'50%'

    },
   

  });

export default LiveHistCard;
