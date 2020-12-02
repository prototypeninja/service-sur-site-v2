import React from "react";
import { View,StyleSheet, Image,TouchableHighlight } from "react-native";
import Images from '../Theme/Images'
import { Text,Card, Button,Icon,Avatar } from '@ui-kitten/components';
import Stars from 'react-native-stars';
const CallIcon = (props) => (
    <Icon {...props} name='phone-call-outline'/>
  );
class TerminerCard extends React.Component {
    
    render() {
       
        
    return (
        <View>
            <Card style={styles.card} disabled={true}>
                
            <View style={styles.global}>
                <View style={styles.imgView}>
                    <Avatar size='giant' source={Images.profileneutre}/>
                </View>
                
                <View>
                    <View style={styles.head}>
                        <Text category='p1'>Nom prénoms </Text>
                        <Text style={{width:120}} category='label'>Akpakpa centre, rue ...</Text>
                    </View>
                    <View style={styles.container}>
                        <View style={styles.containerText}>
                            <Text category='label'>Réparation de tuyaux</Text>
                            <Text style={{fontSize:10, textAlign:'justify'}} numberOfLines={6}>Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, dolor sit ametdolor sit ametdolor sit ametdolor sit ametdolor sit amet , dolor sit ametdolor sit ametdolor sit ametdolor sit ametdolor sit amet</Text> 
                        </View>
                        <View style={styles.asside}>
                            <Text category='label'>Ven. 25/9/2020</Text>
                            <Stars display={2} spacing={3} count={5} starSize={15} fullStar= {Images.fullStar} emptyStar= {Images.emptyStar}/>
                            <Text style={{textAlign:'center'}} category='label'>Voir le commentaire</Text>
                            <Text status="success" category='label'>Crédit gagné +5</Text>
                        </View>
                    </View>
                    
                </View>
                
            </View>
        </Card>
        
        </View>
        

        
        
    
      
    );
}
};

const styles = StyleSheet.create({
    card:{
        borderRadius:10,
        marginBottom:5
    },
    global:{
        display:'flex',
        flexDirection:'row',
        margin:-15,
        height:120
    },
    container:{
        flexDirection:'row'
    },
    containerText:{
        flexDirection:'column',
        width:"62%",
        marginRight:2
        
    },
    image:{
        width:55,
        height:55,
        marginRight:9
    },
    head:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingRight:20,
        alignItems:'center'
    },
    button:{
        marginBottom:2,
        height:10,

    },
    imgView:{
        justifyContent:'center'
    },
    asside:{justifyContent:'space-between',
     width:85,
     alignItems:'center'}

  });

export default TerminerCard;
