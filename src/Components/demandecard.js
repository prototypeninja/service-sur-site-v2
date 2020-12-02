import React from "react";
import { View,StyleSheet, Image,TouchableHighlight } from "react-native";
import Images from '../Theme/Images'
import { Text,Card, Button } from '@ui-kitten/components';
import Stars from 'react-native-stars';

class DemandeCard extends React.Component {
    
    render() {
       
        
    return (
        <View>
            <Card style={styles.card} disabled={true}>
            <View style={styles.global}>
                <Image style={styles.image} source={Images.plomberieCuisine} />
                <View style={styles.containerText}>
                <Text category='p1'>Réparation de tuyaux</Text>
                <Text style={{fontSize:10}} numberOfLines={6}>Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, dolor sit ametdolor sit ametdolor sit ametdolor sit ametdolor sit amet</Text>
                <Text style={{fontSize:10, color:'#6E7EA4'}}>Prise en charge par: nom et prénoms technicien</Text>
                </View>
                <View style={{justifyContent:'space-between', height:105}}>
                    <Text category='c2'>Ven. 25/9/2020</Text>
                    <Button style={styles.button} size='tiny' status='success'>Terminer </Button>
                    <Button style={styles.button} size='tiny' status='info' onPress={() =>this.props.reclam()}>Réclamer </Button>
                    <Stars display={2} spacing={3} count={5} starSize={15} fullStar= {Images.fullStar} emptyStar= {Images.emptyStar}/>
                </View>
            </View>
        </Card>
        <Card disabled={true} style={styles.card}>
            <View style={styles.global}>
                <Image style={styles.image} source={Images.plomberieCuisine} />
                <View style={styles.containerText}>
                <Text category='p1'>Réparation de tuyaux</Text>
                <Text style={{fontSize:10}} numberOfLines={6}>Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, dolor sit ametdolor sit ametdolor sit ametdolor sit ametdolor sit amet</Text>
                <Text style={{fontSize:10, color:'#6E7EA4'}}>Prise en charge par: nom et prénoms technicien</Text>
                </View>
                <View style={{justifyContent:'space-between', height:105}}>
                    <Text category='c2'>Ven. 25/9/2020</Text>
                    <Button style={styles.button} size='tiny' status='warning'>En cours </Button>
                    <Button style={styles.button} size='tiny' status='danger'>Réclamer </Button>
                    <Stars display={0} spacing={3} count={5} starSize={15} fullStar= {Images.fullStar} emptyStar= {Images.emptyStar}/>
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
        width:'49%',
        alignItems:'center',
    },
    containerText:{
        flexDirection:'column',
        justifyContent:'space-between'
        
    },
    image:{
        width:80,
        height:80,
        marginRight:9
    },
    button:{
        marginBottom:2
    }

  });

export default DemandeCard;
