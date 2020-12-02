import React from "react";
import { View,StyleSheet,ScrollView, Image,TouchableHighlight } from "react-native";
import { Text,Card,Input,Button, Select,SelectItem  } from '@ui-kitten/components';
import Images from '../Theme/Images';


class ForunSujet extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          
        }
      
       
       
      }
    render() {
       
    return (
        
            <Card disabled={true} style={styles.card}>
                <View style={styles.cardContent}>
                    <View style={styles.headerContainer}>
                        <Image style={styles.image} source={Images.electricite} />
                        <View>
                        <Text  category='s2'>Electricité</Text>
                        <Text  category='label'>11/12/2020 11h30</Text>
                        <Text  category='s1'> Voyez ce jeu exquis wallon, de graphie en kit mais bref. </Text>
                        </View>
                    </View>
                    <View style={styles.description}>
                    <Text style={{textAlign:'justify'}}  category='s1' >Voyez ce jeu exquis wallon, de graphie en kit mais bref.  Voyez ce jeu exquis wallon, de graphie en kit mais bref.  Voyez ce jeu exquis wallon, de graphie en kit mais bref.  Voyez ce jeu exquis wallon, de graphie en kit mais bref.  Voyez ce jeu exquis wallon, de graphie en kit mais bref.</Text>

                    </View>
                </View>
               
            
            </Card>
       
      
    );
}
}


const styles = StyleSheet.create({
    card:{
        width:'100%'
    },
  cardContent:{
      margin:-15
  },
  headerContainer:{
    flexDirection:'row',
    width:'90%',
    alignItems:'center'
  },
  image:{
      width:50,
      height:50
  },
  description:{
   
  }
 

  
 
  });

export default ForunSujet;
