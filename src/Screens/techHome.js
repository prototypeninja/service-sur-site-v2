import React from "react";
import { View,TouchableOpacity,StyleSheet,Image, } from "react-native";
import Images from '../Theme/Images';
import { Text,Card, Button,Modal,Icon,Avatar } from '@ui-kitten/components';
import { connect } from 'react-redux';
import MapView, { Marker } from 'react-native-maps';
import Geocode from "react-geocode";
Geocode.setApiKey("AIzaSyCE3ynXQFRSzpYiKvCExuQRJqj2jkKbf6U");
const CallIcon = (props) => (
  <Icon {...props} name='phone-call-outline'/>
);
const mapStateToProps = (state) => {
    return state
  }
class TechHome extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
      modalVisible: false,
      coord: {},
      region: {
        latitude: 6.472160,
        longitude: 2.626520,
        latitudeDelta:  1,
        longitudeDelta: 0
      },
      maker:[],
      currenttache:""
        
    }
    
  }
  
    
    
 
  componentDidMount() {
    let dataTache=[{
      id:1,
      cordones:"Bénin, Abomey-calavi"
    },
    {
      id:2,
      cordones:"Bénin, Cotnou, sikecodji"
    },
    {
      id:3,
      cordones:"Bénin, cotonou, étoile rouge"
    },
    {
      id:4,
      cordones:"Bénin, Abomey-calavi, cococodji"
    },
    {
      id:5,
      cordones:"Bénin, Abomey-calavi, godomey"
    },
    {
      id:6,
      cordones:"Bénin, calavi kpota"
    },
  
  ]
  for (let index = 0; index < dataTache.length; index++) {
    Geocoder.from(dataTache[index].cordones).then(json => {
      var location = json.results[0].geometry.location;
      let locationObjt=[{
        id:dataTache[index].id,
        locations:{
          latitude:location.lat,
          longitude:location.lng,
        }
    }]
      this.setState({
        maker: [ ...this.state.maker, ...locationObjt ]
         
       })  
    })
    .catch(error => console.warn("error",error));

   }
    
  }
  rendermodal=(id, coordonne)=>{
    
    region= {
      latitude:coordonne.latitude,
      longitude: coordonne.longitude,
      latitudeDelta:  0.1,
      longitudeDelta: 0
    },
    this.setState({modalVisible: true, region:region})
  }

  renderMaker=(item)=>{
    
    if(item!=undefined){
      return(
        <Marker key={item.id}
          coordinate={item.locations}
          onPress={() =>this.rendermodal(item.id, item.locations)}
        >
      </Marker >
      )
    }
  }
    
  onRegionChange = (region) => {
    //this.setState({ region: region });
  }

  _displayListdemande=()=>{
    this.props.navigation.navigate('TechDemande')
  }

  _displayLiveDemande=()=>{
      this.props.navigation.navigate('LiveDemande')
  }

  _displayForumDemande=()=>{
    this.props.navigation.navigate('ForumDemandeTech')
}
  
    
    render() {
    return (
        <View style={{flex:1}}>
          <Modal style={{width:'100%', flexDirection:'column',alignItems:'center'}} visible={this.state.modalVisible}>
              <Card style={styles.card}  disabled={true}>
                  <View style={styles.cardcontent}>
                    <View style={styles.modalMapHead}>
                    <Avatar size='large' source={Images.profileneutre}/>
                        <View>
                          <Text status="control" category="label">Nom Prénoms</Text>
                          <Text status="control" category="label">Akpakpa centre, rue  ...</Text>
                          <Text status="control" category="label">Date: 12/ Décembre 2020 </Text>
                        </View>
                        <TouchableOpacity style={styles.iconClose} onPress={() =>this.setState({modalVisible:false})}>
                        <Icon style={styles.icon} fill='#FFFFFF' name='close-outline' />
                        </TouchableOpacity>
                        
                    </View>
                    <View style={styles.hr}></View>
                    <View >
                      <Text status="control" category="label">Requête: Lorem ipsum dolor sit amet, amet</Text>
                      <Text status="control" category="label" style={{textAlign:'justify'}}>Description: Lorem ipsum consetetur sadi elitr, sed diam nonumy eirmod tempor invidunt ut labore.... </Text>
                    </View>
                    <View style={styles.hr}></View>

                    <View style={styles.modalMapfoot}>
                    <Button style={styles.button} status="control" size='tiny'>S'assigné</Button>
                    <Button style={styles.button} status='info' size='tiny' accessoryLeft={CallIcon}>Appeler</Button>
                    </View>
                  </View>
                                    
              </Card>
            </Modal>
          <MapView zoomEnabled={true} zoomTapEnabled={true} zoomControlEnabled={true}
            style={{ flex: 1 }}
            region={
              this.state.region} showsUserLocation={true}
              onRegionChange={this.onRegionChange}
          >
            
          {this.state.maker.map(this.renderMaker)}


          </MapView>
          <View style={styles.footer}>
          <TechFooter displayListdemande={this._displayListdemande} displayLiveDemande={this._displayLiveDemande} displayForumDemande={this._displayForumDemande}/>
          </View>
            
          
        </View>
      
    
            
       
      
    );
}
}


const styles = StyleSheet.create({
  footer: {
    zIndex:9999,
    position:"absolute",
    width:"100%",
    bottom:0
  },
  card:{
    backgroundColor:'#E6455E',
    width:"70%",
    borderColor:'#E6455E',
    borderRadius:10
},
cardcontent:{
    margin:-15,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
},
modalMapHead:{
  flexDirection:'row',
  width:"100%",
  alignItems:'center'
},
hr:{
  height:1,
  backgroundColor:"#FFFFFF",
  width:"120%"
},
modalMapfoot:{
  flexDirection:'row',
  justifyContent:'space-between',
  width:"100%",
  paddingVertical:3
},
icon: {
  width: 20,
  height: 20,
},
iconClose:{
  flexDirection:'row',
  justifyContent:'flex-end',
  flexWrap:'wrap',
  alignContent:'flex-start',
  width:'23%',
  height:'100%'
}
    
    
   

  });

export default connect(mapStateToProps)(TechHome);
