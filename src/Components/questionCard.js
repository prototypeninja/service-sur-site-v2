import React from "react";
import { View,StyleSheet,ScrollView, Image,TouchableHighlight } from "react-native";
import { Text,Card,Button,Avatar } from '@ui-kitten/components';
import Images from '../Theme/Images';

class QuestionCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
         
        }
        
       
      }
      
     

    
    render() {
        
    return (
        <View>
            <Card style={styles.card} onPress={() => this.props.discussion()}>
                <View style={styles.layout1}>
                <Avatar size='giant' source={Images.profileneutre}/>
                    <View style={{width:'82%', marginLeft:5}}>
                        <Text category='h6'>Nom prénoms </Text>
                        <Text  category='label'>Réparation de tuyaux</Text>
                        <Text category ='c2' style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</Text> 
                    <View style={styles.asside}>
                        <Text  category='label'>Ven. 25/9/2020</Text>
                        <Button style={styles.button} size='tiny' status='warning' >Non résolu</Button>
                    </View>
                    </View>
                </View>
            </Card>
        </View>
      
    );
}
}


const styles = StyleSheet.create({
    button:{
        width:'30%',
        height:10
    },
    card:{
        borderRadius:20,
        marginTop:20,
        
    },

    image:{
        width:80,
        height:80,
        marginRight:9
    },
    layout1:{
        flexDirection:'row',
        margin:-10,
        alignItems:'center'
    },
    asside:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    }
   
    

  });

export default QuestionCard;
