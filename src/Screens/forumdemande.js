import React from "react";
import { View,StyleSheet,ScrollView, Image,TouchableHighlight } from "react-native";
import { Text,Card,Button } from '@ui-kitten/components';
import Forumdemandeitem from '../Components/forumdemandeitem'
import { connect } from 'react-redux';
const mapStateToProps = (state) => {
    return state
  }
class ForumDemande extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
         
        }
        
       
      }
      
     
discussion=()=>{
    this.props.navigation.navigate('Discussion')
}
    
    render() {
        
    return (
        
            <View style={styles.global} >
                <View style={styles.container}>
                <Text  category='h6' status='control'>Mes discutions</Text>
                    <ScrollView>
                        <Forumdemandeitem discussion={this.discussion}/>
                    </ScrollView>
                    <TouchableHighlight onPress={() => this.props.navigation.navigate('ForumForm')} style={{backgroundColor:'#E6455E', width:"80%", paddingVertical:5, paddingHorizontal:10, alignItems:'center', borderRadius:15}}>
                        <Text category='p1' status='control'>
                        Créer une nouvelle préoccupation
                        </Text>
                    </TouchableHighlight>
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
        backgroundColor:'#EE8795',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        zIndex:10,
        flex:1,
        padding:10,
        alignItems:'center'
    },
    

  });

export default connect(mapStateToProps)(ForumDemande);
