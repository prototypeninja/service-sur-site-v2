import React from "react";
import { View,StyleSheet,ScrollView, Image,TouchableHighlight } from "react-native";
import { Text,Card,Input,Button, Icon } from '@ui-kitten/components';
import Images from '../Theme/Images';
import DateComponent from './datecomponent';
import TimeComponent from './timecomponent'


class FormDemande extends React.Component {
    
    render() {
    return (
        
            
                <View style={styles.global}>
                    <Input style={styles.input} placeholder='Titre' onChangeText={nextValue =>this.props.chargetitre(nextValue)}/>
                    <Input style={styles.input} multiline={true} textStyle={{ minHeight: 64 }} placeholder='Description...' onChangeText={nextValue =>this.props.chargedescription(nextValue)} />

                    <View style={styles.container}>
                      <View>
                        
                        <DateComponent datef={this.props.chargedate}/>
                      </View>
                      <View >
                        
                        <TimeComponent timef={this.props.chargetime}/>
                      </View>
                    </View>
                   

                    <View style={styles.component}>
                      <TouchableHighlight style={styles.mic}>
                        <Image style={styles.bigimage} source={Images.mic} />
                      </TouchableHighlight>
                      <Text category='label' style={styles.text}>Ajouter une{"\n"}note vocale</Text>
                    </View>

                    <Button  style={styles.button} size='small' onPress={() =>this.props.senddata()}>Terminer</Button>
                </View>
            
           

            
       
      
    );
}
}


const styles = StyleSheet.create({
  input:{
borderColor:'red'
  },
  global:{
alignItems:'center',
  },
  container:{
    flexDirection:'row',
    justifyContent:'space-between',
    width:'100%'
  },
  
  button:{
    width:150,
    marginTop:'5%',
    marginBottom:'5%'
  },
  component:{
    flexDirection:'column',
    alignItems:'center',
  },
  text:{
      textAlign:'center'
  },
  bigimage:{
      width:30,
      height:30
  },
  mic:{
      borderRadius:50,
      backgroundColor:'#CCBDBD',
      padding:10,
  }

  });

export default FormDemande;
