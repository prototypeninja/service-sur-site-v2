import * as React from 'react';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import {View} from 'react-native';
import { Button,Text} from '@ui-kitten/components';
class TimeComponent extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            isDatePickerVisible:false
        }
        this.time=this.newTime()
        
        
       
        
      }
      newTime=()=>{
        var today = new Date();
        var l=today.toLocaleTimeString()
            l=today.getHours()+" heure "+today.getMinutes()+" minutes"
      return l
      }
      
       _hideDatePicker () {
        this.setState({ isDatePickerVisible: this.state.isDatePickerVisible=false })
      };


       _handleConfirm (date){

        let heure=date.toLocaleTimeString()
        this.props.timef(heure)
        this.time=date.getHours()+" heure "+date.getMinutes()+" minutes"
        
       this._hideDatePicker();
      };
   
    render() {
      
    return (
      <View>
        <Text category='label'> {this.time}</Text>
        <Button  size='tiny' onPress={() => this.setState({ isDatePickerVisible: this.state.isDatePickerVisible=true })}>Modifier l'heure</Button>
        
        <DateTimePickerModal
          isVisible={this.state.isDatePickerVisible}
          mode="time"
          onConfirm={this._handleConfirm = this._handleConfirm.bind(this)}
          onCancel={this._hideDatePicker = this._hideDatePicker.bind(this)}
        />
      </View>
    );
}
}


export default TimeComponent;