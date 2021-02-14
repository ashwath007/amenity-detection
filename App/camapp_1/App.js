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
  takePicture = async function(camera) {
    const options = { quality: 0.5, base64: false };
    const data = await camera.takePictureAsync(options);
    //  eslint-disable-next-line
    console.log(data.uri);
    console.log(data);
    setimage(data.uri);
  };
  
  return (
    <View style={styles.container}>
      {image ? (
        <View style={styles.boxss}>

<Text style={styles.textcap}>Image is present</Text>

          </View>
        ) : (
        <RNCamera
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
        >
          {({ camera, status }) => {
            if (status !== 'READY') return <PendingView />;
            return (
              <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                <TouchableOpacity onPress={() => takePicture(camera)} style={styles.capture}>
                  <Text style={{ fontSize: 14 }}> SNAP </Text>
                </TouchableOpacity>
              </View>
            );
          }}
        </RNCamera>
        )}
      </View>

    // <>
      // <StatusBar barStyle="dark-content" />

        
      /* <View>
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
        >
          {({ camera, status}) => {
            if (status !== 'READY') return <PendingView />;
            return (
              <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                <TouchableOpacity onPress={() => takePicture(camera)} style={styles.capture}>
                  <Text style={{ fontSize: 14 }}> SNAP </Text>
                </TouchableOpacity>
              </View>
            );
          }}
        </RNCamera>

        )}
      </View> */


      
    // </>
  );

  
};




const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop:52
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginTop:105,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
  textcap:{
    color:'white'
  },
  boxss:{
    backgroundColor:'#BF3325'
  }
});

export default App;
