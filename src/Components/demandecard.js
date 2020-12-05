import React from "react";
import { View,StyleSheet, Image,TouchableHighlight } from "react-native";
import Images from '../Theme/Images'
import { Text,Card, Button } from '@ui-kitten/components';
import Stars from 'react-native-stars';

class DemandeCard extends React.Component {
    




    displayContent=()=>{
        let datatask=this.props.taskdata
        let descriptionTab=datatask.description.split("</p>")[0].replace( /(<([^>]+)>)/ig, '')
        console.log(descriptionTab)
        
        if (datatask.statue==="do") {
            return(
                <Card style={styles.card} disabled={true}>
                    <View style={styles.global}>
                        <Image style={styles.image} source={Images.plomberieCuisine} />
                        <View style={styles.containerText}>
                        <Text category='p1'>{datatask.title}</Text>
                        <Text style={{fontSize:10}} numberOfLines={6}>{descriptionTab}</Text>
                        <Text style={{fontSize:10, color:'#6E7EA4'}}>Prise en charge par: {datatask.technicien}</Text>
                        </View>
                        <View style={{justifyContent:'space-between', height:105}}>
                            <Text category='c2'>{datatask.date}</Text>
                            <Button style={styles.button} size='tiny' status='success'>Terminer </Button>
                            <Button style={styles.button} size='tiny' status='info' onPress={() =>this.props.reclam()}>Réclamer </Button>
                            <Stars display={datatask.note} spacing={3} count={5} starSize={15} fullStar= {Images.fullStar} emptyStar= {Images.emptyStar} update={(val)=> console.log(val)}/>
                        </View>
                    </View>
                </Card>
            )
        } else {
            return(
                <Card disabled={true} style={styles.card}>
                    <View style={styles.global}>
                        <Image style={styles.image} source={Images.plomberieCuisine} />
                        <View style={styles.containerText}>
                        <Text category='p1'>{datatask.title}</Text>
                        <Text style={{fontSize:10}} numberOfLines={4}>{descriptionTab}</Text>
                        <Text style={{fontSize:10, color:'#6E7EA4'}}>Prise en charge par: {datatask.technicien}</Text>
                        </View>
                        <View style={{justifyContent:'space-between', height:105}}>
                            <Text category='c2'>{datatask.date}</Text>
                            <Button style={styles.button} size='tiny' status='warning'>En cours </Button>
                            <Button style={styles.button} size='tiny' status='danger'>Réclamer </Button>
                            <Stars display={datatask.note} spacing={3} count={5} starSize={15} fullStar= {Images.fullStar} emptyStar= {Images.emptyStar} update={(val)=> console.log(val)}/>
                        </View>
                    </View>
                </Card>
            )
        }
    }


    render() {
       
        
    return (
        <View>
            
        {this.displayContent()}
        
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
