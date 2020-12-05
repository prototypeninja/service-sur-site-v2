import * as React from 'react';
import DateTimePickerModal from "react-native-modal-datetime-picker";;
import {View} from 'react-native';
import { Button,Text} from '@ui-kitten/components';

class DateComponent extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            isDatePickerVisible:false
        }
        this.jour=this.newDate()
       
        
      }
    
 
       _hideDatePicker () {
        this.setState({ isDatePickerVisible: this.state.isDatePickerVisible=false })
      };

      newDate=()=>{
        var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = today.getFullYear();

      today = mm + '-' + dd + '-' + yyyy;
      return today
      }
       _handleConfirm (date){
         let jour=date.toLocaleDateString()
         this.props.datef(jour)
         const mois=date.getMonth()+1
         this.jour=date.getDate()+"-"+mois+"-"+date.getUTCFullYear()
       this._hideDatePicker();
      };
   
    render() {
    return (
      <View>
        <Text category='label'> {this.jour}</Text>
        <Button  size='tiny' onPress={() => this.setState({ isDatePickerVisible: this.state.isDatePickerVisible=true })}>Modifier la date</Button>
        
        <DateTimePickerModal
          isVisible={this.state.isDatePickerVisible}
          mode="date"
          onConfirm={this._handleConfirm = this._handleConfirm.bind(this)}
          onCancel={this._hideDatePicker = this._hideDatePicker.bind(this)}
        />
      </View>
    );
}
}
export default DateComponent;