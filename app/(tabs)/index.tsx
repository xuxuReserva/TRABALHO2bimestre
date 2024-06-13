import React from 'react'
import { Image, Text, TouchableOpacity, View, StyleSheet, Linking, ToastAndroid  } from 'react-native';
import { BlurView } from 'react-native-blur';

import ParallaxScrollView from '@/components/ParallaxScrollView';


export default function HomeScreen() {
  const openUrl = async (url) => {
    if (await Linking.canOpenURL(url)) {
      await Linking.openURL(url);
    } else {
      ToastAndroid.show("Can't open this URL", ToastAndroid.SHORT);
    }
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/perfil.jpeg')}
          style={styles.profileImage}
        />
      }
      renderHeader={() => (
        <BlurView
          style={styles.blurContainer}
          blurType="light"
          blurAmount={10}
        >

        </BlurView>
      )}
    >

      <Text style={styles.title}>Bem-vindo!</Text>   

      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => openUrl('https://www.facebook.com/')}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Facebook</Text>
        </TouchableOpacity>  
      </View>

      <View>
      <TouchableOpacity
          onPress={() => openUrl('https://www.facebook.com/')}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Facebook</Text>
        </TouchableOpacity>
      </View>

      <View>
      <TouchableOpacity
          onPress={() => openUrl('https://www.facebook.com/')}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Facebook</Text>
        </TouchableOpacity>
      </View>
     
    </ParallaxScrollView>
    
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileImage: {
    width: 395,
    height: 250,
    resizeMode: 'cover',
  },
  blurContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  button: {
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 70,
    borderRadius: 8,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center'
  },
});