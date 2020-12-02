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
        this.jour="non défini"
       
        
      }
    
 
       _hideDatePicker () {
        this.setState({ isDatePickerVisible: this.state.isDatePickerVisible=false })
      };


       _handleConfirm (date){
         let jour=date.toLocaleDateString()
         this.props.datef(jour)
         const mois=date.getMonth()+1
         this.jour=date.getDate()+" - "+mois+" - "+date.getUTCFullYear()
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