import React from "react";
import { View,FlatList,StyleSheet,SafeAreaView } from "react-native";
import { Text,Card, Button,Modal,Tab, TabView,Layout } from '@ui-kitten/components';
import LiveCard  from '../Components/liveCard';
import LiveHistCard  from '../Components/liveHistCard';
import { connect } from 'react-redux'
const mapStateToProps = (state) => {
    return state
  }
class LiveDemande extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        selectedIndex:0
     
    }
    
    
  }
  titleRender=(text)=>{
      let isSelect=false
      if(this.state.selectedIndex==0){
        isSelect=true
      }
      return(
          <View style={[styles.title,{backgroundColor: isSelect ? '#701927' : '#FFFFFF',}]}>
              <Text status="primary">{text}</Text>
          </View>
      )
  }
doneRender=(text)=>{
    let isSelect=false
    if(this.state.selectedIndex==1){
      isSelect=true
    }
    return(
        <View style={[styles.title,{backgroundColor: isSelect ? '#701927' : '#FFFFFF',}]}>
            <Text status="primary">{text}</Text>
        </View>
    )
}
  
    
    render() {
        
    return (
        
            <View style={styles.global} >
              
               
                <TabView 
                    selectedIndex={this.state.selectedIndex}
                    onSelect={index => this.setState({selectedIndex:index})}>
                    <Tab style={styles.tabs} title={this.titleRender("Live")}>
                        <View style={styles.tabContainer}>
                            <SafeAreaView style={styles.container}>
                                
                                     <LiveCard/>
                                     <LiveCard/>
                                     <LiveCard/>
                            
                                 
                            </SafeAreaView>
                        
                        </View>
                    </Tab>
                    <Tab style={styles.tabs} title={this.doneRender("Historique")}>
                    <View style={styles.tabContainer}>
                            <SafeAreaView style={styles.container}>
                                
                                     <LiveHistCard/>
                                     <LiveHistCard/>
                                     <LiveHistCard/>
                            
                                 
                            </SafeAreaView>
                        
                        </View>
                    </Tab>
                </TabView>
               
            
            </View>

            
       
      
    );
}
}


const styles = StyleSheet.create({
    global:{
        backgroundColor:'#E6455E',
        flex:1
        
    },
    title:{
        width:100,
        height:40,
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center'
    },
    tabs:{
        backgroundColor:'#E6455E',
        marginTop:-3,
        marginBottom:-3

    },
    tabContainer:{
        backgroundColor:'#EE8495',
        height:'100%',
        padding:7
    },
    container: {
    
        flexDirection:'row',
        justifyContent:'space-between',
        flexWrap:'wrap'
     
    },
    
   
   

  });

export default connect(mapStateToProps)(LiveDemande);
