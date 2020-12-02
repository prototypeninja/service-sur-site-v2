import React from 'react';
import { StyleSheet, View,ScrollView,PermissionsAndroid } from 'react-native';
import { Text,Input,Button,Spinner,Icon } from '@ui-kitten/components';
import {register} from '../Api/apiOdoo';
import Geolocation from 'react-native-geolocation-service';
import Geocode from "react-geocode";
Geocode.setApiKey("AIzaSyCE3ynXQFRSzpYiKvCExuQRJqj2jkKbf6U");

class Register extends React.Component {
  constructor(props) {
    super(props)
    this.nom=""
    this.prenoms=""
    this.number=""
    this.ville=""
    this.adresse=""
    this.password=""
    this.confirmpassword=""
    this.state={
      isLoad:false,
      addresse:""
  }
}

_nomChanged(text) {
  this.nom = text 
  }
_prenomsChanged(text) {
    this.prenoms = text 
  }
_passewordChanged(text) {
    this.password = text 
  }
_passewordconfirmeChanged(text) {
    this.confirmpassword = text 
  }
_numberChanged(text) {
    this.number = text 
  }
_villeChanged(text) {
    this.ville = text 
  }
_adresseChanged(text) {
    this.adresse = text 
    this.setState({addresse:text})
  }

load=()=>{
  if (this.state.isLoad) {
    return(
      <View style={[styles.indicator]}>
        <Spinner size='small'/>
      </View>
    )
  }else{
    return(
      <View style={[styles.indicator]}>
        
      </View>
    )
  }
 
 
}
 
_register(){
    
  console.log(this.adresse)
    if(this.nom!="" && this.prenoms!="" && this.number!="" && this.ville!="" && this.adresse!="" && this.prenoms!="" && this.password !=""){

        if(this.number.length==8){

            if(this.password == this.confirmpassword){
              this.setState({isLoad:true})
              let name=this.nom+" "+this.prenoms
              let email=this.nom+this.prenoms+"@gmail.com".toLowerCase()
              let mdp=this.password
              let number=this.number
              let ville=this.ville
              let street=this.adresse
              let registerResult= register(name,email,mdp,"+229"+number,ville,street).then(data =>{
                    this.setState({ isLoad: false })
                    console.log(data.result)
                    if (data.result==="existe") {

                      alert("Utilisateur existe déjà !")

                    } else {
                      alert("Votre compte a bien été enregistrer")
                    }
                    
        
               })

              }else{
                alert("Erreur password")
            }

        }else{
            alert("Le format de num n'est pas valide")
        }
    }else{

        alert("veuillez remplir tout les champ")
    }
    
}

getLocalisation=()=>{
  return(
<Icon style={styles.icon} fill='#8F9BB3'  name='pin-outline' onPress={() => this.localisation()}/>
  )
}

localisation=()=>{

  const granted = PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    {
        'title': 'Yebara Localisation permission',
        'message': 'Veuillez donner votre accord pour la localisation '
    })

if (granted) {

  


    Geolocation.getCurrentPosition(
        (position) => {
            console.log(position.coords);
            
            Geocode.setRegion("bj");
            Geocode.enableDebug(false);
            Geocode.fromLatLng(position.coords.latitude, position.coords.longitude).then(
              response => {
                const address = response.results[0].formatted_address;
                console.log(address);
                this.adresse=address
                this.setState({addresse:address})
              },
              error => {
                console.error(error);
              }
            );
        },
        (error) => {
            // See error code charts below.
            console.log(error.code, error.message);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
        
}

}


async componentDidMount() {
  
this.localisation()

}
  
    render() {
        
    return (
      
      <View style={styles.global}>
      <Text style={{marginBottom:'10%'}} category='h5' status='control'>ENREGISTREMENT</Text>
      <Input placeholder='Nom' onChangeText={nextValue => this._nomChanged(nextValue)}/>
      <Input placeholder='Prénoms' onChangeText={nextValue => this._prenomsChanged(nextValue)}/>
      <Input  placeholder='Mot de passe' secureTextEntry={true}  onChangeText={nextValue =>this._passewordChanged(nextValue)}/>
      <Input  placeholder='Confirmation de mot de passe' secureTextEntry={true}  onChangeText={nextValue => this._passewordconfirmeChanged(nextValue)}/>
      <Input placeholder='Téléphone'  keyboardType='numeric' maxLength={8} onChangeText={nextValue => this._numberChanged(nextValue)}/>
      <Input placeholder='Ville' onChangeText={nextValue => this._villeChanged(nextValue)}/>
      <Input placeholder='Adresse' value={this.state.addresse} onChangeText={nextValue => this._adresseChanged(nextValue)} accessoryRight={this.getLocalisation}/>
      <Button style={styles.button} status="info"  onPress={() => this._register()} accessoryLeft={this.load} disabled={this.state.isLoad}> S'enregistrer</Button>
      <Text onPress={() => this.props.navigation.navigate('Login')}>J'ai un compte</Text>
      

     
    </View>
    )
}
}

const styles = StyleSheet.create({
  global: {
    flex:1,
    flexDirection: 'column',
   justifyContent:'center',
    backgroundColor:'#EE8495',
    alignItems:'center',
    paddingLeft:'10%',
    paddingRight:'10%'
  },
  button:{
      width:'100%',
      marginTop:'5%'
  },
  indicator: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon:{
    width:30,
    height:30
  }
});
 
export default Register