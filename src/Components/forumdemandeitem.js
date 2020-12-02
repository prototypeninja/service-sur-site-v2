import React from "react";
import { View,StyleSheet,ScrollView, Image,TouchableHighlight } from "react-native";
import { Text,Card,Button } from '@ui-kitten/components';
import Images from '../Theme/Images';

class Forumdemandeitem extends React.Component {
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
                    <Image style={styles.image} source={Images.electricite} />
                    <View style={{width:'73%'}}>
                        <Text style={{color:'#26325B'}} category='h6'>Electricité</Text>
                        <Text category ='c2'>Requêtes: Voyez ce jeu exquis wallon, de graphie en kit mais bref. Voyez ce jeu exquis wallon, de graphie en kit mais bref. </Text>
                        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'flex-end', flexWrap:'wrap' }}>
                        <Text category ='c2'>Intervenant: 2 </Text>
                        <Button style={styles.button} size='tiny' status='success'>Résolu</Button>
                        </View>
                        
                        
                    </View>

                </View>
            </Card>
            <Card style={styles.card} onPress={() => this.props.discussion()}>
            <View style={styles.layout1}>
                <Image style={styles.image} source={Images.plomberieCuisine} />
                <View style={{width:'73%'}}>
                    <Text style={{color:'#26325B'}} category='h6'>Plomberie</Text>
                    <Text category ='c2'>Requêtes: Voyez ce jeu exquis wallon, de graphie en kit mais bref. Voyez ce jeu exquis wallon, de graphie en kit mais bref. </Text>
                    <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'flex-end', flexWrap:'wrap' }}>
                    <Text category ='c2'>Intervenant: 2 </Text>
                    <Button style={styles.button} size='tiny' status='warning'>Non résolue</Button>
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
        minWidth:100
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
   
    

  });

export default Forumdemandeitem;
