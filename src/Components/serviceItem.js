import * as React from 'react';
import { StyleSheet, View,Image } from 'react-native';
import { Text,Card } from '@ui-kitten/components';

class ServiceItem extends React.Component {
    render() {
const service=this.props.services
const displayform=this.props.displayform
  return (
      
    
      <Card style={styles.card} onPress={() => displayform(service.name,service.image)} >
          <View style={styles.cardContent}>
              <Text style={styles.text}>{service.name}</Text>
              <Image style={styles.image} source={service.image} />
          </View>
      </Card>
      
    
  );
}
};

const styles = StyleSheet.create({
    
    
    card:{
        width:100,
        borderRadius:25,
       
    },
    image:{
        width:59,
        height:60
    },
    cardContent:{
        alignItems:'center',
        paddingBottom:10,
        paddingTop:5,
         margin:-16
    },
    text:{
        fontSize:13,
        textAlign:'center',
        marginBottom:13
    }
    
  });

export default ServiceItem;