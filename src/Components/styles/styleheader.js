import {StyleSheet, Dimensions} from 'react-native';
export default StyleSheet.create({
    header: {
        backgroundColor:'#E6455E',
        height:60,
    },
    pseudoheader:{
        backgroundColor:'#E6455E',
        height:60,
        zIndex:0
        
    },
    component:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        
        
    },
    image:{
        width: 41,
        height: 41,
        marginRight:5,
    },
    text:{
        color:'white',
        fontWeight:'bold'
    },
    profile:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    }
    
  });