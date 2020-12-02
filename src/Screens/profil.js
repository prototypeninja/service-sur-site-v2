import React from "react";
import { View,StyleSheet, Image,TouchableOpacity, ScrollView } from "react-native";
import { Text,Card,Input,Icon,Button    } from '@ui-kitten/components';
import {Collapse,CollapseHeader, CollapseBody} from 'accordion-collapse-react-native';

import Images from '../Theme/Images';
import { connect } from 'react-redux'
const mapStateToProps = (state) => {
    return state
  }

class Profil extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
       
      }
      loginOut=()=>{
        const action = { type: "TOGGLE_DATA_USER", value:false  }
        this.props.dispatch(action)
        this.props.navigation.navigate('Login') 
    
      }
    
    render() {
        let userData=this.props.userdata
       let username=userData.name.split(" ")
    return (
        
        <View style={styles.global}>
            <View style={styles.header}>
                <Image style={styles.image} source={Images.profilec} />
                <View >
                    <Text status="control" category="h4">{username[0]}</Text>
                    <Text status="control" category="h5">{username[1]}</Text>
                    <Text  status='warning' category="label">{userData.username}</Text>
                </View>
            </View>
            <ScrollView style={styles.body}>
                <View style={styles.bodyHeard}>
                <Icon style={styles.icon} fill='#1CA77C' name='person' />
                    <Text>Mon compte</Text>
                </View>
            
                
                <Collapse style={styles.collape} >
                    <CollapseHeader style={styles.collapeHeard}>
                        <Icon style={styles.icon} fill='#434343' name='file-text' />
                        <Text>Modifier mon profil</Text>
                    </CollapseHeader>
                    <CollapseBody style={styles.collapseBody}>
                    <Input style={styles.input} size="small" placeholder='Nom'onChangeText={nextValue =>console.log(nextValue)}/>
                    <Input style={styles.input} size="small" placeholder='Prénom'onChangeText={nextValue =>console.log(nextValue)}/>
                    <Input style={styles.input} size="small" placeholder='Email'onChangeText={nextValue =>console.log(nextValue)}/>
                    <Input style={styles.input}  keyboardType='numeric' maxLength={8} size="small" placeholder='Téléphone'onChangeText={nextValue =>console.log(nextValue)}/>
                    <Input style={styles.input} size="small" placeholder='Ville'onChangeText={nextValue =>console.log(nextValue)}/>
                    <Input style={styles.input} size="small" placeholder='Adresse'onChangeText={nextValue =>console.log(nextValue)}/>
                    <Button size="small">Sauvegarder</Button>
                    </CollapseBody>
                </Collapse>

                <Collapse style={styles.collape} >
                    <CollapseHeader style={styles.collapeHeard}>
                        <Icon style={styles.icon} fill='#434343' name='people' />
                        <Text>Mes ami(e)s</Text>
                    </CollapseHeader>
                    <CollapseBody>
                    <Text>Ta daa!</Text>
                    </CollapseBody>
                </Collapse>

                <Collapse style={styles.collape} >
                    <CollapseHeader style={styles.collapeHeard}>
                        <Icon style={styles.icon} fill='#434343' name='credit-card' />
                        <Text>Mon portefeuille</Text>
                    </CollapseHeader>
                    <CollapseBody>
                    <Text>Ta daa!</Text>
                    </CollapseBody>
                </Collapse>

                <View style={styles.bodyHeard}>
                <Icon style={styles.icon} fill='#1CA77C' name='settings' />
                    <Text>Paramètres</Text>
                </View>

                <Collapse style={styles.collape} >
                    <CollapseHeader style={styles.collapeHeard}>
                        <Icon style={styles.icon} fill='#434343' name='bell' />
                        <Text>Notifications</Text>
                    </CollapseHeader>
                    <CollapseBody>
                    <Text>Ta daa!</Text>
                    </CollapseBody>
                </Collapse>

                <Collapse style={styles.collape} >
                    <CollapseHeader style={styles.collapeHeard}>
                        <Icon style={styles.icon} fill='#434343' name='shield' />
                        <Text>Sécurité</Text>
                    </CollapseHeader>
                    <CollapseBody>
                    <Text>Ta daa!</Text>
                    </CollapseBody>
                </Collapse>
            </ScrollView>
            <View style={styles.buton}  >
                <TouchableOpacity style={styles.btncontainer} onPress={() => this.loginOut()}>
                <Icon style={styles.icon} fill='#FFFFFF' name='log-out' />
                <Text status='control' category='h6'>Se déconnecter</Text> 

                </TouchableOpacity>
            </View>
           
        </View>
       
      
    );
}
}


const styles = StyleSheet.create({
    global:{
        backgroundColor:'#272727',
        flex:1
    },
    header:{
        flexDirection:'row',
        paddingHorizontal:"5%",
        alignItems:'center',
    },
    image:{
    marginHorizontal:10
    },
    body:{
        backgroundColor:"#D4CECE",
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        height:"100%",
        marginTop:15
    },
    icon: {
        width: 32,
        height: 32,
        marginRight:10
      },
    
    bodyHeard:{
        flexDirection:'row',
        alignItems:'center',
        padding:15
    },
    collape:{
        backgroundColor:"#FFFFFF",
        marginTop:1
    },
    collapeHeard:{
        flexDirection:'row',
        alignItems:'center',
        paddingVertical:15,
        paddingHorizontal:"15%"
    },
    collapseBody:{
        paddingHorizontal:"3%",
        backgroundColor:"#272727",
        paddingVertical:"3%",
        alignItems:'center'

    },
    buton:{
        backgroundColor:'#D4CECE',
        paddingTop:15
    },
    btncontainer:{
        padding:10,
        backgroundColor:'#1CA77C',
        borderTopRightRadius:20,
        borderTopLeftRadius:20,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },

    
 
  
 
  });

  export default connect(mapStateToProps) (Profil)