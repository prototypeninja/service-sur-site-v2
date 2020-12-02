import React from "react";
import { View,StyleSheet,ScrollView, Image,TouchableHighlight } from "react-native";
import { Text,Card,Input,Button, Icon } from '@ui-kitten/components';
import Images from '../Theme/Images';
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return state
  }
class Resumer extends React.Component {

    sender=()=>{
        this.props.navigation.navigate('Great')
    }
    cancel=()=>{
        this.props.navigation.navigate('Home')
    }
    
    render() {
        const data=this.props.route.params.datademande
    return (
        
            
                <View style={styles.global}>
                    <Text category='h5' status='control'>Résumer de la demande</Text>
                    <Card style={styles.card}>
                        <View style={styles.cardContend}>
                            <Text>Service: {data.service}</Text>
                            <View style={styles.info}>
                                <View style={styles.infocontent}>
                                    <Text category='c1' >Date échéance</Text>
                                    <Text category='label'>{data.jour}</Text>
                                </View>
                                <View style={styles.infocontent}>
                                    <Text category='c1'>Heure d'écheance</Text>
                                    <Text category='label'>{data.heure}</Text>
                                </View>
                                <View style={styles.infocontent}>
                                    <Text category='c1'>Ville & adresse</Text>
                                    <Text category='label'>Abidjan</Text>
                                    <Text category='label'>2 plateau vallon</Text>
                                </View>
                            </View>

                            <Text>Requête: {data.titre}  </Text>
                            <Text style={{textAlign:'justify'}}>Description: {data.description}</Text>
                            <View style={styles.baner}>
                                <View style={styles.item}>
                                    <Image style={styles.itemImage} source={Images.ccm_1}/>
                                    <Text category='label' style={styles.textc}>Nous enregistrons votre demandes</Text>
                                    
                                </View>
                                <View style={styles.item}>
                                <Image style={styles.itemImage} source={Images.ccm_2}/>
                                    <Text category='label' style={styles.textc}>Nous sélectionnons l'artisan</Text>
                                </View>
                                <View style={styles.item}>
                                <Image style={styles.itemImage} source={Images.ccm_3}/>
                                    <Text category='label' style={styles.textc}>On s'occupe de tout</Text>
                                </View>
                            </View>
                        </View>
                    </Card>
                    <TouchableHighlight style={[styles.buton,{backgroundColor:'white',}]} onPress={this.sender}>
                        <Text style={{color:'#C72740'}}>Confirmer</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.buton} onPress={this.cancel}>
                        <Text style={{color:'white'}}>Annuler</Text>
                    </TouchableHighlight>
                </View>
            
      
    );
}
}


const styles = StyleSheet.create({
buton:{

paddingHorizontal:30,
paddingVertical:10,
borderRadius:20,
marginTop:10
},
  global:{
      backgroundColor:'#E6455E',
      flex:1,
      padding:15,
      alignItems:'center'
  },
  card:{
      width:"100%",
      flex:1,
      borderRadius:15
  },
  cardContend:{
      margin:-15,
      marginTop:5,
      flexDirection:'column',
      justifyContent:'space-between',
      height:'100%'   
  },
  info:{
      flexDirection:'row',
      justifyContent:'space-between',
      

  },
  infocontent:{
      alignItems:'center'
  },
  baner:{
      flexDirection:'row',
      justifyContent:'space-between'
  },
  item:{
      width:"30%",
      alignItems:'center'
  },
  itemImage:{
      width:60,
      height:60
  },
  textc:{
      textAlign:'center'
  }
  });

export default connect(mapStateToProps)(Resumer);
