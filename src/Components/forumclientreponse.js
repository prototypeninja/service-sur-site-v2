import React from "react";
import { View,StyleSheet, Image,TouchableHighlight } from "react-native";
import { Text,Card  } from '@ui-kitten/components';
import Images from '../Theme/Images';


class ForumClientReponse extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            resolve:false
        }
       
       
      }
      
    
    render() {
       
    return (
        
            <Card disabled={true} style={styles.card}>
                <View style={styles.cardContent}>
                    <View style={{flexDirection:'row', marginVertical:10, justifyContent:'space-between'}}>
                        <View style={{flexDirection:'row'}}>
                        <Image style={styles.image} source={Images.electricite}/>
                            <View>
                            <Text  category='s2'>Client</Text>
                            <Text  category='label'>11/12/2020 11h30</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.description}>
                    <Text style={{textAlign:'justify'}}  category='s1' > Voyez ce jeu exquis wallon, de graphie en kit mais bref.  Voyez ce jeu exquis wallon, de graphie en kit mais bref.  Voyez ce jeu exquis wallon, de graphie en kit mais bref.   </Text>

                    </View>
                </View>
               
            
            </Card>
       
      
    );
}
}


const styles = StyleSheet.create({
    card:{
        width:'100%',
        marginBottom:10
    },
  cardContent:{
      margin:-15
  },
  
  description:{
   
  },
 
  image:{
    width:50,
    height:50
},
  
 
  });

export default ForumClientReponse;
