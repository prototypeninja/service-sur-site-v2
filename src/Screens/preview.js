import React from "react";
import {View,StyleSheet,Image } from "react-native";
import { Text,Input,Button,Spinner } from '@ui-kitten/components';
import Carousel from "pinar";
import { connect } from 'react-redux'
import Images from '../Theme/Images';
const mapStateToProps = (state) => {
    return state
  }
class Preview extends React.Component {
    constructor(props) {
      super(props)
      
    }
  
  
  _home(){
    const action = { type: "TOGGLE_DATA_USER", value:this.props.route.params.userdata  }
    this.props.dispatch(action)
    this.props.navigation.navigate('Home') 

  }
    
      render() {
      return (
        
        <Carousel showsControls={false}>
            <View style={styles.slide}>
            <Text style={styles.title} category='h5'>Trouvez un dépanneur</Text>
            <Text style={styles.text} category='p1'>Sélectionnez un service parmi tous les choix proposés et demander réparation, maintenance ou installation d'un outil chez vous ou au bureau.</Text>
                <Image source={Images.slide1}/>

                <Text style={styles.s1} category='s1'>Passer</Text>
            </View>
            
            <View style={styles.slide}>
            <Text style={styles.title} category='h5'>Tous les services</Text>
            <Text style={styles.text} category='p1'>Carrelage, Changement d'une ampoule, installation de votre climatiseur, tondre votre gazon, etc... Trouvez tous les services dont vous avez besoin</Text>
                <Image source={Images.slide2}/>
                
                <Text style={styles.s1} category='s1'>Passer</Text>
                <View style={{flexDirection:'row', width:'100%', justifyContent:'flex-end'}}>
                <Button onPress={() =>this._home() }> Commencer</Button>
                </View>
                
            </View>
        </Carousel>
       
      )
  }
  }
  
  const styles = StyleSheet.create({
    slide: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingRight:'5%',
        paddingLeft:'5%'
        
      },

      text: {
        textAlign:'center',
        color:'#999999'
      },
      title:{
        marginBottom:'3%',
         color:'#333333'
      },
      s1:{
          marginTop:'10%',
          marginBottom:'10%'
      }
  });
   
  export default connect(mapStateToProps) (Preview)