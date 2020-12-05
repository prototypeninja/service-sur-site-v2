import * as React from 'react';
import {View} from 'react-native';
import { Button,Text} from '@ui-kitten/components';
import AudioRecorderPlayer, {
     AVEncoderAudioQualityIOSType,
     AVEncodingOption,
     AudioEncoderAndroidType,
     AudioSet,
     AudioSourceAndroidType,
    } from 'react-native-audio-recorder-player';

class AudioTest extends React.Component {
    
    constructor(props) {
            super(props);
            this.state = {
              isLoggingIn: false,
              recordSecs: 0,
              recordTime: '00:00:00',
              currentPositionSec: 0,
              currentDurationSec: 0,
              playTime: '00:00:00',
              duration: '00:00:00',
            };
            this.audioRecorderPlayer = new AudioRecorderPlayer();
        
            this.audioRecorderPlayer.setSubscriptionDuration(0.09); // optional. Default is 0.1
        }

        onStartRecord = async () => {
            const result = await this.audioRecorderPlayer.startRecorder();
            this.audioRecorderPlayer.addRecordBackListener((e) => {
              this.setState({
                recordSecs: e.current_position,
                recordTime: this.audioRecorderPlayer.mmssss(
                  Math.floor(e.current_position),
                ),
              });
              return;
            });
            console.log(result);
          };
           
          onStopRecord = async () => {
            const result = await this.audioRecorderPlayer.stopRecorder();
            this.audioRecorderPlayer.removeRecordBackListener();
            this.setState({
              recordSecs: 0,
            });
            console.log(result);
          };
           
          onStartPlay = async () => {
            console.log('onStartPlay');
            const msg = await this.audioRecorderPlayer.startPlayer();
            console.log(msg);
            this.audioRecorderPlayer.addPlayBackListener((e) => {
              if (e.current_position === e.duration) {
                console.log('finished');
                this.audioRecorderPlayer.stopPlayer();
              }
              this.setState({
                currentPositionSec: e.current_position,
                currentDurationSec: e.duration,
                playTime: this.audioRecorderPlayer.mmssss(Math.floor(e.current_position)),
                duration: this.audioRecorderPlayer.mmssss(Math.floor(e.duration)),
              });
              return;
            });
          };
           
          onPausePlay = async () => {
            await this.audioRecorderPlayer.pausePlayer();
          };
           
          onStopPlay = async () => {
            console.log('onStopPlay');
            this.audioRecorderPlayer.stopPlayer();
            this.audioRecorderPlayer.removePlayBackListener();
          };
    render() {
      
    return (
      <View>
          <Text category='label'> info</Text>
        <Text category='label'> {this.state.recordTime}</Text>
        <Button  size='tiny' onPress={() => this.onStartRecord()}>RECORD</Button>
        <Button  size='tiny' onPress={() => this.onStopRecord()}>STOP</Button>
        <Text category='label'> Play</Text>
        <Text category='label'> {this.state.playTime}</Text>
        <Button  size='tiny' onPress={() => this.onStartPlay()}>Play</Button>
        <Button  size='tiny' onPress={() => this.onStopPlay()}>Stop</Button>

      </View>
    );
}
}


export default AudioTest;