import React from "react";
import { View,StyleSheet,ScrollView, Image,TouchableHighlight,SafeAreaView } from "react-native";
import { Text,Card,Input,Button, Icon } from '@ui-kitten/components';
import Images from '../Theme/Images';
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return state
  }
class Great extends React.Component {

    ListeDemande=()=>{
        this.props.navigation.navigate('ListeDemande')
    }
    home=()=>{
        this.props.navigation.navigate('Home')
    }
    
    render() {
       
    return (
        <SafeAreaView style={styles.global}>
            <ScrollView >
        <View style={styles.container}>
            
            <Image style={{width:120, height:120}} source={Images.likeround}/>
            <Text category='h5' status='control' style={{textAlign:'center'}}>Votre commande a été bien effectuée</Text>
            <Text category='p1' status='control' style={{textAlign:'center'}}>Nous avons bien reçu vore demande. Elle est en cours de traitement. Vous recevrez un email à cette adresse :</Text>
            
            

            <Card style={styles.card} >
                <View style={{margin:-10}}>
                <Text style={{color:'#C72740', fontSize:18, textAlign:'center'}}>Que se passe t-il ensuite ?</Text>
                <View style={styles.cardcontent}>
                    <Image  source={Images.sms} />
                    <Text category='p2' >Nous vous informerons par SMS, et Email
                        quand le réparateur sera prêt.</Text>
                </View>
                <View style={styles.cardcontent}>
                    <Image source={Images.call} />
                    <Text category='p2'>Le réparateur vous contactera avant 
                        de venir à votre domicile.</Text>
                </View >
                <View style={styles.cardcontent}>
                    <Image source={Images.star} />
                    <Text category='p2'>Arès réparation veuillez noter le réparateur 
                        et l'entreprise. Vous pouvez voir 
                        vos demandes dans le lien ci-dessous</Text>
                </View>
                
                </View>
            
            </Card>
            <TouchableHighlight style={[styles.buton,{borderColor:'#FFFFFF',}]} onPress={this.ListeDemande}>
                <Text category='label' status='control'>Voir la liste des demandes</Text>
            </TouchableHighlight>
            <TouchableHighlight style={[styles.buton,{borderColor:'#701927', backgroundColor:'#701927'}]} onPress={this.home}>
                <Text category='label' status='control'>Retour à l'accueil</Text>
            </TouchableHighlight>
            
            </View>
        </ScrollView>
        </SafeAreaView>

    );
}
}


const styles = StyleSheet.create({
    buton:{
        borderWidth:2,
        paddingHorizontal:30,
        paddingVertical:10,
        borderRadius:20,
        marginTop:10
        },
global:{
    backgroundColor:'#E6455E',
    flex:1,
    padding:20,
},
container:{
    flexDirection:'column',
    alignItems:'center',
    
    
    justifyContent:'space-between'
},
card:{
    width:'100%'
},
cardcontent:{
    flexDirection:'row',
    justifyContent:'space-between',
    width:'95%',
    marginTop:15
}
  });

export default connect(mapStateToProps)(Great);
