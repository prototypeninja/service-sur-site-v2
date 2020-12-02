import React from "react";
import { View,FlatList,StyleSheet,ScrollView } from "react-native";
import { Text,Card, Button,Modal,Tab, TabView,Layout } from '@ui-kitten/components';
import QuestionCard  from '../Components/questionCard';
import LiveHistCard  from '../Components/liveHistCard';
import { connect } from 'react-redux'
const mapStateToProps = (state) => {
    return state
  }
class ForumDemandeTech extends React.Component {
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

discussion=()=>{
    this.props.navigation.navigate('Discussion')
}
    
    render() {
        
    return (
        
            <View style={styles.global} >
              
               
                <TabView 
                    selectedIndex={this.state.selectedIndex}
                    onSelect={index => this.setState({selectedIndex:index})}>
                    <Tab style={styles.tabs} title={this.titleRender("Questions")}>
                        <View style={styles.tabContainer}>
                        <ScrollView style={styles.tabContainer}>
                            <QuestionCard discussion={this.discussion}/>
                            
                        </ScrollView>
                        
                        </View>
                    </Tab>
                    <Tab style={styles.tabs} title={this.doneRender("Historique")}>
                    <View style={styles.tabContainer}>
                            
                        <ScrollView style={styles.tabContainer}>
                            <QuestionCard discussion={this.discussion}/>
                        </ScrollView>
                        
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
        padding:3
    },
    
   
   

  });

export default connect(mapStateToProps)(ForumDemandeTech);
