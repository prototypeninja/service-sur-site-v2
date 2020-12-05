import React from "react";
import { View,FlatList,StyleSheet, } from "react-native";
import { Text,Card, Button,Modal } from '@ui-kitten/components';
import DemandeCard  from '../Components/demandecard'
import { connect } from 'react-redux'
import FormDemande from '../Components/formdemande';
import {taskList} from '../Api/apiOdoo';
const mapStateToProps = (state) => {
    return state
  }
class ListeDemande extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      test:false,
      visible:false,
      taskData:[],
      isLoad:false
     
    }
    
    this.titre=""
    this.description=""
    this.date=""
    this.time=""
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
        service:"neutre"

      }

      this.setState({visible:false})
    }else{
      alert('Veuillez remplir toute les information')
    }
    
  }
  reclamation=()=>{
    this.setState({visible:true})
  }

  componentDidMount(){
    let taskcheck= taskList(this.props.userdata.partner_id).then(data =>{
    
      this.setState({ isLoad: false, taskData:data.result })

  })
  }

  
  
    
    render() {
        
    return (
        
            <View style={styles.global} >
              <Modal style={{width:'80%', flexDirection:'column',alignItems:'center'}} visible={this.state.visible}>
              <Card  disabled={true}>
                <FormDemande senddata={this.senddata} chargetitre={this.chargetitre} chargedescription={this.chargedescription} chargedate={this.chargedate} chargetime={this.chargetime}/>
                
              </Card>
              <Button style={styles.button} size='tiny' status='danger'  onPress={() =>this.setState({visible:false})} >Annluer</Button>
            </Modal>
                <View style={styles.container}>
                    
                    <FlatList
                    data={this.state.taskData}
                    renderItem={({ item }) => (
                      <DemandeCard reclam={this.reclamation} taskdata={item}/>
                    )}
                  keyExtractor={(item, index) => index}
                />
                </View>
                
            
            </View>

            
       
      
    );
}
}


const styles = StyleSheet.create({
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
    
    rowelement:{
        flexDirection:'row'
    },
    button:{
      width:'50%',
      marginTop:10
    }
   

  });

export default connect(mapStateToProps)(ListeDemande);
