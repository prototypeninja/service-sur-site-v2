import React from "react";
import { View,StyleSheet, Image,TouchableHighlight } from "react-native";
import { Text,Card,Input   } from '@ui-kitten/components';
import Images from '../Theme/Images';


class ReponseForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
       
       
      }
      
    
    render() {
       
    return (
        
            <Card disabled={true} style={styles.card}>
                <View style={styles.cardContent}>
                <Input multiline={true} style={styles.input} size="small"  placeholder='Ecrire...'   onChangeText={nextValue => console.log(nextValue)}/>
                <TouchableHighlight style={styles.button}>
                    <Image style={styles.image} source={Images.mic} />
                </TouchableHighlight>
                <TouchableHighlight style={styles.button}>
                    <Image style={styles.image} source={Images.send} />
                </TouchableHighlight>
                </View>
               
            
            </Card>
       
      
    );
}
}


const styles = StyleSheet.create({
    card:{
       
        
    },
  cardContent:{
      margin:-15,
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'

  },
  input:{
      borderRadius:20,
      marginTop:5,
      width:'80%'
  },
  image:{
    width: 25,
    height:25
  },
  button:{
      backgroundColor:"#E5E5E5",
      padding:3,
      borderRadius:30

  }
  
 
  
 
  });

export default ReponseForm;
