import React from "react";
import { View,StyleSheet,ScrollView, Image,TouchableHighlight } from "react-native";
import { Text,Card,Button,Modal } from '@ui-kitten/components';
import Images from '../Theme/Images';
import FormDemande from '../Components/formdemande';
import { connect } from 'react-redux';
import ImagePicker from 'react-native-image-picker';
import {serviceDetail} from '../Api/apiOdoo';

const mapStateToProps = (state) => {
    return state
  }
class Formulaire extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          photo:Images.photo,
          test:false,
          techVille:0,
          techGlobal:0,
          detail:"",
          visible:true
         
        }
        this.titre=""
        this.description=""
        this.date=""
        this.time=""

        this._photoClicked = this._photoClicked.bind(this)
      }
      chargetitre=(text)=>{
        this.titre=text
        console.log(text)
      }
      chargedescription=(text)=>{
        this.description=text
        console.log(text)
      }
      chargetime=(text)=>{
        this.time=text
        console.log(text)
      }
      chargedate=(text)=>{
        this.date=text
        console.log(text)
      }
      senddata=()=>{
        if(this.titre!="" && this.description!="" && this.date!="" && this.time!=""){
          let  data= {
            titre:this.titre,
            description:this.description,
            jour:this.date,
            heure:this.time,
            photo:this.state.photo,
            photoUrl:this.state.photo.uri,
            service:this.props.route.params.servicedata.nom,
            id:this.props.userdata.partner_id
    
          }
    
          this.props.navigation.navigate('Resumer',{datademande:data})
        }else{
          alert('Veuillez remplir toute les information')
        }
        
      }

      audioScreen=()=>{
        this.props.navigation.navigate('AudioTest')
      }
     

      _photoClicked() {
        ImagePicker.showImagePicker({}, (response) => {
            if (response.didCancel) {
              console.log('L\'utilisateur a annulé')
            }
            else if (response.error) {
              console.log('Erreur : ', response.error)
            }
            else {
              console.log('Photo : ', response.uri )
              let requireSource = { uri: "data:image/png;base64,"+response.data }
              this.setState({
                photo:requireSource,
                test:true
              });
              this.photo=requireSource
            }
            

          })
          
      }
      _displayContent(){
        if(this.state.test==false){
          return(
            <Image source={this.state.photo} />
          )
        }else{
          return(
            <Image style={styles.logo} source={this.state.photo} />
          )
        }
      }
      componentDidMount(){
        let servicedata= serviceDetail(this.props.userdata.partner_id,this.props.route.params.servicedata.nom).then(data =>{
          console.log(data.result)
          if (data.result!="error service" && data.result!="error") {
            this.setState({
              techVille:data.result.techVille,
              techGlobal:data.result.techGlobal,
              detail:data.result.detail
            })
          }else if (data.result==="error service") {
            this.setState({
              detail:"service non disponible"
            })
          }
      })
      }
    
    render() {
        
    return (
        
            <View style={styles.global} >
              
                <View style={styles.container}>
                    <ScrollView>
                        <Card style={styles.card}>
                            <View style={styles.layout1}>
                                <Image style={styles.image} source={this.props.route.params.servicedata.image} />
                                <View>
                                    <Text style={{color:'#26325B'}} category='h6'>{this.props.route.params.servicedata.nom}</Text>
                                    <Text category ='c2'>{this.state.techVille} Techniciens disponibles dans votre villes</Text>
                                    <Text category ='c2'>{this.state.techGlobal} Techniciens disponibles en générale</Text>
                                    <View style={{flexDirection:'row', width:'85%', justifyContent:'flex-end'}}>
                                    <Button style={styles.button} size='tiny' onPress={()=>alert(this.state.detail)}>Détail de service</Button>
                                    </View>
                                    
                                </View>

                            </View>
                        </Card>
                        <Card disabled={true} style={styles.card}>
                            <TouchableHighlight style={styles.cameracontainer} onPress={this._photoClicked}>
                            {this._displayContent()}
                            </TouchableHighlight>
                            <FormDemande  audioScreen={this.audioScreen} senddata={this.senddata} chargetitre={this.chargetitre} chargedescription={this.chargedescription} chargedate={this.chargedate} chargetime={this.chargetime}/>
                        </Card>
                        </ScrollView>
                    
                </View>
            
            </View>

            
       
      
    );
}
}


const styles = StyleSheet.create({
    card:{
        borderRadius:20,
        marginTop:20,
        
    },
    logo: {
      width: '100%',
      height: '100%',
    },
    global:{
        backgroundColor:'#E6455E',
        flex:1
        
    },
    container:{
        flexDirection:'column',
        backgroundColor:'#EE8495',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        zIndex:10,
        flex:1,
        padding:10,
    },
    image:{
        width:80,
        height:80,
        marginRight:9
    },
    layout1:{
        flexDirection:'row',
        margin:-10,
        alignItems:'center'
    },
    cameracontainer:{
        width:'100%',
        height:110,
        marginBottom:10,
        backgroundColor:'#676262',
        alignItems:'center',
        justifyContent:'center'
    }
   

  });

export default connect(mapStateToProps)(Formulaire);
