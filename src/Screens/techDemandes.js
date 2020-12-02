import React from "react";
import { View,ScrollView,StyleSheet, } from "react-native";
import { Text,Card, Button,Modal,Tab, TabView,Layout } from '@ui-kitten/components';
import RDVCard  from '../Components/rdvCard';
import EnCoursCard  from '../Components/enCoursCard';
import TerminerCard  from '../Components/terminerCard';
import { connect } from 'react-redux'
const mapStateToProps = (state) => {
    return state
  }
class TechDemande extends React.Component {
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
  CourRender=(text)=>{
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
doneRender=(text)=>{
    let isSelect=false
    if(this.state.selectedIndex==2){
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
              
               
                <TabView  style={styles.tabview}
                    selectedIndex={this.state.selectedIndex}
                    onSelect={index => this.setState({selectedIndex:index})}>
                    <Tab style={styles.tabs} title={this.titleRender("Render-Vous")}>
                        <ScrollView style={styles.tabContainer}>
                        <RDVCard/>
                        </ScrollView>
                    </Tab>
                    <Tab style={styles.tabs} title={this.CourRender("En cours")}>
                        <ScrollView style={styles.tabContainer}>
                        <EnCoursCard/>
                        </ScrollView>
                    </Tab>
                    <Tab style={styles.tabs} title={this.doneRender("Terminer")}>
                        <ScrollView style={styles.tabContainer}>
                        <TerminerCard/>
                        </ScrollView>
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
    }
    
   
   

  });

export default connect(mapStateToProps)(TechDemande);
