import React from "react";
import { View,StyleSheet,ScrollView, Image,TouchableHighlight } from "react-native";
import { Text,  } from '@ui-kitten/components';
import ForunSujet from '../Components/forumSujet';
import ForumReponse from '../Components/forumReponse'
import ForumClientReponse from '../Components/forumclientreponse'
import ReponseForm from '../Components/reponseform'
class Discussion extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          
        }
      
       
       
      }
    render() {
       
    return (
        
            <View style={styles.global} >
                
                <ScrollView style={styles.container}>
                <ForunSujet/>

                <View style={{backgroundColor:"#707070", width:"100%", paddingHorizontal:"5%", marginVertical:"3%",}}>
                    <Text status="control">Reponses</Text>
                </View>
                
                <ForumReponse/>
                <ForumClientReponse/>
                
                </ScrollView>
                
                
                <ReponseForm/>
            </View>
       
      
    );
}
}


const styles = StyleSheet.create({
  
  global:{
    backgroundColor:'#E6455E',
    flex:1,
    
    
},
container:{
    flexDirection:'column',
    backgroundColor:'#EE8795',
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    zIndex:10,
    paddingTop:10,
    paddingHorizontal:10
},

  
 
  });

export default Discussion;
