import { RNCamera, FaceDetector } from 'react-native-camera';
import React,{useState,useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Button,
  StatusBar,
} from 'react-native';


const PendingView = () => {
  return(
    <View style={{flex:1 ,justifyContent:'center',alignItems:'center'}}>
      <Text>
        Loading ....
      </Text>
    </View>
  )
}



const App = () => {

  const [image, setimage] = useState(null);

  const takePicture = async (camera) => {
    try{
      const options = {quality: 0.9, base64: false}
      const data = await camera.takePictureAsync(options)
      console.log(data);
      setimage(data.uri); 
    }
    catch(err){
      console.warn(err);
    }
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style="styles.container">
        
      <View>
        <Text>
          Cam App
        </Text>
      </View>
      <View style={styles.status}>
        {image ? (
          <Text>Image is present</Text>
        ) : (

          <RNCamera 
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          captureAudio={false}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: "Permission to use camera",
            message: "CameApp to use your camera",
            buttonPositive:'OK',
            buttonNegative:'Cancel'
          }}
          androidRecordAudioPermissionOptions={{
            title: "Permission to use audio",
            message: "CameApp to use your audio",
            buttonPositive:'OK',
            buttonNegative:'Cancel'

          } 
          }
          >
              { ({camera, status}) => {

                  if(status != 'Ready') return <PendingView/>
              }}
          </RNCamera>

        )}
      </View>


      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
    backgroundColor:'#0A79DF'
  },
  status:{
    justifyContent:'center',
    alignItems:'center'
  },
  preview:{
    flex:1,
    justifyContent:'space-around',
    alignItems:'center'
  }
});

export default App;
