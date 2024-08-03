import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

import Button from './.expo/components/Button';
import ImageViewer from './.expo/components/ImageViewer';

const PlaceholderImage = require('./assets/images/background-image.png')



export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer PlaceholderImageSource={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button label="Choose a photo" />
        <Button label="Use this photo" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({

  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  
});
