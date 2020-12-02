import React from "react";
import { View,StyleSheet, Image,TouchableHighlight } from "react-native";
import { Text,Card  } from '@ui-kitten/components';
import Images from '../Theme/Images';


class ForumReponse extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            resolve:false
        }
       
       
      }
      setresolve=()=>{
          if(this.state.resolve===false){
            this.setState({resolve:true})
          }else{
            this.setState({resolve:false})
          }
          
      }
    checkresolve=()=>{
        if(this.state.resolve===false){
            return(
                <Image style={styles.image} source={Images.noresolver} />
            )
        }else{
            return(
            <View style={{flexDirection:'column', justifyContent:'center',alignItems:'center'}}>
                <Image style={styles.image} source={Images.resolve} />
                <Text style={{color:'#1CA77C'}}>+5</Text>
            </View>
            )
            
        }
    }
    render() {
       
    return (
        
            <Card disabled={true} style={styles.card}>
                <View style={styles.cardContent}>
                    <View style={{flexDirection:'row', marginVertical:10, justifyContent:'space-between'}}>
                        <View style={{flexDirection:'row'}}>
                            <Image style={styles.image} source={Images.chat} />
                            <View>
                            <Text  category='s2'>Technicien 1</Text>
                            <Text  category='label'>11/12/2020 11h30</Text>
                            </View>
                        </View>
                        <TouchableHighlight underlayColor="#"  onPress={() => this.setresolve()}>
                            
                            {this.checkresolve()}
                           
                        
                        </TouchableHighlight>
                        
                        
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
        width:'100%',
        marginBottom:10
    },
  cardContent:{
      margin:-15
  },
  
  description:{
   
  }
 

  
 
  });

export default ForumReponse;
