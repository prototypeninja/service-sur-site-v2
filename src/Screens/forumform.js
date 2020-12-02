import React from "react";
import { View,StyleSheet,ScrollView, Image,TouchableHighlight } from "react-native";
import { Text,Card,Input,Button, Select,SelectItem  } from '@ui-kitten/components';
import listeServices from '../Constent/serviceData';


class ForumForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          selectedIndex:""
        }
        this.titre=""
        this.description=""
       
       
      }
      chargedescription=(text)=>{
        this.description=text
      }
      chargetitre=(text)=>{
        this.titre=text
      }

    returnSelectvalue=(item)=>{
        let value=item.name
        return(<SelectItem key={item.id} title={value} onPress={() =>this.setState({ selectedIndex: value })}/>)
    }

    render() {
        console.log("ok",this.state.selectedIndex)
    return (
        
            <View style={styles.global} >
                <View style={styles.container}>
                <Text style={{marginBottom:'2%'}} category='h6' status='control'>Créer une préocupation</Text>
                <Select style={styles.input}   placeholder='Services' value={this.state.selectedIndex} >
                {listeServices.map(this.returnSelectvalue)}
                </Select>
                    <Input style={styles.input} placeholder='Titre' onChangeText={nextValue =>this.chargetitre(nextValue)}/>
                    <Input style={styles.input} multiline={true} textStyle={{ minHeight: 64 }} placeholder='Description...' onChangeText={nextValue =>this.chargedescription(nextValue)} />
                    <Button  style={styles.button} size='small' onPress={() =>this.props.senddata()}>Terminer</Button>
                
                </View>
            
            </View>
       
      
    );
}
}


const styles = StyleSheet.create({
  input:{
borderColor:'red',
width:'100%',
marginBottom:10
  },
  global:{
    backgroundColor:'#E6455E',
    flex:1
    
},
container:{
    flexDirection:'column',
    backgroundColor:'#EE8795',
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    zIndex:10,
    flex:1,
    padding:10,
    alignItems:'center'
},

  
  button:{
    width:150,
    marginTop:'5%',
    marginBottom:'5%'
  },
  });

export default ForumForm;
