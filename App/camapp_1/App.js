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


const pendingView = () => {
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
      <SafeAreaView>
        
      <View>
        <Text>
          Cam App
        </Text>
      </View>


      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
