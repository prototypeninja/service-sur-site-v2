import React from 'react';
import { StyleSheet, View,Image,TouchableOpacity } from 'react-native';
import Images from '../Theme/Images';
import { Text,Card } from '@ui-kitten/components';


class Banner extends React.Component {
  constructor(props) {
    super(props)
    
  }



  
    render() {
        
    return (
      
        <Card style={styles.card}>

        <View style={styles.global} >
            <Image source={Images.plumbingTool} style={{width:'40%'}} />
            <View style={styles.container} >
                <View>
                <Text category='h6'>Je suis technicien</Text>
                <Text style={{fontSize:10}} numberOfLines={6}>Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, dolor sit ametdolor sit ametdolor sit ametdolor sit ametdolor sit amet</Text>
                </View>
                
                <View style={{flexDirection:'row', width:'100%', justifyContent:'flex-end'}}>
                <TouchableOpacity style={{backgroundColor:'#E6455E',  padding:2, width:'90%', bottom:-2}} onPress={() =>this.props.displayTechHome()}>
                    <Text style={{color:'white', textAlign:'center'}}>Espace technicien</Text>
                </TouchableOpacity>
                </View>
                
            </View>
         </View>
      </Card>
     
    )
}
}

const styles = StyleSheet.create({
  card:{
      borderRadius:20,
  },
  global:{
      display:'flex',
      flexDirection:'row',
      margin:-25
  },
  container:{
      padding:'3%',
      width:'65%',
      justifyContent:'space-between'
  },
  button:{
      width:'70%',
      
  }
});
 
export default Banner