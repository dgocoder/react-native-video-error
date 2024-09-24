import { StatusBar } from 'expo-status-bar';
import { useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Video from 'react-native-video';

export default function App() {
  const videoRef = useRef(null);
  return (
    <View style={styles.container}>
      <Video
        ref={videoRef}
        source={{
          uri: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        }}
        style={styles.video}
        controls
        playInBackground
        pictureInPicture
        allowsExternalPlayback
        ignoreSilentSwitch="ignore"
        resizeMode="contain"
        onPictureInPictureStatusChanged={(e) => console.log(e)}
        preventsDisplaySleepDuringVideoPlayback
      />
    </View>
  );
}

const styles = StyleSheet.create({
  video: {
    height: "100%",
    width: "100%",
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
