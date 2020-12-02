import React from "react";
import { View,StyleSheet, Image,TouchableHighlight } from "react-native";
import Images from '../Theme/Images'
import { Text,Card, Button,Icon,Avatar } from '@ui-kitten/components';
import Stars from 'react-native-stars';
const CallIcon = (props) => (
    <Icon {...props} name='phone-call-outline'/>
  );
class LiveCard extends React.Component {
    
    render() {
       
        
    return (
        
        <Card style={styles.card} disabled={true}>
            
            <View style={styles.global}>
                <Avatar size='giant' source={Images.profileneutre}/>
                <Text>Nom prénoms</Text>
                <Text style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, </Text>
                <Button style={styles.button} size='tiny' status='success' onPress={() =>console.log('Rejoindre')}>Rejoindre </Button>

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
        alignItems:'center',
        marginVertical:0
    },
    
    button:{
        marginBottom:2,
        height:10,
        width:'50%'

    },
   

  });

export default LiveCard;
