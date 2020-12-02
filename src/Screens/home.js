import React from 'react';
import { StyleSheet, View,ScrollView,SafeAreaView,FlatList,TouchableHighlight,Image } from 'react-native';
import { Text,Input,Button,Modal,Card,SelectItem,Select } from '@ui-kitten/components';
import Banner from '../Components/banner'
import ServiceItem from '../Components/serviceItem'
import listeServices from '../Constent/serviceData';
import Footer from '../Components/footerbar'
import Images from '../Theme/Images';
import { connect } from 'react-redux'
const mapStateToProps = (state) => {
    return state
  }
class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state={
        visible:false,
        selectedIndex:""
    }
  }

  _displayform=(nam, picture)=>{
    this.props.navigation.navigate('Formulaire',{servicedata:{nom:nam, image:picture}})
}
  _displayListdemande=()=>{
    this.props.navigation.navigate('ListeDemande')
}

_displayForumDemande=()=>{
    this.props.navigation.navigate('ForumDemande')
}
displayTechHome=()=>{
    this.props.navigation.navigate('TechHome')
}
_calloption=()=>{
    this.setState({visible:true})
}
  
returnSelectvalue=(item)=>{
    let value=item.name
    return(<SelectItem key={item.id} title={value} onPress={() =>this.setState({ selectedIndex: value })}/>)
}
    render() {
        console.log("user",this.props.userdata.partner_id)
    return (
        <View style={styles.super}>
            <Modal style={{width:'100%', flexDirection:'column',alignItems:'center'}} visible={this.state.visible}>
              <Card style={styles.card}  disabled={true}>
                  <View style={styles.cardcontent}>
                  <Text status="control" category="label">Paramètre live</Text>
                  <Select size="small" style={styles.input}   placeholder='Services' value={this.state.selectedIndex} >
                {listeServices.map(this.returnSelectvalue)}
                </Select>
                  <Input multiline={true} style={styles.input} size="small"  placeholder='Ecrire...'   onChangeText={nextValue => console.log(nextValue)}/>
                  
                  <TouchableHighlight style={styles.camera}  onPress={() =>console.log('ok')} underlayColor='#' >
                    <Image  source={Images.camera} />
                    </TouchableHighlight>
                  </View>
                                    
              </Card>
              <Button style={styles.button} size='tiny' status='danger'  onPress={() =>this.setState({visible:false})} >Annluer</Button>
            </Modal>
        <ScrollView>
            <View style={styles.global}>
            <Banner displayTechHome={this.displayTechHome}/>
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={listeServices}
                    renderItem={({ item }) => (
                    <View style={styles.item}>
                        <ServiceItem displayform={this._displayform} services={item}/>
                    </View>
                    )}
                    numColumns={3}
                    keyExtractor={(item, index) => index}
                />
            </SafeAreaView>
            </View>
            
        </ScrollView>
        <Footer calloption={this._calloption} displayDemande={this._displayListdemande} displayForumDemande={this._displayForumDemande}/>
        </View>
        
        
    )
}
}

const styles = StyleSheet.create({
    super:{
        flex:1,
        flexDirection:'column',
        justifyContent:'space-between'
    },

    global:{
        padding:'3%',
    },
    container: {
    
        flexDirection:'row',
        marginTop:20,
     
    },
    item:{
        flex: 1, 
        justifyContent:'center',
        alignItems:'center',
         flexDirection: 'column', 
         marginBottom:10
    },
    card:{
        backgroundColor:'#E6455E',
        width:"70%",
        borderColor:'#E6455E'
    },
    cardcontent:{
        margin:-15,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    camera:{
        borderRadius:60,
        backgroundColor:'#FFFFFF',
        padding:20,
        marginBottom:5
    },
    input:{
        width:"100%",
        marginBottom:10
    }

  });
export default connect(mapStateToProps) (Home)