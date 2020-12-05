import React from 'react';
import { StyleSheet, View,ActivityIndicator,  } from 'react-native';
import { Text,Input,Button } from '@ui-kitten/components';
import {login} from '../Api/apiOdoo';
import { connect } from 'react-redux'
const mapStateToProps = (state) => {
  return state
}


class Login extends React.Component {

  constructor(props) {
    super(props)
    this.state={
        isLoad:false
    },
    this.number=""
    this.password=""
}
_numberChanged(text) {
    this.number = text 
  }
  _passwordChanged(text) {
    this.password = text 
  }

  
_login(){
    

        this.setState({ isLoad: true })
       let loginresult= login("+229"+this.number,this.password).then(data =>{
        this.setState({ isLoad: false })
        if(data.result==="none"){
          alert('Echec de connexion')
        }else if (data.result==="error") {
          alert('Erreur de connexion')
        }else if(data.result.partner_id!=undefined){
        
          this.props.navigation.navigate('Preview',{userdata:data.result})
        }

       })

}

_displayContent(){
  if(this.state.isLoad===true){
      return(
        <View style={styles.global}>
          <ActivityIndicator size="large" color="#ffffff" />
          </View>
      )
  }else{
      return(
        <View style={styles.global}>

        <Text style={{marginBottom:'10%'}} category='h5' status='control'>SERVICE DE REPARATION</Text>
        <Input placeholder='Téléphone'  keyboardType='numeric' maxLength={8} onChangeText={nextValue =>this._numberChanged(nextValue)}/>
        <Input secureTextEntry={true} placeholder='Mot de passe'  onChangeText={nextValue =>this._passwordChanged(nextValue)}/>
        <Button style={styles.button} onPress={() => this._login()}> Connexion</Button>
        <Button style={styles.button} status="info" onPress={() => this.props.navigation.navigate('Register')}> S'enregistrer</Button>
    
      </View>
      )
  }
}
    render() {
    return (
      <React.Fragment>
      {this._displayContent()}
      </React.Fragment>
    )
}
}

const styles = StyleSheet.create({
  global: {
    flex: 1,
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
  }
});
 
export default connect(mapStateToProps)(Login);